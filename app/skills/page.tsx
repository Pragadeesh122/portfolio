"use client";

import {motion} from "framer-motion";
import Image from "next/image";
import {skillData, categories} from "../data/SkillData";
import {capabilityClusters} from "../data/profile";

const ease = [0.22, 1, 0.36, 1];

const toolGroups = categories
  .filter((c) => c !== "All")
  .map((category) => ({
    category,
    skills: skillData.filter((s) => s.category === category),
  }))
  .filter((g) => g.skills.length > 0);

export default function SkillsPage() {
  return (
    <section className='relative pt-28 pb-16 sm:pt-32 sm:pb-24'>
      <div className='mx-auto w-full max-w-[1920px] px-[clamp(1rem,4vw,4.5rem)]'>
        <motion.div
          className='mb-12 sm:mb-16'
          initial={{opacity: 0, filter: "blur(10px)"}}
          animate={{opacity: 1, filter: "blur(0px)"}}
          transition={{duration: 0.6, ease}}>
          <h1 className='text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl'>
            Capabilities
          </h1>
          <p className='mt-4 max-w-2xl text-lg leading-relaxed text-gray-400'>
            What I actually build and operate, grouped by the systems work it
            takes rather than a checklist of logos.
          </p>
        </motion.div>

        {/* Capability clusters */}
        <motion.div
          initial={{opacity: 0, filter: "blur(10px)"}}
          animate={{opacity: 1, filter: "blur(0px)"}}
          transition={{duration: 0.5, delay: 0.1, ease}}
          className='flex flex-col divide-y divide-white/[0.06] overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.015]'>
          {capabilityClusters.map((cluster) => (
            <div key={cluster.id} className='p-6 sm:p-7'>
              <h2 className='text-lg font-semibold text-white'>
                {cluster.title}
              </h2>
              <p className='mt-2 max-w-[65ch] text-[15px] leading-relaxed text-gray-400'>
                {cluster.summary}
              </p>
              <div className='mt-4 flex flex-wrap gap-2'>
                {cluster.tags.map((t) => (
                  <span
                    key={t}
                    className='rounded-full border border-white/[0.06] bg-white/[0.02] px-2.5 py-1 font-mono text-[11px] text-gray-400'>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Tooling wall */}
        <motion.div
          className='mt-16'
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: 0.5, delay: 0.35, ease}}>
          <h2 className='mb-6 font-mono text-xs uppercase tracking-widest text-gray-500'>
            Tooling
          </h2>
          <div className='space-y-px overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.04]'>
            {toolGroups.map((group) => (
              <div
                key={group.category}
                className='flex flex-col gap-3 bg-[#0a0a0c] p-5 sm:flex-row sm:items-center sm:gap-6'>
                <span className='w-28 flex-shrink-0 font-mono text-[11px] uppercase tracking-widest text-gray-600'>
                  {group.category}
                </span>
                <div className='flex flex-wrap gap-2.5'>
                  {group.skills.map((skill) => (
                    <div
                      key={skill.skill}
                      className='flex items-center gap-2 rounded-full border border-white/[0.06] bg-white/[0.02] px-3 py-1.5'>
                      <span className='relative h-4 w-4 flex-shrink-0'>
                        <Image
                          src={skill.src}
                          alt={skill.alt}
                          fill
                          className='object-contain'
                        />
                      </span>
                      <span className='text-[13px] text-gray-300'>
                        {skill.skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
