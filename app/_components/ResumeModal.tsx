"use client";

import {useState, useEffect} from "react";
import {X, Download} from "lucide-react";
import {Button} from "@/app/_components/ui/button";
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

  // Handle escape key to close modal
  useEffect(() => {
    setMounted(true);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Handle clicks outside the modal content to close
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}
          transition={{duration: 0.3}}
          className='fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-2 sm:p-4'
          onClick={handleBackdropClick}>
          <motion.div
            initial={{scale: 0.9, opacity: 0}}
            animate={{scale: 1, opacity: 1}}
            exit={{scale: 0.9, opacity: 0}}
            transition={{type: "spring", damping: 20, stiffness: 300}}
            className='bg-white dark:bg-slate-900 rounded-lg overflow-hidden shadow-2xl flex flex-col w-full max-w-5xl h-[95vh] sm:h-[90vh]'
            onClick={(e) => e.stopPropagation()}>
            {/* Modal header */}
            <div className='flex items-center justify-between p-2 sm:p-4 border-b border-gray-200 dark:border-gray-700'>
              <h2 className='text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-200'>
                Resume
              </h2>
              <div className='flex items-center space-x-2'>
                <a
                  href={resumeUrl}
                  download
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center justify-center rounded-md text-sm font-medium h-8 sm:h-9 px-2 sm:px-4 py-1 sm:py-2 bg-blue-600 text-white hover:bg-blue-700 transition-colors'>
                  <Download className='h-4 w-4 mr-1 sm:mr-2' />
                  <span className='hidden sm:inline'>Download</span>
                </a>
                <Button
                  variant='ghost'
                  size='icon'
                  onClick={onClose}
                  aria-label='Close modal'
                  className='h-8 w-8 sm:h-9 sm:w-9'>
                  <X className='h-4 w-4 sm:h-5 sm:w-5' />
                </Button>
              </div>
            </div>

            {/* PDF iframe - simplify with direct tailwind classes */}
            <div className='flex-1 w-full h-[calc(95vh-4rem)] sm:h-[calc(90vh-4.5rem)]'>
              <iframe
                src={`${resumeUrl}#toolbar=0&view=FitH`}
                className='w-full h-full'
                title='Resume PDF'
                allowFullScreen
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
