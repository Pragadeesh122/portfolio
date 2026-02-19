"use client";

import Link from "next/link";
import Image from "next/image";
import {usePathname} from "next/navigation";
import {useEffect, useState} from "react";
import NavbarSkeleton from "../_skeletonComponent/NavSkeleton";
import MobileNavBar from "./mobileNavBar";
import {motion} from "framer-motion";

const navItems = [
  {path: "/", label: "Home"},
  {path: "/skills", label: "Skills"},
  {path: "/projects", label: "Projects"},
  {path: "/experience", label: "Experience"},
  {path: "/contact", label: "Contact"},
];

const Navbar = () => {
  const currentPath = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <NavbarSkeleton />;

  return (
    <motion.nav
      className='fixed top-4 left-1/2 -translate-x-1/2 z-50 px-2 sm:px-3 py-2 bg-zinc-950/70 backdrop-blur-xl border border-gray-800/50 rounded-full shadow-lg shadow-black/20'
      initial={{y: -100, opacity: 0}}
      animate={{y: 0, opacity: 1}}
      transition={{duration: 0.6, ease: [0.22, 1, 0.36, 1]}}>
      <div className='flex items-center gap-1'>
        {/* Logo */}
        <Link href='/' className='flex items-center mr-1 sm:mr-2'>
          <div className='relative overflow-hidden rounded-full'>
            <Image
              className='transition-transform duration-500 hover:scale-110'
              src='/logo.png'
              alt='logo'
              width={32}
              height={32}
            />
          </div>
        </Link>

        {/* Desktop nav items */}
        <div className='hidden sm:flex items-center gap-0.5'>
          {navItems.map((item) => (
            <Link key={item.path} href={item.path}>
              <motion.div className='relative px-3.5 py-1.5 rounded-full text-sm font-medium transition-colors duration-200'>
                {currentPath === item.path && (
                  <motion.span
                    layoutId='nav-indicator'
                    className='absolute inset-0 rounded-full bg-emerald-500/15 border border-emerald-500/20'
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
                <span
                  className={`relative z-10 ${
                    currentPath === item.path
                      ? "text-emerald-400"
                      : "text-gray-400 hover:text-gray-200"
                  }`}>
                  {item.label}
                </span>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* Mobile hamburger */}
        <div className='block sm:hidden'>
          <MobileNavBar />
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
