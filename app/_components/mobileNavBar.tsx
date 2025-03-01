"use client";

import {useState, useEffect} from "react";
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid";
import Link from "next/link";
import {useTheme} from "next-themes";
import {UseThemeProps} from "next-themes/dist/types";
import Image from "next/image";
import menu_dark from "@/public/menu-dark.svg";
import close_dark from "@/public/close-dark.png";
import {usePathname} from "next/navigation";
import {motion, AnimatePresence} from "framer-motion";

// Navigation items shared with main navbar
const navItems = [
  {path: "/skills", label: "Skills"},
  {path: "/projects", label: "Projects"},
  {path: "/experience", label: "Experience"},
  {path: "/contact", label: "Contact"},
];

export default function MobileNavBar() {
  const [openNav, setOpenNav] = useState<boolean>(false);
  const theme: UseThemeProps = useTheme();
  const pathname = usePathname();

  // Close menu when route changes
  useEffect(() => {
    setOpenNav(false);
  }, [pathname]);

  const handleNavClick = () => {
    setOpenNav((prev) => !prev);
  };

  const closeNav = () => {
    setOpenNav(false);
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.3,
        staggerChildren: 0.05,
        staggerDirection: -1,
        when: "afterChildren",
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
        delayChildren: 0.1,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    closed: {opacity: 0, y: -20},
    open: {opacity: 1, y: 0},
  };

  return (
    <div className='relative'>
      <motion.button
        onClick={handleNavClick}
        className='relative z-50 p-2 rounded-full hover:bg-background_1-200 dark:hover:bg-background_1-800 transition-colors'
        whileHover={{scale: 1.05}}
        whileTap={{scale: 0.95}}
        aria-label={openNav ? "Close menu" : "Open menu"}
        aria-expanded={openNav}>
        {theme.theme === "dark" ? (
          openNav ? (
            <Image src={close_dark} className='h-6 w-6' alt='Close menu' />
          ) : (
            <Image src={menu_dark} className='h-6 w-6' alt='Open menu' />
          )
        ) : openNav ? (
          <XMarkIcon className='h-6 w-6 text-gray-800' />
        ) : (
          <Bars3Icon className='h-6 w-6 text-gray-800' />
        )}
      </motion.button>

      <AnimatePresence>
        {openNav && (
          <motion.div
            className='fixed inset-0 bg-white/80 dark:bg-black/80 backdrop-blur-sm z-40'
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 0.2}}
            onClick={closeNav}>
            <motion.nav
              className='fixed top-0 left-0 right-0 pt-20 px-6 pb-6 bg-white dark:bg-background_1-900 shadow-lg'
              variants={menuVariants}
              initial='closed'
              animate='open'
              exit='closed'
              onClick={(e) => e.stopPropagation()}>
              <div className='flex flex-col space-y-2'>
                {navItems.map((item) => (
                  <motion.div
                    key={item.path}
                    variants={itemVariants}
                    whileHover={{x: 8}}
                    transition={{type: "spring", stiffness: 400}}>
                    <Link
                      href={item.path}
                      className={`block p-3 rounded-lg font-medium transition-colors ${
                        pathname === item.path
                          ? "bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-blue-400"
                          : "hover:bg-gray-100 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400"
                      }`}
                      onClick={closeNav}>
                      <div className='flex items-center justify-between'>
                        <span>{item.label}</span>
                        {pathname === item.path && (
                          <motion.span
                            layoutId='mobileNavIndicator'
                            className='w-1.5 h-6 bg-blue-600 dark:bg-blue-400 rounded-full'
                          />
                        )}
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
