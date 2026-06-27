"use client";

import {motion} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type {StaticImageData} from "next/image";
import {Github, ArrowUpRight} from "lucide-react";
import {
  flagshipProjects,
  supportingProjects,
  type Project,
} from "../data/projects";

const ease = [0.22, 1, 0.36, 1];
const panel = "rounded-2xl border border-white/[0.06] bg-white/[0.015]";

function liveLabel(project: Project) {
  return project.links.find((l) => l.kind === "live")?.label ?? project.slug;
}

/** A mock browser window so screenshots read as deliberate product shots. */
function MediaFrame({
  src,
  alt,
  label,
  priority = false,
}: {
  src: StaticImageData;
  alt: string;
  label: string;
  priority?: boolean;
}) {
  return (
    <div className='overflow-hidden rounded-xl border border-white/[0.08] bg-[#0a0a0c]'>
      <div className='flex items-center gap-1.5 border-b border-white/[0.06] px-3 py-2'>
        <span className='h-2.5 w-2.5 rounded-full bg-white/10' />
        <span className='h-2.5 w-2.5 rounded-full bg-white/10' />
        <span className='h-2.5 w-2.5 rounded-full bg-white/10' />
        <span className='ml-3 truncate font-mono text-[10px] text-gray-600'>
          {label}
        </span>
      </div>
      <div className='relative aspect-[16/10] w-full'>
        <Image
          src={src}
          alt={alt}
          fill
          className='object-cover object-top'
          sizes='(max-width: 1024px) 100vw, 55vw'
          priority={priority}
        />
      </div>
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

function FeatureCard({
  project,
  primary,
  index,
}: {
  project: Project;
  primary: boolean;
  index: number;
}) {
  const techCap = primary ? 8 : 6;
  const extra = project.tech.length - techCap;
  return (
    <motion.article
      initial={{opacity: 0, filter: "blur(10px)", y: 16}}
      animate={{opacity: 1, filter: "blur(0px)", y: 0}}
      transition={{duration: 0.6, delay: index * 0.08, ease}}
      className={`${panel} flex h-full flex-col overflow-hidden`}>
      <div className='p-3'>
        <MediaFrame
          src={project.visual.src}
          alt={`${project.title} interface`}
          label={liveLabel(project)}
          priority={primary}
        />
      </div>

      <div className='flex flex-1 flex-col px-5 pb-6 sm:px-6'>
        <div className='flex items-center gap-3'>
          <span className='font-mono text-[11px] text-gray-600'>
            {project.year}
            {project.status ? ` · ${project.status}` : ""}
          </span>
        </div>

        <h2 className='mt-2 text-xl font-bold tracking-tight text-white sm:text-2xl'>
          {project.title}
        </h2>
        <p className='mt-2 max-w-prose text-sm leading-relaxed text-gray-400'>
          {project.description}
        </p>

        {primary && project.highlights && (
          <ul className='mt-4 space-y-2'>
            {project.highlights.slice(0, 3).map((h) => (
              <li key={h} className='flex gap-2.5 text-sm text-gray-400'>
                <span className='mt-0.5 select-none font-mono text-emerald-500/80'>
                  &gt;
                </span>
                <span className='leading-relaxed'>{h}</span>
              </li>
            ))}
          </ul>
        )}

        <div className='mt-4 flex flex-wrap items-center gap-1.5'>
          {project.tech.slice(0, techCap).map((t) => (
            <span
              key={t}
              className='rounded-full border border-white/[0.06] bg-white/[0.02] px-2.5 py-1 font-mono text-[11px] text-gray-400'>
              {t}
            </span>
          ))}
          {extra > 0 && (
            <span className='font-mono text-[11px] text-gray-600'>+{extra}</span>
          )}
        </div>

        <div className='mt-auto pt-5'>
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
      transition={{duration: 0.5, delay: 0.05 + index * 0.04, ease}}
      className={`${panel} group flex flex-col overflow-hidden transition-colors duration-300 hover:border-white/[0.12]`}>
      <div className='relative aspect-[16/10] overflow-hidden border-b border-white/[0.06] bg-[#0a0a0c]'>
        <Image
          src={project.visual.src}
          alt={`${project.title} interface`}
          fill
          className='object-cover object-top'
          sizes='(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw'
        />
      </div>
      <div className='flex flex-1 flex-col p-5'>
        <div className='flex items-baseline justify-between gap-3'>
          <h3 className='text-base font-semibold text-white'>{project.title}</h3>
          <span className='font-mono text-[11px] text-gray-600'>
            {project.year}
          </span>
        </div>
        <p className='mt-1.5 text-sm leading-relaxed text-gray-500'>
          {project.tagline}
        </p>
        <div className='mt-3 flex flex-wrap gap-1.5'>
          {project.tech.slice(0, 3).map((t) => (
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
  const primary = flagshipProjects[0];
  const secondary = flagshipProjects.slice(1);
  const promotedSlugs = new Set(["nalvar", "citro"]);
  const promotedProjects = supportingProjects.filter((project) =>
    promotedSlugs.has(project.slug),
  );
  const remainingProjects = supportingProjects.filter(
    (project) => !promotedSlugs.has(project.slug),
  );

  return (
    <section className='relative pt-28 pb-16 sm:pt-32 sm:pb-24'>
      <div className='mx-auto w-full max-w-[1920px] px-[clamp(1rem,4vw,4.5rem)]'>
        {/* Flagship feature row: primary + secondary together */}
        <div className='grid grid-cols-1 gap-5 lg:grid-cols-12'>
          {primary && (
            <div className='lg:col-span-7'>
              <FeatureCard project={primary} primary index={0} />
            </div>
          )}
          <div className='grid grid-cols-1 gap-5 lg:col-span-5'>
            {secondary.map((project, i) => (
              <FeatureCard
                key={project.slug}
                project={project}
                primary={false}
                index={i + 1}
              />
            ))}
            <div className='grid grid-cols-1 gap-5 sm:grid-cols-2'>
              {promotedProjects.map((project, index) => (
                <SupportingCard
                  key={project.slug}
                  project={project}
                  index={secondary.length + index + 1}
                />
              ))}
            </div>
          </div>
        </div>

        <h2 className='mb-6 mt-14 font-mono text-xs uppercase tracking-widest text-gray-500'>
          More projects
        </h2>
        <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {remainingProjects.map((project, index) => (
            <SupportingCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
