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
import {motion} from "framer-motion";
import {Github, Linkedin, Twitter} from "lucide-react";

const Footer = () => {
  const {theme} = useTheme();
  const [mounted, setMounted] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => setMounted(true), []);

  if (!mounted) return <FooterSkeleton />;

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/pragadeeshvs",
      icon: (
        <Linkedin
          size={20}
          strokeWidth={2}
          className='text-blue-600 dark:text-blue-400'
        />
      ),
    },
    {
      name: "GitHub",
      href: "https://github.com/Pragadeesh122",
      icon: (
        <Github
          size={20}
          strokeWidth={2}
          className='text-gray-800 dark:text-white'
        />
      ),
    },
    {
      name: "Twitter",
      href: "https://x.com/Pragadeesh1221",
      icon: (
        <Twitter
          size={20}
          strokeWidth={2}
          className='text-blue-500 dark:text-blue-300'
        />
      ),
    },
  ];

  return (
    <motion.footer
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 0.5}}
      className='border-t border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm'>
      <div className='max-w-7xl mx-auto px-4 sm:px-8 py-8'>
        <div className='flex flex-col sm:flex-row justify-between items-center gap-6'>
          <div className='flex flex-col items-center sm:items-start'>
            <Link href='/' className='flex items-center gap-2 mb-2'>
              <Image
                src='/logo.png'
                alt='Pragadeesh Logo'
                width={32}
                height={32}
                className='rounded-full'
              />
              <span className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300'>
                Pragadeesh
              </span>
            </Link>
            <p className='text-sm text-gray-600 dark:text-gray-400'>
              Full Stack Web Developer
            </p>
          </div>

          <div className='flex flex-col items-center sm:items-end gap-3'>
            <div className='flex gap-4 items-center'>
              {socialLinks.map((link) => (
                <motion.div
                  key={link.name}
                  whileHover={{y: -3}}
                  whileTap={{scale: 0.95}}>
                  <Link
                    href={link.href}
                    target='_blank'
                    className='flex items-center justify-center w-9 h-9 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300'
                    aria-label={link.name}>
                    {link.icon}
                  </Link>
                </motion.div>
              ))}
            </div>

            <p className='text-sm text-gray-600 dark:text-gray-400'>
              &copy; {currentYear} Pragadeesh. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
