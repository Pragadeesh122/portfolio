"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle"; // Import the ThemeToggle component
import Image from "next/image";
import {League_Spartan, Roboto_Slab} from "next/font/google";
import {usePathname} from "next/navigation";
import {useEffect, useState} from "react";
import NavbarSkeleton from "../_skeletonComponent/NavSkeleton";
import MobileNavBar from "./mobileNavBar";
// const lg = League_Spartan({subsets: ["latin"]});
// const rb = Roboto_Slab({subsets: ["latin"]});

const Navbar = () => {
  const currentPath = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return <NavbarSkeleton />;

  return (
    // <NavbarSkeleton />
    <nav className='p-4 mt-2  md:text-md lg:text-lg font-semibold'>
      <div className='container mx-auto flex justify-between  items-center'>
        <div>
          <Link href='/'>
            <span>
              <Image
                className=' mr-6 '
                src='/logo.png'
                alt='logo'
                width={34}
                height={34}></Image>
            </span>
          </Link>
        </div>
        <div
          className={`hidden sm:flex items-center gap-16 px-16 py-4 rounded-3xl border-2 dark:border-black shadow-md dark:bg-background_1-900`}>
          {/* <Link href='/about'>
            <span>About</span>
          </Link> */}
          <Link
            className={`${
              currentPath === "/skills" && "text-blue-500  dark:text-red-500"
            }  hover:text-blue-500 dark:hover:text-red-500 transition-border`}
            href='/skills'>
            <span>Skills</span>
          </Link>
          <Link
            className={`${
              currentPath === "/projects" && "text-blue-500  dark:text-red-500"
            }  hover:text-blue-500 dark:hover:text-red-500 transition-border `}
            href='/projects'>
            <span>Projects</span>
          </Link>
          <Link
            className={`${
              currentPath === "/contact" && "text-blue-500  dark:text-red-500"
            }  hover:text-blue-500 dark:hover:text-red-500 transition-border  `}
            href='/contact'>
            <span>Contact</span>
          </Link>
        </div>
        <div className='flex gap-6 items-center'>
          <ThemeToggle />
          <div className=' block sm:hidden'>
            <MobileNavBar />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
