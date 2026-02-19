"use client";

import {useState, useEffect} from "react";
import {createPortal} from "react-dom";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {motion, AnimatePresence} from "framer-motion";
import {Menu, X} from "lucide-react";

const navItems = [
  {path: "/", label: "Home"},
  {path: "/skills", label: "Skills"},
  {path: "/projects", label: "Projects"},
  {path: "/experience", label: "Experience"},
  {path: "/contact", label: "Contact"},
];

export default function MobileNavBar() {
  const [openNav, setOpenNav] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setOpenNav(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (openNav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [openNav]);

  const overlay = (
    <AnimatePresence>
      {openNav && (
        <motion.div
          className='fixed inset-0 bg-black/80 backdrop-blur-md z-[60]'
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}
          transition={{duration: 0.2}}
          onClick={() => setOpenNav(false)}>
          <motion.nav
            className='fixed top-20 left-4 right-4 bg-zinc-950/95 backdrop-blur-xl border border-gray-800/50 rounded-2xl p-6 shadow-xl'
            initial={{opacity: 0, y: -20, scale: 0.95}}
            animate={{opacity: 1, y: 0, scale: 1}}
            exit={{opacity: 0, y: -20, scale: 0.95}}
            transition={{duration: 0.25, ease: [0.22, 1, 0.36, 1]}}
            onClick={(e) => e.stopPropagation()}>
            <div className='flex flex-col gap-1'>
              {navItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{opacity: 0, x: -10}}
                  animate={{opacity: 1, x: 0}}
                  transition={{delay: index * 0.06}}>
                  <Link href={item.path} onClick={() => setOpenNav(false)}>
                    <div
                      className={`relative px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                        pathname === item.path
                          ? "text-emerald-400 bg-emerald-500/10"
                          : "text-gray-400 hover:text-white hover:bg-gray-800/50"
                      }`}>
                      {item.label}
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <motion.button
        onClick={() => setOpenNav((prev) => !prev)}
        className='relative z-[70] p-1.5 rounded-full text-gray-400 hover:text-white transition-colors'
        whileTap={{scale: 0.9}}
        aria-label={openNav ? "Close menu" : "Open menu"}
        aria-expanded={openNav}>
        {openNav ? <X size={20} /> : <Menu size={20} />}
      </motion.button>

      {mounted && createPortal(overlay, document.body)}
    </>
  );
}
