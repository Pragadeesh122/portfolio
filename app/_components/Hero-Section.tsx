"use client";

import mainPage from "@/public/mainPage.png";
import HeroAnimations from "./HeroAnimations";
import HeroImageAnimation from "./HeroImageAnimation";
import {motion} from "framer-motion";

export default function HeroSection() {
  // Content data that could potentially come from a CMS or API in the future
  const heroData = {
    name: "Pragadeesh",
    title: "Full Stack Developer",
    description:
      "I build modern, high-performance applications with React, Next.js, Node.js, and TailwindCSS. Focused on creating intuitive user interfaces and seamless experiences that solve real business challenges.",
  };

  return (
    <>
      <div className='w-full grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 items-center py-8 md:py-16'>
        <div className='md:col-span-3 order-2 md:order-1 px-4 md:px-8'>
          <HeroAnimations
            name={heroData.name}
            title={heroData.title}
            description={heroData.description}
          />
        </div>

        <div className='md:col-span-2 order-1 md:order-2 flex justify-center'>
          <HeroImageAnimation imageSrc={mainPage} />
        </div>
      </div>

      {/* Enhanced decorative elements for light mode */}
      <motion.div
        className='absolute top-32 -left-16 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 dark:bg-blue-400/5 rounded-full filter blur-lg'
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.25, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className='absolute top-[40%] right-16 w-24 h-24 bg-gradient-to-r from-purple-400/20 to-pink-400/20 dark:bg-purple-400/5 rounded-full filter blur-lg'
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <motion.div
        className='absolute bottom-20 left-1/3 w-32 h-32 bg-gradient-to-r from-sky-400/20 to-teal-400/20 dark:bg-teal-400/5 rounded-full filter blur-lg'
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.25, 0.2],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Enhanced animated dots for light mode */}
      <motion.div
        className='absolute top-[20%] right-[15%] w-4 h-4 bg-gradient-to-r from-blue-500/40 to-indigo-500/40 dark:bg-blue-500/20 rounded-full'
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className='absolute top-[40%] left-[10%] w-3 h-3 bg-gradient-to-r from-purple-500/40 to-pink-500/40 dark:bg-purple-500/20 rounded-full'
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <motion.div
        className='absolute bottom-[30%] right-[25%] w-2 h-2 bg-gradient-to-r from-sky-500/40 to-teal-500/40 dark:bg-teal-500/20 rounded-full'
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
    </>
  );
}
