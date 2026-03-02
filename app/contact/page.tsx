"use client";

import ContactForm from "../_components/ContactForm";
import {motion} from "framer-motion";
import {Github, Linkedin, Mail, Phone, Twitter} from "lucide-react";
import Link from "next/link";

const ease = [0.22, 1, 0.36, 1];

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/Pragadeesh122",
    icon: <Github className='h-5 w-5' />,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/pragadeeshvs/",
    icon: <Linkedin className='h-5 w-5' />,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/Pragadeesh1221",
    icon: <Twitter className='h-5 w-5' />,
  },
];

const contactInfo = [
  {
    title: "Email",
    value: "pragadeeshv17@gmail.com",
    icon: <Mail className='h-5 w-5 text-emerald-400' />,
    href: "mailto:pragadeeshv17@gmail.com",
  },
  {
    title: "Phone",
    value: "+1 812-671-6798",
    icon: <Phone className='h-5 w-5 text-emerald-400' />,
    href: "tel:+18126716798",
  },
];

export default function ContactPage() {
  return (
    <section className='pt-28 sm:pt-32 pb-16 sm:pb-24 relative'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          className='mb-16'
          initial={{opacity: 0, filter: "blur(10px)"}}
          animate={{opacity: 1, filter: "blur(0px)"}}
          transition={{duration: 0.6, ease}}>
          <p className='font-mono text-xs uppercase tracking-widest text-emerald-500 mb-3'>
            Get in Touch
          </p>
          <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4'>
            Let&apos;s Connect
          </h1>
          <p className='text-gray-400 text-lg max-w-2xl'>
            Have a project in mind or just want to say hello? I&apos;d love to
            hear from you and discuss how we can work together.
          </p>
        </motion.div>

        <div className='grid grid-cols-1 lg:grid-cols-12 gap-8'>
          {/* Contact Form */}
          <motion.div
            className='lg:col-span-7'
            initial={{opacity: 0, filter: "blur(10px)"}}
            animate={{opacity: 1, filter: "blur(0px)"}}
            transition={{duration: 0.6, delay: 0.1, ease}}>
            <div className='rounded-2xl bg-zinc-900/60 border border-gray-800/50 backdrop-blur-sm p-6 sm:p-8'>
              <h2 className='text-xl font-bold text-white mb-1'>
                Send a Message
              </h2>
              <p className='text-gray-500 text-sm mb-6'>
                I&apos;ll get back to you as soon as possible.
              </p>
              <ContactForm />
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            className='lg:col-span-5 space-y-6'
            initial={{opacity: 0, filter: "blur(10px)"}}
            animate={{opacity: 1, filter: "blur(0px)"}}
            transition={{duration: 0.6, delay: 0.2, ease}}>
            {/* Contact details */}
            <div className='rounded-2xl bg-zinc-900/60 border border-gray-800/50 backdrop-blur-sm p-6 sm:p-8'>
              <h2 className='text-lg font-bold text-white mb-6'>
                Contact Details
              </h2>

              <div className='space-y-4'>
                {contactInfo.map((item) => (
                  <Link
                    href={item.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    key={item.title}
                    className='flex items-center gap-4 p-4 rounded-xl bg-gray-800/30 border border-gray-800/50 hover:border-gray-700/60 transition-all duration-200 group'>
                    <div className='p-2.5 rounded-lg bg-gray-800/50'>
                      {item.icon}
                    </div>
                    <div>
                      <p className='text-xs font-mono text-gray-500 uppercase tracking-wider'>
                        {item.title}
                      </p>
                      <p className='text-sm text-gray-300 group-hover:text-emerald-400 transition-colors'>
                        {item.value}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>

              <div className='mt-8 pt-6 border-t border-gray-800/50'>
                <p className='font-mono text-xs uppercase tracking-widest text-gray-500 mb-4'>
                  Socials
                </p>
                <div className='flex gap-3'>
                  {socialLinks.map((link) => (
                    <motion.a
                      key={link.name}
                      href={link.url}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='p-2.5 rounded-full bg-gray-800/50 border border-gray-800/50 text-gray-400 hover:text-emerald-400 hover:border-emerald-500/20 transition-all duration-200'
                      whileHover={{y: -2}}
                      whileTap={{scale: 0.95}}
                      aria-label={link.name}>
                      {link.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

            {/* Response time */}
            <div className='rounded-xl bg-emerald-500/5 border border-emerald-500/10 p-4 flex items-center gap-3'>
              <div className='relative'>
                <div className='absolute inset-0 animate-ping rounded-full bg-emerald-500 opacity-20' />
                <div className='relative w-2.5 h-2.5 bg-emerald-500 rounded-full' />
              </div>
              <p className='text-sm text-gray-400'>
                Typically respond within 24-48 hours.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
