"use client";

import {useState, useEffect} from "react";
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid";
import Link from "next/link";
import {useTheme} from "next-themes";
import {UseThemeProps} from "next-themes/dist/types";
import Image from "next/image";
import menu_dark from "@/public/menu-dark.svg";
import close_dark from "@/public/close-dark.png";

export default function MobileNavBar() {
  const [openNav, setOpenNav] = useState<boolean>(false);
  const theme: UseThemeProps = useTheme();

  const handleNavClick = () => {
    setOpenNav((prev) => !prev);
  };

  const closeNav = () => {
    setOpenNav(false);
  };

  return (
    <div className='relative'>
      <button onClick={handleNavClick} className='relative z-50'>
        {theme.theme === "dark" ? (
          openNav ? (
            <Image src={close_dark} className='h-6 w-6' alt='menu'></Image>
          ) : (
            <Image src={menu_dark} className='h-6 w-6' alt='X'></Image>
          )
        ) : openNav ? (
          <XMarkIcon className='h-6 w-6 ' />
        ) : (
          <Bars3Icon className='h-6 w-6  ' />
        )}
      </button>
      {openNav && (
        <div
          className='fixed left-0 right-0 bottom-0 top-0 bg-background_1-200 dark:bg-background_1-900  dark:bg-opacity-85 bg-opacity-70 z-40'
          onClick={closeNav}>
          <div
            className='fixed flex flex-col gap-2 bg-background_1-200 dark:bg-background_1-900 pt-14 px-2 font-semibold'
            onClick={(e) => e.stopPropagation()}>
            <Link href='/skills'>
              <div className='w-[98vw]' onClick={closeNav}>
                <div className='hover:text-blue-500 hover:dark:text-red-500  hover:bg-background_1-500 dark:hover:bg-background_1-700 p-2 rounded-md min-w-full '>
                  Skills
                </div>
              </div>
            </Link>
            <Link href='/projects'>
              <div onClick={closeNav}>
                <div className='hover:text-blue-500 hover:dark:text-red-500  hover:bg-background_1-500 dark:hover:bg-background_1-700 p-2 rounded-md'>
                  Projects
                </div>
              </div>
            </Link>
            <Link href='/experience'>
              <div onClick={closeNav}>
                <div className='hover:text-blue-500 hover:dark:text-red-500  hover:bg-background_1-500 dark:hover:bg-background_1-700 p-2 rounded-md'>
                  Experience
                </div>
              </div>
            </Link>
            <Link href='/contact'>
              <div onClick={closeNav}>
                <div className='hover:text-blue-500 hover:dark:text-red-500 hover:bg-background_1-500 dark:hover:bg-background_1-700 p-2 rounded-md mb-4'>
                  Contact
                </div>
              </div>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
