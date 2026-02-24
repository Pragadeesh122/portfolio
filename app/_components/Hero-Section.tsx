"use client";

import {motion} from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  ExternalLink,
  Github,
  Globe,
  Layers,
  Linkedin,
  Mail,
  MapPin,
  Smartphone,
  Sparkles,
  Twitter,
} from "lucide-react";
import ResumeButton from "./ResumeButton";

const ease = [0.22, 1, 0.36, 1];

const cardBase =
  "rounded-2xl bg-zinc-900/60 border border-gray-800/50 backdrop-blur-sm";

const techStack = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "FastAPI",
  "Python",
  "LangChain",
  "Go",
  "Airflow",
  "GCP",
  "Docker",
  "AWS",
];

export default function HeroSection() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-auto'>
      {/* Main intro card - spans full width on lg */}
      <motion.div
        className={`${cardBase} p-6 sm:p-8 col-span-1 sm:col-span-2 lg:col-span-4 hover:border-gray-700/60 transition-colors duration-300`}
        initial={{opacity: 0, filter: "blur(10px)"}}
        animate={{opacity: 1, filter: "blur(0px)"}}
        transition={{duration: 0.6, ease}}>
        <p className='font-mono text-sm bold uppercase tracking-widest text-gray-500 font-bold  mb-3'>
          Full Stack + AI Engineer
        </p>
        <h1 className='text-[clamp(2rem,5vw,3.75rem)] font-bold tracking-tight text-white leading-[1.1] mb-4'>
          I build{" "}
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400'>
            AI-powered
          </span>{" "}
          software.
        </h1>
        <p className='text-gray-400 text-base sm:text-lg max-w-3xl leading-relaxed'>
          I&apos;m Pragadeesh &mdash; from scalable full-stack platforms to RAG
          pipelines and LLM integrations, I bring ideas to production.
        </p>
      </motion.div>

      {/* Available for work card */}
      <motion.div
        className={`${cardBase} p-6 flex items-center gap-4 hover:border-emerald-800/40 transition-colors duration-300`}
        initial={{opacity: 0, filter: "blur(10px)"}}
        animate={{opacity: 1, filter: "blur(0px)"}}
        transition={{duration: 0.6, delay: 0.1, ease}}>
        <div className='relative'>
          <div className='w-3 h-3 rounded-full bg-emerald-500' />
          <div className='absolute inset-0 w-3 h-3 rounded-full bg-emerald-500 animate-ping opacity-75' />
        </div>
        <div>
          <p className='text-white font-medium text-sm'>Available for work</p>
          <p className='text-gray-500 text-xs font-mono'>
            Open to opportunities
          </p>
        </div>
      </motion.div>

      {/* Location card */}
      <motion.div
        className={`${cardBase} p-6 flex items-center gap-4 hover:border-gray-700/60 transition-colors duration-300`}
        initial={{opacity: 0, filter: "blur(10px)"}}
        animate={{opacity: 1, filter: "blur(0px)"}}
        transition={{duration: 0.6, delay: 0.15, ease}}>
        <MapPin className='w-5 h-5 text-gray-500 flex-shrink-0' />
        <div>
          <p className='text-white font-medium text-sm'>Austin TX, US</p>
          <p className='text-gray-500 text-xs font-mono'>CST timezone</p>
        </div>
      </motion.div>

      {/* CTA buttons card */}
      <motion.div
        className={`${cardBase} p-6 flex items-center gap-3 col-span-1 sm:col-span-2 hover:border-gray-700/60 transition-colors duration-300`}
        initial={{opacity: 0, filter: "blur(10px)"}}
        animate={{opacity: 1, filter: "blur(0px)"}}
        transition={{duration: 0.6, delay: 0.2, ease}}>
        <ResumeButton
          variant='ghost'
          resumePath='/resume.pdf'
          className='px-5 py-2.5 text-sm font-medium rounded-full bg-gray-800 hover:bg-gray-700 text-white transition-all duration-200 flex items-center gap-2'>
          Resume
          <ArrowRight size={14} />
        </ResumeButton>
        <Link href='/contact'>
          <button className='px-5 py-2.5 text-sm font-medium rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-white transition-all duration-200 flex items-center gap-2 shadow-lg shadow-emerald-500/20'>
            Contact Me
            <Mail size={14} />
          </button>
        </Link>
      </motion.div>

      {/* Featured project card */}
      <motion.div
        className={`${cardBase} p-6 col-span-1 sm:col-span-2 flex flex-col justify-between hover:border-emerald-800/30 transition-colors duration-300 group`}
        initial={{opacity: 0, filter: "blur(10px)"}}
        animate={{opacity: 1, filter: "blur(0px)"}}
        transition={{duration: 0.6, delay: 0.25, ease}}>
        <div>
          <p className='font-mono text-xs uppercase tracking-widest text-emerald-500/70 mb-3'>
            Featured Project
          </p>
          <h3 className='text-white font-semibold text-lg mb-1'>Nalvar</h3>
          <p className='text-gray-500 text-sm leading-relaxed mb-4'>
            Tech consulting website with an AI-powered RAG chatbot for
            intelligent Q&amp;A.
          </p>
          <div className='flex flex-wrap gap-1.5'>
            {["Next.js", "FastAPI", "LangChain", "RAG"].map((t) => (
              <span
                key={t}
                className='px-2 py-0.5 rounded-full border border-gray-800/50 bg-gray-800/30 text-gray-400 text-xs font-mono'>
                {t}
              </span>
            ))}
          </div>
        </div>
        <div className='flex gap-3 mt-5'>
          <Link
            href='https://github.com/Pragadeesh122'
            target='_blank'
            className='flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors duration-200'>
            <Github size={13} /> GitHub
          </Link>
          <Link
            href='https://nalvar.com'
            target='_blank'
            className='flex items-center gap-1.5 text-xs text-emerald-400 hover:text-emerald-300 transition-colors duration-200'>
            <ExternalLink size={13} /> Live site
          </Link>
        </div>
      </motion.div>

      {/* Specializations card */}
      <motion.div
        className={`${cardBase} p-6 col-span-1 sm:col-span-2 hover:border-gray-700/60 transition-colors duration-300`}
        initial={{opacity: 0, filter: "blur(10px)"}}
        animate={{opacity: 1, filter: "blur(0px)"}}
        transition={{duration: 0.6, delay: 0.3, ease}}>
        <p className='font-mono text-xs uppercase tracking-widest text-gray-500 mb-4'>
          What I Build
        </p>
        <div className='grid grid-cols-2 gap-3'>
          {[
            {icon: <Layers size={15} />, label: "Full Stack Apps"},
            {icon: <Sparkles size={15} />, label: "AI / LLM Systems"},
            {icon: <Globe size={15} />, label: "REST APIs"},
            {icon: <Smartphone size={15} />, label: "Mobile Apps"},
          ].map(({icon, label}) => (
            <div
              key={label}
              className='flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-gray-800/30 border border-gray-800/40'>
              <span className='text-emerald-400'>{icon}</span>
              <span className='text-gray-300 text-xs font-medium'>{label}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Tech stack marquee card */}
      <motion.div
        className={`${cardBase} p-6 overflow-hidden col-span-1 sm:col-span-2 lg:col-span-3 hover:border-gray-700/60 transition-colors duration-300`}
        initial={{opacity: 0, filter: "blur(10px)"}}
        animate={{opacity: 1, filter: "blur(0px)"}}
        transition={{duration: 0.6, delay: 0.35, ease}}>
        <p className='font-mono text-xs uppercase tracking-widest text-gray-500 mb-4'>
          Tech Stack
        </p>
        <div className='relative overflow-hidden'>
          <div className='absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-zinc-900/60 to-transparent z-10' />
          <div className='absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-zinc-900/60 to-transparent z-10' />
          <div className='flex animate-marquee whitespace-nowrap'>
            {[...techStack, ...techStack].map((tech, i) => (
              <span
                key={i}
                className='inline-flex items-center px-3 py-1.5 mx-1.5 rounded-full border border-gray-800/50 bg-gray-800/30 text-gray-300 text-xs font-mono'>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Social links card */}
      <motion.div
        className={`${cardBase} p-6 hover:border-gray-700/60 transition-colors duration-300`}
        initial={{opacity: 0, filter: "blur(10px)"}}
        animate={{opacity: 1, filter: "blur(0px)"}}
        transition={{duration: 0.6, delay: 0.4, ease}}>
        <p className='font-mono text-xs uppercase tracking-widest text-gray-500 mb-4'>
          Connect
        </p>
        <div className='flex gap-3'>
          {[
            {
              href: "https://github.com/Pragadeesh122",
              icon: <Github size={18} />,
              label: "GitHub",
            },
            {
              href: "https://www.linkedin.com/in/pragadeeshvs",
              icon: <Linkedin size={18} />,
              label: "LinkedIn",
            },
            {
              href: "https://x.com/Pragadeesh1221",
              icon: <Twitter size={18} />,
              label: "Twitter",
            },
          ].map((social) => (
            <Link
              key={social.label}
              href={social.href}
              target='_blank'
              aria-label={social.label}
              className='p-2.5 rounded-full bg-gray-800/50 border border-gray-800/50 text-gray-400 hover:text-emerald-400 hover:border-emerald-500/20 transition-all duration-200'>
              {social.icon}
            </Link>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
