"use client";

import {useState, useEffect} from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {motion, AnimatePresence} from "framer-motion";
import {
  MessageSquareText,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  FileText,
} from "lucide-react";
import {toggleChatWindow} from "./ChatInterface";
import ResumeButton from "./ResumeButton";

// Define submenu items
const submenuItems = [
  {
    label: "Projects",
    description: "View my featured work",
    icon: <ExternalLink className='w-4 h-4' />,
    href: "/projects",
  },
  {
    label: "GitHub",
    description: "Check my repositories",
    icon: <Github className='w-4 h-4' />,
    href: "https://github.com/Pragadeesh122",
    external: true,
  },
  {
    label: "LinkedIn",
    description: "Connect with me",
    icon: <Linkedin className='w-4 h-4' />,
    href: "https://linkedin.com/in/pragadeeshvs",
    external: true,
  },
  {
    label: "Chat",
    description: "Ask me anything",
    icon: <MessageSquareText className='w-4 h-4' />,
    href: "#",
    action: "toggleChat",
  },
  {
    label: "Contact",
    description: "Get in touch",
    icon: <Mail className='w-4 h-4' />,
    href: "/contact",
  },
];

interface ModernSubmenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function ModernSubmenu({isOpen, setIsOpen}: ModernSubmenuProps) {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleItemClick = (item: (typeof submenuItems)[0]) => {
    if (item.action === "toggleChat") {
      toggleChatWindow();
    }
    setIsOpen(false);
  };

  const submenuVariants = {
    hidden: {opacity: 0, y: -10, height: 0},
    visible: {
      opacity: 1,
      y: 0,
      height: "auto",
      transition: {
        duration: 0.3,
        staggerChildren: 0.07,
        delayChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      height: 0,
      transition: {
        duration: 0.2,
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    hidden: {opacity: 0, y: -10},
    visible: {opacity: 1, y: 0},
    exit: {opacity: 0, y: -10},
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial='hidden'
          animate='visible'
          exit='exit'
          variants={submenuVariants}
          className='absolute top-full left-0 z-50 w-72 overflow-hidden'
          style={{transformOrigin: "top left"}}>
          <div className='p-2 bg-slate-950/90 backdrop-blur-lg border border-slate-800/70 rounded-lg shadow-2xl shadow-blue-900/20'>
            <div className='grid gap-1'>
              {submenuItems.map((item, index) => {
                const isActive = pathname === item.href;
                return (
                  <motion.div key={item.label} variants={itemVariants}>
                    {item.external ? (
                      <a
                        href={item.href}
                        target='_blank'
                        rel='noopener noreferrer'
                        onClick={() => handleItemClick(item)}
                        className={`flex items-center gap-3 px-3 py-2.5 rounded-md group transition-all duration-200 ${
                          isActive
                            ? "bg-blue-600/30 text-white"
                            : "text-slate-300 hover:bg-slate-800/80 hover:text-white"
                        }`}>
                        <div
                          className={`p-1.5 rounded-md ${
                            isActive
                              ? "bg-blue-500/20 text-blue-400"
                              : "bg-slate-800 text-slate-400 group-hover:text-blue-400 group-hover:bg-blue-900/20"
                          } transition-colors duration-200`}>
                          {item.icon}
                        </div>
                        <div className='flex flex-col'>
                          <span className='text-sm font-medium'>
                            {item.label}
                          </span>
                          <span className='text-xs text-slate-400'>
                            {item.description}
                          </span>
                        </div>
                        <ExternalLink className='w-3 h-3 ml-auto text-slate-500 group-hover:text-slate-300' />
                      </a>
                    ) : item.action === "toggleChat" ? (
                      <button
                        onClick={() => handleItemClick(item)}
                        className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-md group transition-all duration-200 text-slate-300 hover:bg-slate-800/80 hover:text-white`}>
                        <div className='p-1.5 rounded-md bg-slate-800 text-slate-400 group-hover:text-blue-400 group-hover:bg-blue-900/20 transition-colors duration-200'>
                          {item.icon}
                        </div>
                        <div className='flex flex-col text-left'>
                          <span className='text-sm font-medium'>
                            {item.label}
                          </span>
                          <span className='text-xs text-slate-400'>
                            {item.description}
                          </span>
                        </div>
                      </button>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => handleItemClick(item)}
                        className={`flex items-center gap-3 px-3 py-2.5 rounded-md group transition-all duration-200 ${
                          isActive
                            ? "bg-blue-600/30 text-white"
                            : "text-slate-300 hover:bg-slate-800/80 hover:text-white"
                        }`}>
                        <div
                          className={`p-1.5 rounded-md ${
                            isActive
                              ? "bg-blue-500/20 text-blue-400"
                              : "bg-slate-800 text-slate-400 group-hover:text-blue-400 group-hover:bg-blue-900/20"
                          } transition-colors duration-200`}>
                          {item.icon}
                        </div>
                        <div className='flex flex-col'>
                          <span className='text-sm font-medium'>
                            {item.label}
                          </span>
                          <span className='text-xs text-slate-400'>
                            {item.description}
                          </span>
                        </div>
                      </Link>
                    )}
                  </motion.div>
                );
              })}

              {/* Resume Button */}
              {/* <motion.div variants={itemVariants} className='mt-2 px-2'>
                <ResumeButton
                  variant='secondary'
                  className='w-full py-2 flex items-center justify-center gap-2 bg-blue-600/20 hover:bg-blue-600/30 text-white border-none'
                />
              </motion.div> */}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
