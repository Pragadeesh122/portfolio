"use client";

import {motion} from "framer-motion";
import ExperienceCard from "../_components/ExperienceCard";

export const metadata = {
  title: "About",
  description: "Learn more about me and my experience as a web developer.",
};

export default function AboutPage() {
  type Experience = {
    company: string;
    role: string;
    period: string;
    description: string;
  };

  const experiences: Experience[] = [
    {
      company: "Tech Company A",
      role: "Frontend Developer",
      period: "Jan 2020 - Present",
      description:
        "Worked on developing and maintaining the frontend of various web applications using React and Next.js.",
    },
    {
      company: "Tech Company B",
      role: "Full Stack Developer",
      period: "Jun 2018 - Dec 2019",
      description:
        "Developed full stack web applications using Node.js, Express, and MongoDB.",
    },
  ];

  return (
    <section className='py-12 md:py-16 lg:py-20 relative'>
      {/* Main background gradient */}
      <div className='absolute inset-0 bg-gradient-to-b from-blue-50/70 via-cyan-50/50 to-white dark:from-blue-950/20 dark:via-cyan-950/10 dark:to-gray-950 -z-10'></div>

      {/* Noise texture */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.08] bg-[url('/noise.png')] pointer-events-none"></div>

      {/* Decorative blob shapes for light mode */}
      <div className='absolute top-24 left-0 w-96 h-96 rounded-full bg-gradient-to-br from-blue-100/40 to-cyan-100/40 blur-3xl dark:opacity-0 -z-10'></div>
      <div className='absolute bottom-24 right-0 w-96 h-96 rounded-full bg-gradient-to-tr from-teal-100/40 to-blue-100/40 blur-3xl dark:opacity-0 -z-10'></div>
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-96 rounded-full bg-gradient-to-r from-cyan-100/30 via-blue-100/30 to-teal-100/30 blur-3xl dark:opacity-0 -z-10'></div>

      <div className='container px-4 md:px-6 mx-auto max-w-5xl'>
        <motion.div
          className='flex flex-col items-center justify-center space-y-4 text-center mb-10'
          initial={{opacity: 0, y: -20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.5}}>
          <h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 dark:from-blue-400 dark:via-cyan-400 dark:to-teal-400 text-transparent bg-clip-text pb-2'>
            About Me
          </h1>
          <p className='max-w-[700px] text-gray-600 dark:text-gray-400 md:text-xl'>
            I am a passionate web developer with experience in building modern
            web applications.
          </p>
        </motion.div>

        <motion.div
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.5, delay: 0.2}}
          className='mb-12'>
          <h2 className='text-2xl font-bold mb-6 text-blue-700 dark:text-blue-300'>
            Experience
          </h2>
          <div className='space-y-6'>
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.role}
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.4, delay: index * 0.1 + 0.3}}>
                <ExperienceCard
                  company={exp.company}
                  role={exp.role}
                  period={exp.period}
                  description={exp.description}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
