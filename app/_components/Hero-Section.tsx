"use client";

import {motion} from "framer-motion";
import Image, {type StaticImageData} from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MoveRight,
  Twitter,
} from "lucide-react";
import ResumeButton from "./ResumeButton";
import runaxApp from "@/public/runaxai-app.png";
import {profile, socials, capabilityClusters} from "../data/profile";
import {projects} from "../data/projects";

const ease = [0.22, 1, 0.36, 1];
const flagship = projects.find((p) => p.slug === "runaxai")!;

const fade = (delay: number) => ({
  initial: {opacity: 0, filter: "blur(10px)", y: 16},
  animate: {opacity: 1, filter: "blur(0px)", y: 0},
  transition: {duration: 0.65, delay, ease},
});

const socialIcon = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Twitter: Twitter,
} as const;

function ProjectWindow({
  image,
  title,
  label,
  priority = false,
}: {
  image: StaticImageData;
  title: string;
  label: string;
  priority?: boolean;
}) {
  return (
    <div className='overflow-hidden rounded-2xl border border-white/[0.08] bg-[#090a0c] shadow-[0_24px_80px_-48px_rgba(16,185,129,0.45)]'>
      <div className='flex items-center gap-2 border-b border-white/[0.06] px-3 py-2.5'>
        <span className='h-2.5 w-2.5 rounded-full bg-white/10' />
        <span className='h-2.5 w-2.5 rounded-full bg-white/10' />
        <span className='h-2.5 w-2.5 rounded-full bg-white/10' />
        <span className='ml-3 truncate font-mono text-[10px] uppercase tracking-widest text-gray-600'>
          {label}
        </span>
      </div>
      <div className='relative aspect-[16/10] bg-[#0c0d10]'>
        <Image
          src={image}
          alt={`${title} interface preview`}
          fill
          className='object-contain p-2'
          sizes='(max-width: 1024px) 100vw, 48vw'
          priority={priority}
        />
        <div
          aria-hidden
          className='pointer-events-none absolute inset-x-0 top-0 h-1/3 animate-scanline bg-gradient-to-b from-transparent via-emerald-400/[0.07] to-transparent'
        />
      </div>
    </div>
  );
}

function ProjectLinkRow({project}: {project: typeof flagship}) {
  return (
    <div className='flex flex-wrap items-center gap-4'>
      {project.links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          target='_blank'
          className='inline-flex items-center gap-1.5 text-sm font-medium text-gray-300 transition-colors duration-200 hover:text-emerald-400'>
          {link.kind === "source" ? <Github size={15} /> : null}
          {link.label}
          {link.kind === "live" ? <ArrowUpRight size={15} /> : null}
        </Link>
      ))}
    </div>
  );
}

function CapabilityStrip() {
  return (
    <motion.div
      {...fade(0.22)}
      className='grid grid-cols-1 overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.015] sm:grid-cols-2 xl:grid-cols-5'>
      {capabilityClusters.map((cluster) => (
        <Link
          key={cluster.id}
          href='/skills'
          className='group border-b border-white/[0.06] p-5 transition-colors duration-200 hover:bg-white/[0.025] sm:even:border-l xl:border-b-0 xl:border-l xl:first:border-l-0'>
          <p className='font-mono text-[10px] uppercase tracking-widest text-emerald-500/70'>
            {cluster.id.replaceAll("-", " /")}
          </p>
          <h3 className='mt-3 text-sm font-semibold text-gray-100'>
            {cluster.title}
          </h3>
          <p className='mt-2 line-clamp-3 text-[13px] leading-relaxed text-gray-500'>
            {cluster.summary}
          </p>
          <div className='mt-4 flex flex-wrap gap-1.5'>
            {cluster.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className='font-mono text-[10px] text-gray-650 transition-colors duration-200 group-hover:text-gray-500'>
                {tag}
              </span>
            ))}
          </div>
        </Link>
      ))}
    </motion.div>
  );
}

