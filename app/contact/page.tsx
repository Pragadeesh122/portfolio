"use client";

import ContactForm from "../_components/ContactForm";
import {motion} from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  ExternalLink,
  Twitter,
  Send,
  ArrowRight,
  Phone,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Metadata moved to a separate file
// export const metadata = {
//   title: "Contact",
//   description:
//     "Feel free to reach out to me via email or follow me on social media.",
// };

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/Pragadeesh122",
    icon: <Github className='h-5 w-5' />,
    color: "hover:text-gray-900 dark:hover:text-white",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/pragadeeshvs/",
    icon: <Linkedin className='h-5 w-5' />,
    color: "hover:text-blue-600 dark:hover:text-blue-400",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/Pragadeesh1221",
    icon: <Twitter className='h-5 w-5' />,
    color: "hover:text-sky-500 dark:hover:text-sky-400",
  },
];

const contactInfo = [
  {
    title: "Email",
    value: "pragadeeshv17@gmail.com",
    icon: <Mail className='h-6 w-6 text-blue-600 dark:text-blue-400' />,
    href: "mailto:pragadeeshv17@gmail.com",
  },
  {
    title: "Phone",
    value: "+1 812-671-6798",
    icon: <Phone className='h-6 w-6 text-green-600 dark:text-green-400' />,
    href: "tel:+18126716798",
  },
];

