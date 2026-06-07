"use client";

import {motion} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {Github, ArrowUpRight} from "lucide-react";
import RunaxPanel from "../_components/RunaxPanel";
import PayoffPanel from "../_components/PayoffPanel";
import {
  flagshipProjects,
  supportingProjects,
  type Project,
} from "../data/projects";

const ease = [0.22, 1, 0.36, 1];
const panel = "rounded-2xl border border-white/[0.06] bg-white/[0.015]";

function ProjectVisual({project}: {project: Project}) {
  if (project.visual.kind === "runax") return <RunaxPanel />;
  if (project.visual.kind === "payoff") return <PayoffPanel />;
  return (
    <div className='relative h-full w-full min-h-[220px]'>
      <Image
        src={project.visual.src}
        alt={`${project.title} interface`}
        fill
        className='object-cover'
        sizes='(max-width: 1024px) 100vw, 50vw'
      />
      <div className='absolute inset-0 bg-gradient-to-t from-[#09090b]/50 to-transparent' />
    </div>
  );
}

function LinkRow({project}: {project: Project}) {
  return (
    <div className='flex items-center gap-5'>
      {project.links.map((l) => (
        <Link
          key={l.href}
          href={l.href}
          target='_blank'
          className='inline-flex items-center gap-1.5 text-sm text-gray-400 transition-colors duration-200 hover:text-emerald-400'>
          {l.kind === "source" ? <Github size={15} /> : null}
          {l.label}
          {l.kind === "live" ? <ArrowUpRight size={15} /> : null}
        </Link>
      ))}
      {project.links.length === 0 && project.status && (
        <span className='font-mono text-xs text-gray-600'>{project.status}</span>
      )}
    </div>
  );
}

function Headliner({project, index}: {project: Project; index: number}) {
  const visualLeft = index % 2 === 0;
  return (
    <motion.article
      initial={{opacity: 0, filter: "blur(10px)", y: 16}}
      animate={{opacity: 1, filter: "blur(0px)", y: 0}}
      transition={{duration: 0.6, delay: index * 0.1, ease}}
      className={`${panel} overflow-hidden grid grid-cols-1 lg:grid-cols-2`}>
      <div
        className={`relative min-h-[240px] border-white/[0.06] ${
          visualLeft
            ? "border-b lg:border-b-0 lg:border-r"
            : "border-b lg:border-b-0 lg:border-l lg:order-last"
        }`}>
        <ProjectVisual project={project} />
      </div>

      <div className='flex flex-col p-6 sm:p-8'>
        <div className='flex items-center gap-3'>
          <span className='font-mono text-[11px] uppercase tracking-widest text-emerald-500/80'>
            {project.tier === "flagship" ? "Flagship" : "Featured"}
          </span>
          <span className='font-mono text-[11px] text-gray-600'>
            {project.year}
          </span>
        </div>

        <h2 className='mt-2.5 text-2xl font-bold tracking-tight text-white'>
          {project.title}
        </h2>
        <p className='mt-2 text-[15px] leading-relaxed text-gray-400'>
          {project.description}
        </p>

        {project.highlights && (
          <ul className='mt-5 space-y-2'>
            {project.highlights.map((h) => (
              <li key={h} className='flex gap-2.5 text-sm text-gray-400'>
                <span className='mt-0.5 select-none font-mono text-emerald-500/80'>
                  &gt;
                </span>
                <span className='leading-relaxed'>{h}</span>
              </li>
            ))}
          </ul>
        )}

        <div className='mt-6 flex flex-wrap gap-1.5'>
          {project.tech.map((t) => (
            <span
              key={t}
              className='rounded-full border border-white/[0.06] bg-white/[0.02] px-2.5 py-1 font-mono text-[11px] text-gray-400'>
              {t}
            </span>
          ))}
        </div>

        <div className='mt-auto pt-6'>
          <LinkRow project={project} />
        </div>
      </div>
    </motion.article>
  );
}

function SupportingCard({project, index}: {project: Project; index: number}) {
  return (
    <motion.article
      initial={{opacity: 0, filter: "blur(10px)", y: 16}}
      animate={{opacity: 1, filter: "blur(0px)", y: 0}}
      transition={{duration: 0.5, delay: 0.1 + index * 0.05, ease}}
      className={`${panel} group flex flex-col overflow-hidden transition-colors duration-300 hover:border-white/[0.12]`}>
      <div className='relative aspect-video overflow-hidden border-b border-white/[0.06]'>
        <ProjectVisual project={project} />
      </div>
      <div className='flex flex-1 flex-col p-5'>
        <div className='flex items-baseline justify-between gap-3'>
          <h3 className='text-lg font-semibold text-white'>{project.title}</h3>
          <span className='font-mono text-[11px] text-gray-600'>
            {project.year}
          </span>
        </div>
        <p className='mt-1.5 line-clamp-2 flex-1 text-sm leading-relaxed text-gray-500'>
          {project.description}
        </p>
        <div className='mt-3 flex flex-wrap gap-1.5'>
          {project.tech.slice(0, 4).map((t) => (
            <span
              key={t}
              className='rounded-full border border-white/[0.06] bg-white/[0.02] px-2 py-0.5 font-mono text-[10px] text-gray-500'>
              {t}
            </span>
          ))}
        </div>
        <div className='mt-4'>
          <LinkRow project={project} />
        </div>
      </div>
    </motion.article>
  );
}

export default function ProjectsPage() {
  return (
    <section className='relative pt-28 pb-16 sm:pt-32 sm:pb-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <motion.div
          className='mb-12 sm:mb-16'
          initial={{opacity: 0, filter: "blur(10px)"}}
          animate={{opacity: 1, filter: "blur(0px)"}}
          transition={{duration: 0.6, ease}}>
          <h1 className='text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl'>
            Selected work
          </h1>
          <p className='mt-4 max-w-2xl text-lg leading-relaxed text-gray-400'>
            AI infrastructure and full-stack platforms, from production RAG and
            self-hosted clusters to interactive financial tooling.
          </p>
        </motion.div>

        <div className='space-y-5 sm:space-y-6'>
          {flagshipProjects.map((project, index) => (
            <Headliner key={project.slug} project={project} index={index} />
          ))}
        </div>

        <h2 className='mb-6 mt-16 font-mono text-xs uppercase tracking-widest text-gray-500'>
          More projects
        </h2>
        <div className='grid grid-cols-1 gap-5 sm:grid-cols-2'>
          {supportingProjects.map((project, index) => (
            <SupportingCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
