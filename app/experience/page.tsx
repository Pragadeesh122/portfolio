"use client";

import React from "react";
import {motion} from "framer-motion";
import {Briefcase, GraduationCap} from "lucide-react";

const ease = [0.22, 1, 0.36, 1];

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
  type: "work" | "education";
  skills?: string[];
}

const experiences: Experience[] = [
  {
    title: "Software Developer",
    company: "IU Corps",
    period: "Oct 2024 - Dec 2024",
    description: [
      "Led the development of an activity management platform for YMCA Owen County, enabling efficient tracking of community engagement initiatives.",
      "Implemented user authentication, role-based permissions, and dynamic dashboards for administrators.",
      "Designed and deployed RESTful APIs to support seamless front-end interactions.",
    ],
    type: "work",
    skills: [
      "Next.js",
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
    ],
  },
  {
    title: "Software Developer Intern",
    company: "OSIDigital",
    period: "May 2024 - July 2024",
    description: [
      "Collaborated on enterprise applications for inventory management and sales tracking.",
      "Developed responsive interfaces using React and TypeScript, ensuring cross-browser compatibility.",
      "Participated in Agile development practices, including sprint planning and daily stand-ups.",
    ],
    type: "work",
    skills: [
      "React",
      "TypeScript",
      "Redux",
      "Material UI",
      "Java",
      "Spring Boot",
    ],
  },
  {
    title: "Master's in Computer Science",
    company: "Indiana University, Bloomington",
    period: "2023 - 2025",
    description: [
      "Specialized in Software Engineering and Web Development.",
      "Relevant coursework: Advanced Web Application Development, Cloud Computing, Database Systems, and Machine Learning.",
      "GPA: 3.88/4.0",
    ],
    type: "education",
  },
  {
    title: "Web Development Intern",
    company: "SmartKnower",
    period: "Apr 2022 - Jun 2022",
    description: [
      "Revitalized a B2B e-commerce platform, improving user experience and performance metrics.",
      "Implemented responsive design principles to enhance mobile accessibility.",
      "Utilized modern JavaScript frameworks to create dynamic user interfaces.",
    ],
    type: "work",
    skills: ["JavaScript", "HTML", "CSS", "Bootstrap", "PHP", "MySQL"],
  },
  {
    title: "Bachelor of Science in Computer Science and Engineering",
    company: "Kumaraguru College of Technology",
    period: "2019 - 2023",
    description: [
      "Focused on Computer Science fundamentals, algorithms, and software development methodologies.",
      "Relevant coursework: Data Structures, Algorithms, Object-Oriented Programming, and Database Management Systems.",
      "GPA: 8.71/10.0",
    ],
    type: "education",
  },
];

export default function ExperiencePage() {
  return (
    <section className='pt-28 sm:pt-32 pb-16 sm:pb-24 relative'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          className='mb-16'
          initial={{opacity: 0, filter: "blur(10px)"}}
          animate={{opacity: 1, filter: "blur(0px)"}}
          transition={{duration: 0.6, ease}}>
          <p className='font-mono text-xs uppercase tracking-widest text-emerald-500 mb-3'>
            My Journey
          </p>
          <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4'>
            Experience & Education
          </h1>
          <p className='text-gray-400 text-lg max-w-2xl'>
            My professional journey, work experience, and educational background.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className='relative'>
          {/* Timeline line */}
          <div className='absolute left-[19px] top-2 bottom-2 w-px bg-gray-800' />

          <div className='space-y-8'>
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.title}
                initial={{opacity: 0, filter: "blur(10px)"}}
                animate={{opacity: 1, filter: "blur(0px)"}}
                transition={{
                  duration: 0.6,
                  delay: 0.1 + index * 0.08,
                  ease,
                }}
                className='relative pl-12'>
                {/* Timeline dot */}
                <div className='absolute left-0 top-2'>
                  <div
                    className={`w-10 h-10 rounded-full border-2 flex items-center justify-center ${
                      experience.type === "work"
                        ? "border-emerald-500/30 bg-emerald-500/10"
                        : "border-cyan-500/30 bg-cyan-500/10"
                    }`}>
                    {experience.type === "work" ? (
                      <Briefcase className='w-4 h-4 text-emerald-400' />
                    ) : (
                      <GraduationCap className='w-4 h-4 text-cyan-400' />
                    )}
                  </div>
                </div>

                {/* Card */}
                <div className='rounded-xl bg-zinc-900/60 border border-gray-800/50 backdrop-blur-sm p-6 hover:border-gray-700/60 transition-colors duration-300'>
                  <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4'>
                    <div>
                      <h3 className='text-lg font-bold tracking-tight text-white'>
                        {experience.title}
                      </h3>
                      <p className='text-gray-400 text-sm'>
                        {experience.company}
                      </p>
                    </div>
                    <div className='flex items-center gap-2'>
                      <span className='font-mono text-xs text-gray-500'>
                        {experience.period}
                      </span>
                      <span
                        className={`px-2 py-0.5 text-xs font-mono rounded-full ${
                          experience.type === "work"
                            ? "text-emerald-400 bg-emerald-500/10 border border-emerald-500/20"
                            : "text-cyan-400 bg-cyan-500/10 border border-cyan-500/20"
                        }`}>
                        {experience.type === "work" ? "Work" : "Education"}
                      </span>
                    </div>
                  </div>

                  <ul className='space-y-2 mb-4'>
                    {experience.description.map((desc, i) => (
                      <li
                        key={i}
                        className='text-gray-400 text-sm leading-relaxed flex gap-2'>
                        <span className='text-gray-600 mt-1.5 flex-shrink-0'>
                          &bull;
                        </span>
                        {desc}
                      </li>
                    ))}
                  </ul>

                  {experience.skills && (
                    <div className='flex flex-wrap gap-1.5'>
                      {experience.skills.map((skill) => (
                        <span
                          key={skill}
                          className='px-2.5 py-1 text-xs font-mono text-gray-400 border border-gray-800/50 rounded-full bg-gray-800/20'>
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
