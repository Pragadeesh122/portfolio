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
  const {theme} = useTheme();
  const pathname = usePathname();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

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
        className='relative z-50 p-2 rounded-full bg-blue-100 dark:bg-gray-800/80 hover:bg-blue-200 dark:hover:bg-gray-700/90 transition-colors shadow-sm hover:shadow-md'
        whileHover={{scale: 1.05}}
        whileTap={{scale: 0.95}}
        aria-label={openNav ? "Close menu" : "Open menu"}
        aria-expanded={openNav}>
        {theme === "dark" ? (
          openNav ? (
            <Image src={close_dark} className='h-6 w-6' alt='Close menu' />
          ) : (
            <Image src={menu_dark} className='h-6 w-6' alt='Open menu' />
          )
        ) : openNav ? (
          <XMarkIcon className='h-6 w-6 text-indigo-700' />
        ) : (
          <Bars3Icon className='h-6 w-6 text-indigo-700' />
        )}
      </motion.button>

      <AnimatePresence>
        {openNav && (
          <motion.div
            className='fixed inset-0 bg-white/90 dark:bg-black/80 backdrop-blur-sm z-40'
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 0.2}}
            onClick={closeNav}>
            <motion.nav
              className='fixed top-0 left-0 right-0 pt-20 px-6 pb-6 bg-gradient-to-b from-white via-blue-50/80 to-white dark:bg-gray-900/90 shadow-lg backdrop-blur-md border-b border-blue-100/50 dark:border-gray-700/50'
              variants={menuVariants}
              initial='closed'
              animate='open'
              exit='closed'
              onClick={(e) => e.stopPropagation()}>
              <div className='flex flex-col space-y-2.5'>
                {navItems.map((item) => (
                  <motion.div
                    key={item.path}
                    variants={itemVariants}
                    whileHover={{x: 5}}
                    transition={{type: "spring", stiffness: 400}}
                    className='overflow-hidden rounded-xl'
                    onHoverStart={() => setHoveredItem(item.path)}
                    onHoverEnd={() => setHoveredItem(null)}>
                    <Link
                      href={item.path}
                      className={`relative block p-3.5 font-medium transition-colors ${
                        pathname === item.path
                          ? "text-blue-700 dark:text-blue-400"
                          : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                      }`}
                      onClick={closeNav}>
                      <div className='flex items-center justify-between'>
                        <span className='relative z-10 text-lg'>
                          {item.label}
                        </span>

                        {/* Background with gradient for active links */}
                        {pathname === item.path ? (
                          <motion.div
                            className='absolute inset-0 bg-gradient-to-r from-blue-100/90 via-indigo-100/80 to-purple-100/70 dark:from-blue-900/30 dark:to-indigo-900/20 rounded-xl shadow-[0_2px_12px_rgba(59,130,246,0.3)] dark:shadow-[0_2px_12px_rgba(96,165,250,0.2)]'
                            layoutId='mobileNavBackground'
                            transition={{
                              type: "spring",
                              stiffness: 300,
                              damping: 30,
                            }}
                          />
                        ) : (
                          <motion.span
                            className='absolute inset-0 rounded-xl bg-transparent -z-0'
                            animate={{
                              backgroundColor:
                                hoveredItem === item.path
                                  ? theme === "dark"
                                    ? "rgba(31, 41, 55, 0.4)" // dark:bg-gray-800/40
                                    : "rgba(243, 244, 246, 0.7)" // bg-gray-100/70
                                  : "rgba(0, 0, 0, 0)",
                              boxShadow:
                                hoveredItem === item.path
                                  ? theme === "dark"
                                    ? "0 2px 10px rgba(96, 165, 250, 0.15)" // dark mode shadow
                                    : "0 2px 10px rgba(59, 130, 246, 0.25)" // light mode shadow
                                  : "0 0 0 rgba(0,0,0,0)",
                            }}
                            transition={{duration: 0.2}}
                          />
                        )}

                        {/* Modern active indicator */}
                        {pathname === item.path && (
                          <motion.div
                            layoutId='mobileNavIndicator'
                            className='relative z-10 flex items-center justify-center h-8 w-8 bg-gradient-to-br from-blue-500/80 via-indigo-500/80 to-purple-500/80 dark:from-blue-400/90 dark:to-indigo-500/90 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.4)]'>
                            <span className='h-1.5 w-1.5 bg-white rounded-full'></span>
                          </motion.div>
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
