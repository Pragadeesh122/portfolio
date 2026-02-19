"use client";

import {motion} from "framer-motion";

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
  return (
    <motion.div
      className='flex flex-col gap-6 max-w-3xl'
      initial={{opacity: 0, filter: "blur(10px)"}}
      animate={{opacity: 1, filter: "blur(0px)"}}
      transition={{duration: 0.6, ease: [0.22, 1, 0.36, 1]}}>
      <div>
        <h1 className='mb-3 font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-none'>
          <span className='inline-block mb-2'>Hi there, I&apos;m</span>
          <br />
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400'>
            {name}
          </span>
        </h1>
        <h2 className='text-2xl sm:text-3xl font-semibold text-gray-200 mb-5 tracking-tight'>
          {title}
        </h2>
        <p className='text-gray-400 text-lg leading-relaxed'>{description}</p>
      </div>
    </motion.div>
  );
}
