"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import Image from "next/image";
import {usePathname} from "next/navigation";
import {useEffect, useState} from "react";
import NavbarSkeleton from "../_skeletonComponent/NavSkeleton";
import MobileNavBar from "./mobileNavBar";

const Navbar = () => {
  const currentPath = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return <NavbarSkeleton />;

  return (
    <nav className='p-4 mt-2 md:text-md lg:text-lg font-semibold'>
      <div className='container mx-auto flex justify-between items-center'>
        <Link href='/' className='flex items-center space-x-3 group'>
          <Image
            className='rounded-full transition-transform duration-300 group-hover:scale-110'
            src='/logo.png'
            alt='logo'
            width={38}
            height={38}
          />
          <span className='hidden sm:inline text-xl font-bold text-gray-800 dark:text-white tracking-wide'>
            Pragadeesh
          </span>
        </Link>
        <div
          className={`hidden sm:flex items-center gap-16 px-16 py-4 rounded-3xl border-2 dark:border-black shadow-md dark:bg-background_1-900`}>
          <Link
            className={`${
              currentPath === "/skills"
                ? "text-blue-500 dark:text-red-500"
                : "text-gray-700 dark:text-gray-300"
            } hover:text-blue-500 dark:hover:text-red-500 transition-colors duration-300 relative group`}
            href='/skills'>
            <span className='tracking-wide'>Skills</span>
            <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 dark:bg-red-500 transition-all duration-300 group-hover:w-full'></span>
          </Link>
          <Link
            className={`${
              currentPath === "/projects"
                ? "text-blue-500 dark:text-red-500"
                : "text-gray-700 dark:text-gray-300"
            } hover:text-blue-500 dark:hover:text-red-500 transition-colors duration-300 relative group`}
            href='/projects'>
            <span className='tracking-wide'>Projects</span>
            <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 dark:bg-red-500 transition-all duration-300 group-hover:w-full'></span>
          </Link>
          <Link
            className={`${
              currentPath === "/experience"
                ? "text-blue-500 dark:text-red-500"
                : "text-gray-700 dark:text-gray-300"
            } hover:text-blue-500 dark:hover:text-red-500 transition-colors duration-300 relative group`}
            href='/experience'>
            <span className='tracking-wide'>Experience</span>
            <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 dark:bg-red-500 transition-all duration-300 group-hover:w-full'></span>
          </Link>
          <Link
            className={`${
              currentPath === "/contact"
                ? "text-blue-500 dark:text-red-500"
                : "text-gray-700 dark:text-gray-300"
            } hover:text-blue-500 dark:hover:text-red-500 transition-colors duration-300 relative group`}
            href='/contact'>
            <span className='tracking-wide'>Contact</span>
            <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 dark:bg-red-500 transition-all duration-300 group-hover:w-full'></span>
          </Link>
        </div>
        <div className='flex gap-6 items-center'>
          <ThemeToggle />
          <div className='block sm:hidden'>
            <MobileNavBar />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
