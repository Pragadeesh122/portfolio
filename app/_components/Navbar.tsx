"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import Image from "next/image";
import {usePathname} from "next/navigation";
import {useEffect, useState} from "react";
import NavbarSkeleton from "../_skeletonComponent/NavSkeleton";
import MobileNavBar from "./mobileNavBar";
import {motion} from "framer-motion";

const navItems = [
  {path: "/skills", label: "Skills"},
  {path: "/projects", label: "Projects"},
  {path: "/experience", label: "Experience"},
  {path: "/contact", label: "Contact"},
];

const Navbar = () => {
  const currentPath = usePathname();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return <NavbarSkeleton />;

  return (
    <motion.nav
      className={`py-4 px-4 sm:px-8 transition-all duration-500 ${
        scrolled
          ? "shadow-lg backdrop-blur-md bg-white/90 dark:bg-gray-900/90"
          : "bg-transparent"
      }`}
      initial={{y: -100}}
      animate={{y: 0}}
      transition={{duration: 0.5, ease: "easeOut"}}>
      <div className='container mx-auto flex justify-between items-center'>
        <motion.div
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: 0.5, delay: 0.2}}>
          <Link href='/' className='group flex items-center space-x-3'>
            <div className='relative overflow-hidden rounded-full p-1 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 shadow-lg'>
              <div className='absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 opacity-80 group-hover:opacity-100 transition-opacity duration-300'></div>
              <div className='relative z-10 rounded-full overflow-hidden'>
                <Image
                  className='transition-transform duration-500 group-hover:scale-110'
                  src='/logo.png'
                  alt='logo'
                  width={42}
                  height={42}
                />
              </div>
            </div>
            <div className='hidden sm:block overflow-hidden'>
              <motion.span
                className='text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-100 dark:to-gray-300 tracking-wide'
                initial={{x: -20, opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{duration: 0.6, delay: 0.3}}>
                Pragadeesh
              </motion.span>
            </div>
          </Link>
        </motion.div>

        <div className='hidden sm:block'>
          <motion.div
            className='flex items-center bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg shadow-lg rounded-full px-4 py-2 border border-gray-200/50 dark:border-gray-700/30'
            initial={{y: -20, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{duration: 0.5, delay: 0.3}}>
            {navItems.map((item, index) => (
              <motion.div
                key={item.path}
                className='px-3'
                initial={{opacity: 0, y: -10}}
                animate={{opacity: 1, y: 0}}
                transition={{delay: 0.4 + index * 0.1, duration: 0.5}}
                whileHover={{y: -2}}>
                <Link
                  className={`relative px-2 py-2 font-medium transition-all duration-300 ${
                    currentPath === item.path
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  }`}
                  href={item.path}>
                  <span>{item.label}</span>
                  {currentPath === item.path ? (
                    <motion.span
                      className='absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 rounded-full'
                      layoutId='navIndicator'
                      transition={{duration: 0.3}}
                    />
                  ) : null}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className='flex gap-4 items-center'>
          <motion.div
            initial={{opacity: 0, scale: 0.8}}
            animate={{opacity: 1, scale: 1}}
            transition={{delay: 0.5, duration: 0.5}}
            whileHover={{scale: 1.05}}
            whileTap={{scale: 0.95}}>
            <ThemeToggle />
          </motion.div>
          <motion.div
            className='block sm:hidden'
            initial={{opacity: 0, scale: 0.8}}
            animate={{opacity: 1, scale: 1}}
            transition={{delay: 0.6, duration: 0.5}}>
            <MobileNavBar />
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
