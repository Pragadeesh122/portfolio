"use client";

import {useState, useEffect} from "react";
import {createPortal} from "react-dom";
import {X, Download} from "lucide-react";
import {motion, AnimatePresence} from "framer-motion";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  resumeUrl: string;
}

export default function ResumeModal({
  isOpen,
  onClose,
  resumeUrl,
}: ResumeModalProps) {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  // Handle clicks outside the modal content to close
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!mounted) return null;

  const modal = (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}
          transition={{duration: 0.3}}
          className='fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-0 sm:p-4'
          onClick={handleBackdropClick}>
          <motion.div
            initial={{scale: 0.9, opacity: 0}}
            animate={{scale: 1, opacity: 1}}
            exit={{scale: 0.9, opacity: 0}}
            transition={{type: "spring", damping: 20, stiffness: 300}}
            className='bg-zinc-950 sm:border border-gray-800/50 sm:rounded-2xl overflow-hidden shadow-2xl shadow-black/60 flex flex-col w-full max-w-5xl h-full sm:h-[90vh]'
            onClick={(e) => e.stopPropagation()}>
            {/* Modal header */}
            <div className='flex items-center justify-between p-3 sm:p-4 border-b border-gray-800/50'>
              <h2 className='text-lg sm:text-xl font-semibold text-gray-200'>
                Resume
              </h2>
              <div className='flex items-center gap-2'>
                <a
                  href={resumeUrl}
                  download
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center justify-center rounded-lg text-sm font-medium h-8 sm:h-9 px-3 sm:px-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white hover:opacity-90 transition-opacity'>
                  <Download className='h-4 w-4 mr-1.5' />
                  <span className='hidden sm:inline'>Download</span>
                </a>
                <button
                  onClick={onClose}
                  aria-label='Close modal'
                  className='h-8 w-8 sm:h-9 sm:w-9 rounded-full flex items-center justify-center text-gray-500 hover:text-gray-300 hover:bg-gray-800/50 transition-colors'>
                  <X className='h-4 w-4 sm:h-5 sm:w-5' />
                </button>
              </div>
            </div>

            {/* PDF iframe */}
            <div className='flex-1 w-full bg-white overflow-auto'>
              <iframe
                src={`${resumeUrl}#toolbar=0&view=FitH`}
                className='h-full min-w-[700px] sm:min-w-0 w-full'
                title='Resume PDF'
                allowFullScreen
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return createPortal(modal, document.body);
}
