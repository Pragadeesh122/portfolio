"use client";

import Image from "next/image";
import Link from "next/link";
import {useTheme} from "next-themes";
import {useEffect, useState} from "react";
import FooterSkeleton from "../_skeletonComponent/FooterSkeleto";
import {motion} from "framer-motion";
import {Github, Linkedin, Twitter, Mail, ArrowRight} from "lucide-react";

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
          size={18}
          strokeWidth={2}
          className='text-blue-600 dark:text-blue-400'
        />
      ),
      hoverClass: "hover:bg-blue-50/80 dark:hover:bg-gray-700",
    },
    {
      name: "GitHub",
      href: "https://github.com/Pragadeesh122",
      icon: (
        <Github
          size={18}
          strokeWidth={2}
          className='text-gray-800 dark:text-white'
        />
      ),
      hoverClass: "hover:bg-gray-50/80 dark:hover:bg-gray-700",
    },
    {
      name: "Twitter",
      href: "https://x.com/Pragadeesh1221",
      icon: (
        <Twitter
          size={18}
          strokeWidth={2}
          className='text-blue-500 dark:text-blue-300'
        />
      ),
      hoverClass: "hover:bg-blue-50/80 dark:hover:bg-gray-700",
    },
    {
      name: "Email",
      href: "mailto:pragadeeshsv@gmail.com",
      icon: (
        <Mail
          size={18}
          strokeWidth={2}
          className='text-indigo-600 dark:text-indigo-400'
        />
      ),
      hoverClass: "hover:bg-indigo-50/80 dark:hover:bg-gray-700",
    },
  ];

  const navLinks = [
    {name: "Home", href: "/"},
    {name: "Skills", href: "/skills"},
    {name: "Projects", href: "/projects"},
    {name: "Experience", href: "/experience"},
    {name: "Contact", href: "/contact"},
  ];

  return (
    <motion.footer
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 0.5}}
      className='relative border-t border-slate-200 dark:border-gray-800 bg-gradient-to-b from-slate-50/95 to-white/90 dark:from-gray-900/70 dark:to-gray-900/80 backdrop-blur-sm'>
      {/* Decorative elements */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <div className='absolute -top-32 -right-16 w-64 h-64 bg-blue-100/40 dark:bg-blue-900/10 rounded-full blur-3xl'></div>
        <div className='absolute -bottom-32 -left-16 w-64 h-64 bg-indigo-100/40 dark:bg-indigo-900/10 rounded-full blur-3xl'></div>
        <div className='absolute top-20 left-1/3 w-32 h-32 bg-amber-100/30 dark:bg-blue-900/10 rounded-full blur-3xl'></div>
      </div>

      {/* Gradient line */}
      <div className='h-[2px] w-full bg-gradient-to-r from-blue-500/50 via-purple-400/50 to-indigo-500/50 dark:from-blue-600/40 dark:via-purple-500/40 dark:to-indigo-400/40'></div>

      <div className='relative max-w-7xl mx-auto px-4 sm:px-8 py-8'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-6'>
          {/* Logo and about */}
          <div className='flex flex-col items-center md:items-start space-y-4'>
            <Link href='/' className='group flex items-center gap-3'>
              <div className='relative overflow-hidden rounded-full'>
                <div className='relative z-10 rounded-full overflow-hidden'>
                  <Image
                    src='/logo.png'
                    alt='Pragadeesh Logo'
                    width={36}
                    height={36}
                    className='rounded-full transition-transform duration-500 group-hover:scale-110'
                  />
                </div>
              </div>
              <span className='font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r from-slate-700 to-slate-900 dark:from-white dark:to-gray-300'>
                Pragadeesh
              </span>
            </Link>
            <p className='text-sm text-slate-600 dark:text-gray-400 max-w-xs text-center md:text-left'>
              Full Stack Developer crafting intuitive and elegant digital
              solutions.
            </p>
            <div className='flex gap-3 items-center'>
              {socialLinks.map((link) => (
                <motion.div
                  key={link.name}
                  whileHover={{y: -3, scale: 1.05}}
                  whileTap={{scale: 0.95}}>
                  <Link
                    href={link.href}
                    target='_blank'
                    className={`flex items-center justify-center w-9 h-9 rounded-full bg-white/90 dark:bg-gray-800 ${link.hoverClass} shadow-sm hover:shadow-md transition-all duration-300`}
                    aria-label={link.name}>
                    {link.icon}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Navigation links */}
          <div className='flex flex-col items-center md:items-start'>
            <h3 className='font-semibold text-slate-800 dark:text-gray-100 mb-4 text-lg'>
              Quick Links
            </h3>
            <nav className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-1 gap-x-6 gap-y-2'>
              {navLinks.map((link) => (
                <motion.div key={link.name} whileHover={{x: 3}}>
                  <Link
                    href={link.href}
                    className='text-slate-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200 flex items-center gap-1 text-sm'>
                    <ArrowRight size={14} className='opacity-70' />
                    <span>{link.name}</span>
                  </Link>
                </motion.div>
              ))}
            </nav>
          </div>

          {/* Contact card */}
          <div className='flex flex-col items-center md:items-start'>
            <h3 className='font-semibold text-slate-800 dark:text-gray-100 mb-4 text-lg'>
              Get In Touch
            </h3>
            <motion.div
              whileHover={{scale: 1.02}}
              className='w-full max-w-xs rounded-xl overflow-hidden border border-slate-200 dark:border-gray-800 p-4 bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300'>
              <p className='text-sm text-slate-600 dark:text-gray-400 mb-4'>
                Ready to collaborate? Let's turn your ideas into impactful
                solutions.
              </p>
              <Link
                href='/contact'
                className='flex items-center justify-center gap-2 w-full py-2.5 px-4 text-center rounded-lg bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-medium shadow-md hover:shadow-lg transition-all duration-300'>
                <span>Let&apos;s Connect</span>
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Copyright line */}
        <div className='pt-6 border-t border-slate-200 dark:border-gray-800 text-center md:text-left'>
          <p className='text-sm text-center text-slate-500 dark:text-gray-400'>
            &copy; {currentYear} Pragadeesh. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
