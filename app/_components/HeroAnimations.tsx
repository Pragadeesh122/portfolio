"use client";

import {motion} from "framer-motion";
import Link from "next/link";
import {ArrowRight, Github, Linkedin, Mail} from "lucide-react";

interface HeroAnimationsProps {
  name: string;
  title: string;
  description: string;
}

export default function HeroAnimations({
  name,
  title,
  description,
}: HeroAnimationsProps) {
  const letterVariants = {
    hidden: {opacity: 0, y: 20},
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + i * 0.05,
        duration: 0.5,
      },
    }),
  };

  return (
    <motion.div
      className='flex flex-col gap-8 sm:gap-10 max-w-3xl'
      initial={{opacity: 0, y: 20}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.5}}>
      <div className='text-lg'>
        <h1 className='mb-3 font-extrabold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl tracking-tight text-gray-800 dark:text-white leading-none'>
          <span className='inline-block mb-2'>Hi there, I&apos;m</span>
          <br />
          <div className='inline-flex'>
            {name.split("").map((letter, index) => (
              <motion.span
                key={index}
                custom={index}
                variants={letterVariants}
                initial='hidden'
                animate='visible'
                className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 dark:from-blue-400 dark:via-blue-300 dark:to-indigo-400'>
                {letter}
              </motion.span>
            ))}
          </div>
        </h1>

        <motion.div
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{delay: 0.8, duration: 0.6}}>
          <h2 className='text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-700 dark:text-gray-200 mb-5 tracking-tight'>
            <span className='relative'>
              <span className='inline-block'>{title}</span>
              <motion.span
                className='absolute bottom-1 left-0 h-[6px] bg-blue-200/60 dark:bg-blue-900/60 rounded-full z-[-1]'
                initial={{width: "0%"}}
                animate={{width: "100%"}}
                transition={{delay: 1.2, duration: 1}}
              />
            </span>
          </h2>
          <p className='text-gray-600 dark:text-gray-300 text-lg sm:text-xl leading-relaxed'>
            {description}
          </p>
        </motion.div>
      </div>

      <motion.div
        className='flex flex-wrap gap-4 sm:gap-6'
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{delay: 0.9, duration: 0.5}}>
        <Link
          href='https://drive.google.com/file/d/1VOzWOWeBXT6nW1QYXG9oyLQCBs1A67DI/view?usp=sharing'
          target='_blank'>
          <button className='px-7 py-3 text-lg font-semibold rounded-lg bg-gradient-to-r from-gray-800 to-gray-700 text-white hover:shadow-xl hover:-translate-y-0.5 transition duration-300 transform flex items-center gap-2 shadow-md'>
            View Resume
            <ArrowRight size={18} />
          </button>
        </Link>
        <Link href='/contact'>
          <button className='px-7 py-3 text-lg font-semibold rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:shadow-xl hover:-translate-y-0.5 transition duration-300 transform flex items-center gap-2 shadow-md'>
            Contact Me
            <Mail size={18} />
          </button>
        </Link>
      </motion.div>

      <motion.div
        className='flex gap-6 mt-2'
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{delay: 1.1, duration: 0.5}}>
        <Link
          href='https://github.com/Pragadeesh122'
          target='_blank'
          className='text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300 hover:scale-110 transform'
          aria-label='GitHub Profile'
          tabIndex={0}>
          <Github size={26} className='hover:rotate-12 transition-transform' />
        </Link>
        <Link
          href='https://www.linkedin.com/in/pragadeeshvs'
          target='_blank'
          className='text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300 hover:scale-110 transform'
          aria-label='LinkedIn Profile'
          tabIndex={0}>
          <Linkedin
            size={26}
            className='hover:rotate-12 transition-transform'
          />
        </Link>
      </motion.div>
    </motion.div>
  );
}
