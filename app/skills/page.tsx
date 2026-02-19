"use client";

import {motion} from "framer-motion";
import Image from "next/image";
import {skillData, categories} from "../data/SkillData";

const ease = [0.22, 1, 0.36, 1];

// Group skills by category (exclude "All")
const groupedSkills = categories
  .filter((c) => c !== "All")
  .map((category) => ({
    category,
    skills: skillData.filter((s) => s.category === category),
  }));

function ProficiencyDot({proficiency}: {proficiency: number}) {
  const color =
    proficiency >= 90
      ? "bg-emerald-500"
      : proficiency >= 80
      ? "bg-cyan-500"
      : "bg-gray-500";
  return <span className={`w-2 h-2 rounded-full ${color} flex-shrink-0`} />;
}

export default function SkillsPage() {
  return (
    <section className='pt-28 sm:pt-32 pb-16 sm:pb-24 relative'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          className='mb-16'
          initial={{opacity: 0, filter: "blur(10px)"}}
          animate={{opacity: 1, filter: "blur(0px)"}}
          transition={{duration: 0.6, ease}}>
          <p className='font-mono text-xs uppercase tracking-widest text-emerald-500 mb-3'>
            Technical Expertise
          </p>
          <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4'>
            Skills & Technologies
          </h1>
          <p className='text-gray-400 text-lg max-w-2xl'>
            Proficient in a wide range of web development technologies, from
            front-end frameworks to backend, databases, and AI/ML.
          </p>
        </motion.div>

        <div className='space-y-12'>
          {groupedSkills.map((group, groupIndex) => (
            <motion.div
              key={group.category}
              initial={{opacity: 0, filter: "blur(10px)"}}
              animate={{opacity: 1, filter: "blur(0px)"}}
              transition={{
                duration: 0.6,
                delay: 0.1 + groupIndex * 0.06,
                ease,
              }}>
              {/* Category header */}
              <div className='flex items-center gap-3 mb-5'>
                <h2 className='font-mono text-xs uppercase tracking-widest text-gray-500'>
                  {group.category}
                </h2>
                <div className='flex-1 h-px bg-gray-800' />
              </div>

              {/* Skill pills */}
              <div className='flex flex-wrap gap-3'>
                {group.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.skill}
                    initial={{opacity: 0, scale: 0.9}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{
                      duration: 0.4,
                      delay: 0.15 + groupIndex * 0.06 + skillIndex * 0.03,
                      ease,
                    }}
                    className='flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-zinc-900/60 border border-gray-800/50 backdrop-blur-sm hover:border-gray-700/60 transition-colors duration-200 group'>
                    <div className='w-5 h-5 relative flex-shrink-0'>
                      <Image
                        src={skill.src}
                        alt={skill.alt}
                        fill
                        className='object-contain'
                      />
                    </div>
                    <span className='text-sm text-gray-300 font-medium'>
                      {skill.skill}
                    </span>
                    <ProficiencyDot proficiency={skill.proficiency} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Legend */}
        <motion.div
          className='mt-16 flex items-center gap-6 text-xs text-gray-500 font-mono'
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{delay: 0.8}}>
          <div className='flex items-center gap-2'>
            <span className='w-2 h-2 rounded-full bg-emerald-500' />
            <span>Expert (90%+)</span>
          </div>
          <div className='flex items-center gap-2'>
            <span className='w-2 h-2 rounded-full bg-cyan-500' />
            <span>Advanced (80%+)</span>
          </div>
          <div className='flex items-center gap-2'>
            <span className='w-2 h-2 rounded-full bg-gray-500' />
            <span>Proficient</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
