"use client";

import {motion} from "framer-motion";

export default function Hero({children}: {children: React.ReactNode}) {
  return (
    <div className='flex flex-col min-h-screen relative overflow-hidden'>
      {/* Base gradient background */}
      <div className='absolute inset-0 bg-gradient-to-br from-gray-50 via-gray-100 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-950 transition-colors duration-500'></div>

      {/* Subtle noise texture */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07] bg-[url('/noise.png')] pointer-events-none"></div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-5 dark:opacity-10 pointer-events-none"></div>

      {/* Animated gradient orbs - more subtle and varied */}
      <motion.div
        className='absolute top-0 left-5 w-[350px] h-[350px] bg-gradient-to-r from-blue-200/40 to-indigo-200/40 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-full filter blur-3xl opacity-40 dark:opacity-20'
        animate={{
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
          opacity: [0.4, 0.5, 0.4],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className='absolute top-1/4 right-10 w-[400px] h-[400px] bg-gradient-to-r from-violet-200/40 to-purple-200/40 dark:from-violet-900/20 dark:to-purple-900/20 rounded-full filter blur-3xl opacity-40 dark:opacity-20'
        animate={{
          y: [0, -40, 0],
          scale: [1, 1.15, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <motion.div
        className='absolute bottom-0 left-1/3 w-[450px] h-[450px] bg-gradient-to-r from-cyan-200/40 to-teal-200/40 dark:from-cyan-900/20 dark:to-teal-900/20 rounded-full filter blur-3xl opacity-40 dark:opacity-20'
        animate={{
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.5, 0.4],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5,
        }}
      />

      {/* Main content */}
      <div className='relative z-10 flex flex-col flex-1'>{children}</div>
    </div>
  );
}