export default function ContactPage() {
  const containerVariants = {
    hidden: {opacity: 0},
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {y: 20, opacity: 0},
    visible: {
      y: 0,
      opacity: 1,
      transition: {duration: 0.5},
    },
  };

  return (
    <section className='py-12 md:py-16 lg:py-20 relative overflow-hidden'>
      {/* Main background gradient */}
      <div className='absolute inset-0 bg-gradient-to-b from-blue-50/70 via-indigo-50/50 to-white dark:from-blue-950/20 dark:via-indigo-950/10 dark:to-gray-950 -z-10'></div>

      {/* Decorative blob shapes for light mode */}
      <div className='absolute top-24 left-0 w-96 h-96 rounded-full bg-gradient-to-br from-blue-100/40 to-indigo-100/40 blur-3xl dark:opacity-0 -z-10'></div>
      <div className='absolute bottom-24 right-0 w-96 h-96 rounded-full bg-gradient-to-tr from-indigo-100/40 to-purple-100/40 blur-3xl dark:opacity-0 -z-10'></div>
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-96 rounded-full bg-gradient-to-r from-blue-100/30 via-indigo-100/30 to-purple-100/30 blur-3xl dark:opacity-0 -z-10'></div>

      {/* Noise texture */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.08] bg-[url('/noise.png')] pointer-events-none"></div>

      {/* Animated Decorative Shapes */}
      <motion.div
        className='absolute top-20 right-20 w-12 h-12 border-4 border-blue-400/20 dark:border-blue-400/10 rounded-full -z-10'
        animate={{
          rotate: [0, 90, 180, 270, 360],
          x: [0, 20, 0, -20, 0],
          y: [0, -20, 0, 20, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className='absolute bottom-24 left-24 w-8 h-8 border-4 border-indigo-400/20 dark:border-indigo-400/10 rounded-full -z-10'
        animate={{
          scale: [1, 1.2, 1, 0.8, 1],
          rotate: [0, 180, 360],
          x: [0, -15, 0, 15, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <div className='container px-4 md:px-6 mx-auto max-w-6xl'>
        <motion.div
          initial={{opacity: 0, y: -20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.5}}
          className='text-center mb-16'>
          <div className='inline-block mb-4'>
            <motion.div
              className='flex items-center justify-center w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700 rounded-full shadow-lg mb-4'
              initial={{scale: 0}}
              animate={{scale: 1, rotate: 360}}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.2,
              }}>
              <Mail className='h-7 w-7 text-white' />
            </motion.div>
          </div>

          <h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 dark:from-blue-400 dark:via-blue-500 dark:to-indigo-400 text-transparent bg-clip-text'>
            Let&apos;s Connect
          </h1>

          <motion.p
            className='max-w-[800px] mx-auto text-gray-600 dark:text-gray-300 text-lg md:text-xl leading-relaxed'
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 0.3, duration: 0.5}}>
            Have a project in mind or just want to say hello? I&apos;d love to
            hear from you and discuss how we can work together to bring your
            ideas to life.
          </motion.p>
        </motion.div>

        <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12'>
          {/* Contact Form Card */}
          <motion.div
            className='lg:col-span-7 relative z-10'
            initial={{opacity: 0, x: -30}}
            animate={{opacity: 1, x: 0}}
            transition={{duration: 0.6, delay: 0.2}}>
            <div className='bg-white dark:bg-gray-800/80 backdrop-blur-md rounded-2xl shadow-xl dark:shadow-gray-900/30 border border-gray-100 dark:border-gray-700 overflow-hidden'>
              <div className='p-1'>
                <div className='h-1.5 w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-t-lg'></div>
              </div>
              <div className='p-6 sm:p-8'>
                <div className='mb-6'>
                  <h2 className='text-2xl font-bold text-gray-900 dark:text-gray-50'>
                    Send Me a Message
                  </h2>
                  <p className='text-gray-600 dark:text-gray-400 mt-1'>
                    I&apos;ll get back to you as soon as possible
                  </p>
                </div>
                <ContactForm />
              </div>
            </div>
          </motion.div>

          {/* Info Sidebar */}
          <motion.div
            className='lg:col-span-5 space-y-6 flex flex-col'
            variants={containerVariants}
            initial='hidden'
            animate='visible'>
            {/* Contact Info Card */}
            <motion.div
              variants={itemVariants}
              className='bg-gradient-to-br from-white to-blue-50 dark:from-gray-800/90 dark:to-blue-900/20 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-lg dark:shadow-gray-900/20 border border-blue-100 dark:border-gray-700 flex-grow relative overflow-hidden'>
              {/* Decorative elements */}
              <div className='absolute top-0 right-0 w-40 h-40 bg-blue-100/30 dark:bg-blue-900/10 rounded-full blur-xl -z-0'></div>
              <div className='absolute bottom-0 left-0 w-32 h-32 bg-indigo-100/30 dark:bg-indigo-900/10 rounded-full blur-xl -z-0'></div>

              <div className='relative z-10'>
                <h2 className='text-2xl font-bold mb-6 flex items-center gap-2 text-gray-900 dark:text-gray-50 pb-4 border-b border-blue-100 dark:border-gray-700'>
                  Contact Details
                  <motion.div
                    animate={{y: [0, -5, 0]}}
                    transition={{duration: 1.5, repeat: Infinity}}
                    className='inline-block'>
                    <div className='w-2 h-2 rounded-full bg-blue-500'></div>
                  </motion.div>
                </h2>

                <div className='space-y-6'>
                  {contactInfo.map((item, index) => (
                    <Link
                      href={item.href}
                      target='_blank'
                      rel='noopener noreferrer'
                      key={index}
                      className='group flex items-start gap-4 p-5 rounded-xl bg-white/80 dark:bg-gray-800/50 border border-blue-50 dark:border-gray-700/50 hover:border-blue-200 dark:hover:border-blue-700/30 shadow-sm hover:shadow-md transition-all transform hover:scale-[1.02]'>
                      <div className='p-3.5 bg-blue-50 dark:bg-blue-900/30 rounded-xl group-hover:bg-blue-100 dark:group-hover:bg-blue-800/30 transition-colors transform group-hover:rotate-6'>
                        {item.icon}
                      </div>
                      <div className='flex-1'>
                        <h3 className='font-semibold text-gray-900 dark:text-gray-100 text-lg'>
                          {item.title}
                        </h3>
                        <p className='text-blue-600 dark:text-blue-400 font-medium group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors'>
                          {item.value}
                        </p>
                      </div>
                      <motion.div
                        initial={{x: 0, opacity: 0}}
                        whileHover={{x: 5, opacity: 1}}
                        className='flex items-center justify-center'>
                        <ArrowRight className='h-5 w-5 text-blue-500' />
                      </motion.div>
                    </Link>
                  ))}
                </div>

                <div className='mt-10 pt-6 border-t border-blue-100 dark:border-gray-700'>
                  <h3 className='font-semibold  text-center text-blue-500 dark:text-gray-100 mb-5 text-lg'>
                    Connect with me
                  </h3>
                  <div className='flex gap-4 justify-center'>
                    {socialLinks.map((link, index) => (
                      <motion.a
                        key={index}
                        href={link.url}
                        target='_blank'
                        rel='noopener noreferrer'
                        className={`p-4 bg-blue-200 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-400 ${link.color} transition-all hover:scale-110 hover:shadow-md`}
                        whileHover={{y: -5}}
                        whileTap={{scale: 0.95}}
                        aria-label={`Visit my ${link.name} profile`}>
                        {link.icon}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Response Time */}
            <motion.div
              variants={itemVariants}
              className='bg-blue-50 dark:bg-blue-900/20 backdrop-blur-sm border border-blue-100 dark:border-blue-800/30 rounded-xl p-4 shadow-sm'>
              <div className='flex items-center gap-3'>
                <div className='relative'>
                  <div className='absolute inset-0 animate-ping rounded-full bg-blue-400 dark:bg-blue-500 opacity-20'></div>
                  <div className='relative w-3 h-3 bg-blue-500 dark:bg-blue-400 rounded-full'></div>
                </div>
                <p className='text-sm text-blue-700 dark:text-blue-300'>
                  I typically respond to inquiries within 24-48 hours. Looking
                  forward to connecting with you!
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
