"use client";

import {useState, useEffect} from "react";
import Link from "next/link";
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
        className='relative z-50 p-2 rounded-full bg-gray-900 hover:bg-gray-800 transition-colors shadow-md shadow-blue-900/20'
        whileHover={{scale: 1.05}}
        whileTap={{scale: 0.95}}
        aria-label={openNav ? "Close menu" : "Open menu"}
        aria-expanded={openNav}>
        {openNav ? (
          <Image src={close_dark} className='h-6 w-6' alt='Close menu' />
        ) : (
          <Image src={menu_dark} className='h-6 w-6' alt='Open menu' />
        )}
      </motion.button>

      <AnimatePresence>
        {openNav && (
          <motion.div
            className='fixed inset-0 bg-black/90 backdrop-blur-md z-40'
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 0.2}}
            onClick={closeNav}>
            <motion.nav
              className='fixed top-0 left-0 right-0 pt-24 px-8 pb-8 bg-black/95 shadow-lg'
              variants={menuVariants}
              initial='closed'
              animate='open'
              exit='closed'
              onClick={(e) => e.stopPropagation()}>
              <div className='flex flex-col space-y-8'>
                {navItems.map((item) => (
                  <motion.div
                    key={item.path}
                    variants={itemVariants}
                    className='relative'
                    whileHover={{
                      x: 5,
                      transition: {duration: 0.2},
                    }}>
                    <Link href={item.path} onClick={closeNav}>
                      <motion.div
                        className={`relative px-5 py-3 rounded-lg font-medium text-lg ${
                          pathname === item.path
                            ? "text-white"
                            : "text-gray-300 hover:text-white"
                        }`}
                        whileTap={{scale: 0.98}}>
                        {/* Background highlight */}
                        <motion.span
                          className={`absolute inset-0 rounded-lg ${
                            pathname === item.path
                              ? "bg-gradient-to-br from-blue-600/80 to-blue-800/80 shadow-md shadow-blue-600/10"
                              : "bg-transparent"
                          }`}
                          initial={false}
                          animate={{
                            background:
                              pathname === item.path
                                ? "linear-gradient(to bottom right, rgba(37, 99, 235, 0.8), rgba(30, 64, 175, 0.8))"
                                : "transparent",
                            boxShadow:
                              pathname === item.path
                                ? "0 4px 12px rgba(37, 99, 235, 0.15)"
                                : "none",
                          }}
                          transition={{duration: 0.3}}
                        />

                        {/* Text content with relative positioning */}
                        <span className='relative z-10'>{item.label}</span>
                      </motion.div>
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