export default function HeroSection() {
  return (
    <main className='relative overflow-hidden'>
      <div className='pointer-events-none absolute left-[8vw] top-0 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl' />
      <div className='pointer-events-none absolute right-[-6vw] top-28 h-80 w-80 rounded-full bg-white/[0.035] blur-3xl' />

      <section className='relative grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(500px,1fr)] lg:items-start xl:gap-14'>
        <motion.div {...fade(0)} className='flex min-w-0 flex-col pt-6 lg:pt-10'>
          <div className='mb-8 flex flex-wrap items-center gap-x-3 gap-y-1.5 font-mono text-[11px] uppercase tracking-widest text-gray-500'>
            <span className='inline-flex items-center gap-2 text-emerald-300/90'>
              <span className='relative flex h-2 w-2'>
                <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/60' />
                <span className='relative inline-flex h-2 w-2 rounded-full bg-emerald-400' />
              </span>
              {profile.availability}
            </span>
            <span aria-hidden className='text-gray-700'>·</span>
            <span>
              {profile.location} / {profile.timezone}
            </span>
          </div>

          <h1 className='mt-0 max-w-[9ch] text-[clamp(2.45rem,4.65vw,4.85rem)] font-black leading-[0.94] tracking-[-0.06em] text-white'>
            {profile.name}
          </h1>
          <p className='mt-5 max-w-[28ch] text-[clamp(1.25rem,2.1vw,2rem)] font-semibold leading-[1.08] tracking-tight text-gray-200'>
            {profile.role}
          </p>
          <p className='mt-7 max-w-[62ch] text-base leading-relaxed text-gray-400 sm:text-lg'>
            {profile.summary}
          </p>

          <div className='mt-8 flex flex-wrap items-center gap-3'>
            <Link
              href='/projects'
              className='group inline-flex items-center gap-2 rounded-full bg-emerald-400 px-5 py-2.5 text-sm font-semibold text-zinc-950 transition-all duration-200 hover:bg-emerald-300 active:scale-[0.98]'>
              View selected work
              <MoveRight
                size={15}
                className='transition-transform duration-200 group-hover:translate-x-0.5'
              />
            </Link>
            <ResumeButton
              variant='ghost'
              resumePath={profile.resumePath}
              className='inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.02] px-5 py-2.5 text-sm font-medium text-gray-200 transition-all duration-200 hover:border-white/[0.16] hover:bg-white/[0.05] active:scale-[0.98]'>
              Resume
            </ResumeButton>
          </div>

          <div className='mt-8 flex items-center gap-4 text-gray-500'>
            {socials.map((social) => {
              const Icon = socialIcon[social.label as keyof typeof socialIcon];
              return (
                <Link
                  key={social.label}
                  href={social.href}
                  target='_blank'
                  aria-label={social.label}
                  className='transition-colors duration-200 hover:text-emerald-400'>
                  <Icon size={17} />
                </Link>
              );
            })}
            <Link
              href={`mailto:${profile.email}`}
              aria-label='Email'
              className='transition-colors duration-200 hover:text-emerald-400'>
              <Mail size={17} />
            </Link>
          </div>
        </motion.div>

        <motion.aside
          {...fade(0.12)}
          className='rounded-3xl border border-white/[0.06] bg-white/[0.018] p-6 backdrop-blur-sm lg:mt-2'>
          <div className='flex items-center justify-between gap-4 border-b border-white/[0.06] pb-4'>
            <div className='flex items-center gap-3'>
              <h2 className='text-xl font-semibold tracking-tight text-white'>
                {flagship.title}
              </h2>
              {flagship.status === "Live" && (
                <span className='inline-flex items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-emerald-300/90'>
                  <span className='h-1.5 w-1.5 rounded-full bg-emerald-400 animate-breathe' />
                  {flagship.status}
                </span>
              )}
            </div>
            <Link
              href='/projects'
              className='shrink-0 font-mono text-[11px] uppercase tracking-widest text-gray-500 transition-colors duration-200 hover:text-emerald-400'>
              more work
            </Link>
          </div>

          <article className='grid gap-6 pt-6 sm:grid-cols-[minmax(260px,1.15fr)_minmax(210px,0.85fr)] sm:items-center'>
            <ProjectWindow
              image={runaxApp}
              title={flagship.title}
              label='runaxai.com'
              priority
            />
            <div>
              <div className='flex flex-wrap items-center gap-2'>
                {flagship.tech.slice(0, 5).map((tech) => (
                  <span
                    key={tech}
                    className='rounded-full border border-white/[0.06] bg-white/[0.02] px-2 py-0.5 font-mono text-[10px] text-gray-500'>
                    {tech}
                  </span>
                ))}
              </div>
              <p className='mt-4 text-sm leading-relaxed text-gray-400'>
                {flagship.description}
              </p>
              <div className='mt-5'>
                <ProjectLinkRow project={flagship} />
              </div>
            </div>
          </article>
        </motion.aside>
      </section>

      <section className='relative mt-8 pb-10 sm:mt-12'>
        <CapabilityStrip />
      </section>
    </main>
  );
}
