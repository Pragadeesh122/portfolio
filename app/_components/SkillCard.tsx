"use client";

import Image, {StaticImageData} from "next/image";
import {motion} from "framer-motion";

interface SkillComponentProps {
  src: StaticImageData;
  alt: string;
  skill: string;
  category: string;
  proficiency: number;
}

export default function SkillComponent({
  src,
  alt,
  skill,
  category,
  proficiency,
}: SkillComponentProps) {
  return (
    <motion.div
      className='flex flex-col items-center justify-center space-y-3'
      initial={{opacity: 0, y: 20}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 0.5}}
      viewport={{once: true}}
      whileHover={{scale: 1.05}}
      whileTap={{scale: 0.95}}>
      <div className='group relative'>
        <div className='absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 via-indigo-400 to-purple-500 opacity-75 blur-sm group-hover:opacity-100 transition-opacity duration-300'></div>
        <div className='relative flex h-24 w-24 items-center justify-center rounded-full bg-gray-800 shadow-lg border border-gray-700'>
          <div className='h-12 w-12 relative transition-transform duration-300 group-hover:scale-110'>
            <Image src={src} alt={alt} fill className='object-contain' />
          </div>
        </div>
      </div>

      <div className='text-center'>
        <p className='font-semibold text-gray-800 dark:text-gray-100'>
          {skill}
        </p>
        <p className='text-xs text-gray-500 dark:text-gray-400'>{category}</p>
      </div>

      {/* <div className='w-full'>
        <div className='h-1.5 w-full bg-blue-100 dark:bg-gray-700 rounded-full overflow-hidden'>
          <motion.div
            className='h-full bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 dark:from-blue-400 dark:to-indigo-500 rounded-full'
            initial={{width: 0}}
            whileInView={{width: `${proficiency}%`}}
            transition={{duration: 1, delay: 0.2}}
            viewport={{once: true}}
          />
        </div>
      </div> */}
    </motion.div>
  );
}
