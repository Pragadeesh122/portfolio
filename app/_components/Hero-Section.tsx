"use client";

import {motion} from "framer-motion";
import Link from "next/link";
import {ArrowUpRight, Github, Linkedin, Twitter, MoveRight} from "lucide-react";
import ResumeButton from "./ResumeButton";
import RunaxPanel from "./RunaxPanel";
import {profile, socials, capabilityClusters} from "../data/profile";
import {projects} from "../data/projects";

const ease = [0.22, 1, 0.36, 1];
const panel =
  "rounded-2xl border border-white/[0.06] bg-white/[0.015] backdrop-blur-sm";

const flagship = projects.find((p) => p.slug === "runaxai")!;
const flagshipTech = ["k3s", "Helm", "FastAPI", "RAG", "Grafana", "Pinecone"];

const fade = (delay: number) => ({
  initial: {opacity: 0, filter: "blur(10px)", y: 12},
  animate: {opacity: 1, filter: "blur(0px)", y: 0},
  transition: {duration: 0.6, delay, ease},
});

const socialIcon = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Twitter: Twitter,
} as const;

export default function HeroSection() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5'>
      {/* Identity block - borderless, leads the page */}
      <motion.div
        {...fade(0)}
        className='lg:col-span-7 flex flex-col justify-center px-1 sm:px-2 py-2 sm:py-4'>
        <div className='flex items-center gap-2.5 mb-5 font-mono text-xs text-gray-400'>
          <span className='relative flex h-2 w-2'>
            <span className='absolute inline-flex h-full w-full rounded-full bg-emerald-500/70 animate-ping' />
            <span className='relative inline-flex h-2 w-2 rounded-full bg-emerald-500' />
          </span>
          {profile.availability}
        </div>

        <h1 className='text-[clamp(2.1rem,5vw,3.75rem)] font-bold tracking-tight text-white leading-[1.05]'>
          {profile.name}
        </h1>
        <p className='mt-2 text-[clamp(1rem,2.2vw,1.4rem)] font-medium text-emerald-400'>
          {profile.role}
        </p>

        <p className='mt-6 max-w-[60ch] text-base sm:text-lg leading-relaxed text-gray-400'>
          {profile.intro}
        </p>

        <div className='mt-7 flex flex-wrap items-center gap-3'>
          <Link href='/projects'>
            <button className='group flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-medium text-zinc-950 transition-all duration-200 hover:bg-emerald-400 active:scale-[0.98]'>
              View work
              <MoveRight
                size={15}
                className='transition-transform duration-200 group-hover:translate-x-0.5'
              />
            </button>
          </Link>
          <ResumeButton
            variant='ghost'
            resumePath={profile.resumePath}
            className='flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.02] px-5 py-2.5 text-sm font-medium text-gray-200 transition-all duration-200 hover:border-white/[0.16] hover:bg-white/[0.05] active:scale-[0.98]'>
            Resume
          </ResumeButton>
          <Link
            href='/contact'
            className='px-3 py-2.5 text-sm font-medium text-gray-400 transition-colors duration-200 hover:text-emerald-400'>
            Get in touch
          </Link>
        </div>

        <div className='mt-7 flex items-center gap-5 font-mono text-xs text-gray-500'>
          <span>
            {profile.location} <span className='text-gray-700'>/</span>{" "}
            {profile.timezone}
          </span>
          <span className='h-3 w-px bg-white/[0.08]' />
          <div className='flex items-center gap-3'>
            {socials.map((s) => {
              const Icon = socialIcon[s.label as keyof typeof socialIcon];
              return (
                <Link
                  key={s.label}
                  href={s.href}
                  target='_blank'
                  aria-label={s.label}
                  className='text-gray-500 transition-colors duration-200 hover:text-emerald-400'>
                  <Icon size={16} />
                </Link>
              );
            })}
          </div>
        </div>
      </motion.div>

      {/* Flagship project: RunaxAI */}
      <motion.div
        {...fade(0.12)}
        className={`lg:col-span-5 ${panel} overflow-hidden flex flex-col`}>
        <div className='relative h-44 sm:h-52 border-b border-white/[0.06]'>
          <RunaxPanel />
        </div>
        <div className='flex flex-1 flex-col p-6'>
          <div className='flex items-center justify-between'>
            <span className='font-mono text-[11px] uppercase tracking-widest text-emerald-500/80'>
              Flagship
            </span>
            {flagship.status && (
              <span className='font-mono text-[11px] text-gray-500'>
                {flagship.status}
              </span>
            )}
          </div>
          <h2 className='mt-2 text-xl font-semibold text-white'>
            {flagship.title}
          </h2>
          <p className='mt-1.5 text-sm leading-relaxed text-gray-400'>
            {flagship.tagline}. Production AI infrastructure on a self-hosted k3s
            cluster, deployed through a self-hosted runner.
          </p>
          <div className='mt-4 flex flex-wrap gap-1.5'>
            {flagshipTech.map((t) => (
              <span
                key={t}
                className='rounded-full border border-white/[0.06] bg-white/[0.02] px-2 py-0.5 font-mono text-[11px] text-gray-400'>
                {t}
              </span>
            ))}
          </div>
          <div className='mt-auto pt-5'>
            <Link
              href={flagship.links[0].href}
              target='_blank'
              className='inline-flex items-center gap-1.5 text-sm font-medium text-emerald-400 transition-colors duration-200 hover:text-emerald-300'>
              {flagship.links[0].label}
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Capability clusters - console-style list, not a uniform card grid */}
      <motion.div
        {...fade(0.2)}
        className={`lg:col-span-12 ${panel} p-6 sm:p-8`}>
        <div className='flex items-baseline justify-between'>
          <h2 className='font-mono text-[11px] uppercase tracking-widest text-gray-500'>
            What I build
          </h2>
          <Link
            href='/skills'
            className='font-mono text-[11px] text-gray-500 transition-colors duration-200 hover:text-emerald-400'>
            full stack
          </Link>
        </div>
        <div className='mt-5 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-white/[0.05] bg-white/[0.04] md:grid-cols-2'>
          {capabilityClusters.map((c) => (
            <div
              key={c.id}
              className='group bg-[#0a0a0c] p-5 transition-colors duration-200 hover:bg-white/[0.015]'>
              <h3 className='text-sm font-semibold text-gray-100'>{c.title}</h3>
              <p className='mt-1.5 text-[13px] leading-relaxed text-gray-500'>
                {c.summary}
              </p>
              <div className='mt-3 flex flex-wrap gap-1.5'>
                {c.tags.slice(0, 5).map((t) => (
                  <span
                    key={t}
                    className='font-mono text-[10px] text-gray-600 transition-colors duration-200 group-hover:text-gray-500'>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
