"use client";

import Image from "next/image";
import Link from "next/link";
import {useTheme} from "next-themes";
import Github_black from "@/public/Github_black.png";
import Github_white from "@/public/Github_white.png";
import LinkedIN from "@/public/LinkedIN.png";
import X_white from "@/public/X_white.png";
import X_black from "@/public/X_black.png";
import {useEffect, useState} from "react";
import FooterSkeleton from "../_skeletonComponent/FooterSkeleto";

const Footer = () => {
  const {theme, setTheme} = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return <FooterSkeleton />;

  return (
    <div className='flex justify-center items-start'>
      <footer className='p-4 mt-8 w-full max-w-7xl'>
        <div className='flex  items-center justify-center gap-20 '>
          <div className='flex gap-6'>
            <Link
              href='https://www.linkedin.com/in/pragadeeshvs'
              target='_blank'>
              <Image src={LinkedIN} alt='LinkedIn' width={30} height={30} />
            </Link>
            <Link href='https://github.com/Pragadeesh122' target='_blank'>
              <Image
                src={theme === "light" ? Github_black : Github_white}
                alt='Github'
                width={30}
                height={30}
              />
            </Link>
            <Link href='https://x.com/Pragadeesh1221' target='_blank'>
              <Image
                src={theme === "light" ? X_white : X_black}
                alt='Twitter'
                width={30}
                height={30}
              />
            </Link>
          </div>
          <div className='text-xs sm:text-lg md:text-lg  font-semibold text-gray-600'>
            &copy; {new Date().getFullYear()} Pragadeesh. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
