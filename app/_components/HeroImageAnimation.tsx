"use client";

import Image from "next/image";
import {motion} from "framer-motion";

interface HeroImageAnimationProps {
  imageSrc: any;
}

export default function HeroImageAnimation({
  imageSrc,
}: HeroImageAnimationProps) {
  return (
    <motion.div
      className='w-full md:w-[600px] max-w-full'
      initial={{opacity: 0, scale: 0.9}}
      animate={{opacity: 1, scale: 1}}
      transition={{duration: 0.6}}>
      <div className='relative rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(8,112,184,0.2)] group'>
        {/* Decorative elements */}
        <div className='absolute -top-4 -left-4 w-24 h-24 bg-blue-600/20 rounded-full filter blur-xl z-0'></div>
        <div className='absolute -bottom-8 -right-8 w-32 h-32 bg-purple-600/20 rounded-full filter blur-xl z-0'></div>

        {/* Light streak effect */}
        <motion.div
          className='absolute -top-[100px] -right-[100px] w-[250px] h-[500px] bg-white/10 rotate-45 z-10'
          initial={{x: -400, opacity: 0}}
          animate={{x: 400, opacity: 0.5}}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatDelay: 8,
          }}></motion.div>

        {/* Main image */}
        <div className='relative z-20 rounded-xl'>
          <Image
            className='rounded-xl transition-all duration-700 group-hover:scale-105 w-full h-auto'
            src={imageSrc}
            placeholder='blur'
            alt='Pragadeesh - Full Stack Developer'
            priority
          />

          {/* Gradient overlays */}
          <div className='absolute inset-0 bg-gradient-to-tr from-blue-600/30 to-transparent mix-blend-overlay rounded-xl'></div>
          <div className='absolute inset-0 bg-gradient-to-bl from-purple-500/20 via-transparent to-transparent rounded-xl'></div>
        </div>

        {/* Animated border glow */}
        <motion.div
          className='absolute inset-0 rounded-xl border-2 border-blue-500/0 z-30'
          animate={{
            boxShadow: [
              "0 0 0px rgba(96, 165, 250, 0)",
              "0 0 20px rgba(96, 165, 250, 0.5)",
              "0 0 0px rgba(96, 165, 250, 0)",
            ],
            borderColor: [
              "rgba(96, 165, 250, 0)",
              "rgba(96, 165, 250, 0.7)",
              "rgba(96, 165, 250, 0)",
            ],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "loop",
          }}></motion.div>

        {/* Floating particles effect with more particles */}
        <div className='absolute inset-0 overflow-hidden rounded-xl pointer-events-none z-30'>
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className='absolute rounded-full'
              style={{
                width: `${4 + Math.random() * 6}px`,
                height: `${4 + Math.random() * 6}px`,
                background: `rgba(255, 255, 255, ${0.3 + Math.random() * 0.4})`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              initial={{
                x: Math.random() * 100 - 50,
                y: Math.random() * 100 - 50,
                opacity: 0.2 + Math.random() * 0.6,
              }}
              animate={{
                x: Math.random() * 150 - 75,
                y: Math.random() * 150 - 75,
                opacity: 0,
              }}
              transition={{
                duration: 3 + Math.random() * 5,
                repeat: Infinity,
                ease: "linear",
                repeatDelay: Math.random() * 2,
              }}></motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
