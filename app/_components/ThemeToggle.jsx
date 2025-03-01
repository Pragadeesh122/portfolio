"use client";

import {MoonIcon, SunIcon} from "@heroicons/react/16/solid";
import {useTheme} from "next-themes";
import {useEffect, useState} from "react";
import {motion} from "framer-motion";

const ThemeToggle = () => {
  const {theme, setTheme} = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <motion.div
      className='relative p-2 rounded-full hover:bg-blue-100/70 dark:hover:bg-slate-800 transition-colors'
      whileHover={{scale: 1.05}}
      whileTap={{scale: 0.95}}
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 0.2}}>
      <motion.button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className='relative flex items-center justify-center w-8 h-8 rounded-full'
        aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
        initial={false}
        animate={{rotate: theme === "light" ? 0 : 180}}
        transition={{duration: 0.5, ease: [0.4, 0, 0.2, 1]}}>
        <motion.div
          className='absolute'
          initial={{opacity: 0, scale: 0.5}}
          animate={{
            opacity: theme === "light" ? 1 : 0,
            scale: theme === "light" ? 1 : 0.5,
            rotate: theme === "light" ? 0 : -180,
          }}
          transition={{duration: 0.3}}>
          <MoonIcon className='h-6 w-6 text-indigo-700' />
        </motion.div>

        <motion.div
          className='absolute'
          initial={{opacity: 0, scale: 0.5}}
          animate={{
            opacity: theme === "dark" ? 1 : 0,
            scale: theme === "dark" ? 1 : 0.5,
            rotate: theme === "dark" ? 0 : 180,
          }}
          transition={{duration: 0.3}}>
          <SunIcon className='h-6 w-6 text-yellow-300' />
        </motion.div>
      </motion.button>
    </motion.div>
  );
};

export default ThemeToggle;
