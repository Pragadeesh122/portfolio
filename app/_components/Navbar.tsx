"use client";

import Link from "next/link";
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
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

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
      className={`py-4 sm:py-5 px-4 sm:px-6 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-lg bg-black/60 shadow-[0_10px_30px_-15px_rgba(2,6,23,0.7)]"
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
            <div className='relative overflow-hidden rounded-full shadow-lg shadow-blue-500/20'>
              <Image
                className='transition-transform duration-500 group-hover:scale-110'
                src='/logo.png'
                alt='logo'
                width={40}
                height={40}
              />
            </div>
            <div className='hidden sm:block overflow-hidden'>
              <motion.span
                className='text-xl font-bold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500'
                initial={{x: -20, opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{duration: 0.6, delay: 0.3}}>
                Pragadeesh
              </motion.span>
            </div>
          </Link>
        </motion.div>

        <div className='hidden sm:block ml-auto'>
          <motion.div
            className='flex items-center gap-6'
            initial={{y: -20, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{duration: 0.5, delay: 0.3}}>
            {navItems.map((item, index) => (
              <motion.div
                key={item.path}
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{delay: 0.4 + index * 0.1, duration: 0.5}}
                className='relative'>
                <Link
                  href={item.path}
                  onMouseEnter={() => setHoveredItem(item.path)}
                  onMouseLeave={() => setHoveredItem(null)}>
                  <motion.div
                    className={`relative px-5 py-2.5 rounded-lg font-medium text-base transition-all duration-300 ${
                      currentPath === item.path
                        ? "text-white"
                        : "text-gray-300 hover:text-white"
                    }`}
                    whileHover={{
                      scale: 1.05,
                      transition: {duration: 0.2},
                    }}>
                    {/* Background highlight */}
                    <motion.span
                      className={`absolute inset-0 rounded-lg ${
                        currentPath === item.path
                          ? "bg-gradient-to-br from-blue-600/80 to-blue-800/80 shadow-md shadow-blue-600/20"
                          : "bg-transparent"
                      }`}
                      initial={false}
                      animate={{
                        opacity:
                          hoveredItem === item.path && currentPath !== item.path
                            ? 0.7
                            : 1,
                        background:
                          hoveredItem === item.path && currentPath !== item.path
                            ? "linear-gradient(to bottom right, rgba(59, 130, 246, 0.4), rgba(29, 78, 216, 0.4))"
                            : currentPath === item.path
                            ? "linear-gradient(to bottom right, rgba(37, 99, 235, 0.8), rgba(30, 64, 175, 0.8))"
                            : "transparent",
                        boxShadow:
                          hoveredItem === item.path || currentPath === item.path
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
          </motion.div>
        </div>

        <div className='flex items-center'>
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
