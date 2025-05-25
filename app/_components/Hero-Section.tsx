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
      "I transform ideas into intelligent full stack applications, seamlessly integrating AI capabilities to create powerful, user-centric solutions. Using React, Next.js, Node.js, FastAPI, and LangChain to build intuitive experiences that solve real business challenges.",
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

      {/* Decorative elements - dark mode only */}
      <motion.div
        className='absolute top-32 -left-16 w-32 h-32 bg-blue-400/5 rounded-full filter blur-lg'
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
        className='absolute top-[40%] right-16 w-24 h-24 bg-purple-400/5 rounded-full filter blur-lg'
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
        className='absolute bottom-20 left-1/3 w-32 h-32 bg-teal-400/5 rounded-full filter blur-lg'
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

      {/* Animated dots - dark mode only */}
      <motion.div
        className='absolute top-[20%] right-[15%] w-4 h-4 bg-blue-500/20 rounded-full'
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
        className='absolute top-[40%] left-[10%] w-3 h-3 bg-purple-500/20 rounded-full'
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
        className='absolute bottom-[30%] right-[25%] w-2 h-2 bg-teal-500/20 rounded-full'
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
