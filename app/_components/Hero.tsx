"use client";

import {motion} from "framer-motion";

export default function Hero({children}: {children: React.ReactNode}) {
  return (
    <div className='flex flex-col min-h-screen relative overflow-hidden'>
      {/* Base gradient background - Enhanced for light mode */}
      <div className='absolute inset-0 bg-gradient-to-br from-sky-50 via-indigo-50 to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-blue-950 transition-colors duration-500'></div>

      {/* Subtle noise texture */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07] bg-[url('/noise.png')] pointer-events-none"></div>

      {/* Animated gradient orbs - more vibrant for light mode */}
      <motion.div
        className='absolute top-0 left-5 w-[350px] h-[350px] bg-gradient-to-r from-blue-300/30 to-indigo-300/30 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-full filter blur-3xl opacity-40 dark:opacity-20'
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
        className='absolute top-1/4 right-10 w-[400px] h-[400px] bg-gradient-to-r from-indigo-300/30 to-purple-300/30 dark:from-violet-900/20 dark:to-purple-900/20 rounded-full filter blur-3xl opacity-40 dark:opacity-20'
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

      {/* New additional light blob for light mode */}
      <motion.div
        className='absolute bottom-1/4 left-1/3 w-[300px] h-[300px] bg-gradient-to-r from-sky-300/20 to-cyan-300/20 dark:from-sky-900/10 dark:to-cyan-900/10 rounded-full filter blur-3xl opacity-30 dark:opacity-10'
        animate={{
          y: [0, 35, 0],
          x: [0, -20, 0],
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.4, 0.3],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5,
        }}
      />

      {/* Additional organic blobs to replace grid pattern */}
      <motion.div
        className='absolute top-1/2 left-2/3 w-[250px] h-[250px] bg-gradient-to-r from-teal-300/20 to-emerald-300/20 dark:from-teal-900/10 dark:to-emerald-900/10 rounded-full filter blur-3xl opacity-30 dark:opacity-10'
        animate={{
          y: [0, -25, 0],
          x: [0, 15, 0],
          scale: [1, 1.08, 1],
          opacity: [0.3, 0.4, 0.3],
        }}
        transition={{
          duration: 17,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      />

      <motion.div
        className='absolute bottom-10 left-10 w-[200px] h-[200px] bg-gradient-to-r from-pink-300/20 to-rose-300/20 dark:from-pink-900/10 dark:to-rose-900/10 rounded-full filter blur-3xl opacity-25 dark:opacity-10'
        animate={{
          y: [0, 20, 0],
          x: [0, -10, 0],
          scale: [1, 1.1, 1],
          opacity: [0.25, 0.35, 0.25],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 7,
        }}
      />

      {/* Main content */}
      <div className='relative z-10 flex flex-col flex-1'>{children}</div>
    </div>
  );
}
