"use client";

import Link from "next/link";
import {useEffect, useState} from "react";
import FooterSkeleton from "../_skeletonComponent/FooterSkeleto";
import {Github, Linkedin, Twitter, Mail} from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/Pragadeesh122",
    icon: <Github size={16} />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/pragadeeshvs",
    icon: <Linkedin size={16} />,
  },
  {
    name: "Twitter",
    href: "https://x.com/Pragadeesh1221",
    icon: <Twitter size={16} />,
  },
  {
    name: "Email",
    href: "mailto:pragadeeshsv@gmail.com",
    icon: <Mail size={16} />,
  },
];

const Footer = () => {
  const [mounted, setMounted] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => setMounted(true), []);

  if (!mounted) return <FooterSkeleton />;

  return (
    <footer className='border-t border-gray-800/50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6'>
        <div className='flex flex-col sm:flex-row items-center justify-between gap-4'>
          <p className='text-sm text-gray-500'>
            Built by Pragadeesh &middot; {currentYear}
          </p>
          <div className='flex items-center gap-3'>
            {socialLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                target='_blank'
                aria-label={link.name}
                className='text-gray-600 hover:text-gray-400 transition-colors duration-200'>
                {link.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
