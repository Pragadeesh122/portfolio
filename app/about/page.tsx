"use client";

import {motion} from "framer-motion";
import Link from "next/link";
import {ArrowUpRight} from "lucide-react";
import {profile} from "../data/profile";

const ease = [0.22, 1, 0.36, 1];
const panel = "rounded-2xl border border-white/[0.06] bg-white/[0.015]";

const now = [
  {
    role: "Software Engineer",
    org: "Slower.ai",
    period: "Jan 2025 - Present",
    note: "Geospatial build pipelines, Airflow on GCP, and a RAG-integrated telephony agent for medical screening.",
  },
];

const education = [
  {
    degree: "M.S. Computer Science",
    org: "Indiana University, Bloomington",
    period: "2023 - 2025",
    note: "GPA 3.88. Web application development, cloud computing, and machine learning.",
  },
  {
    degree: "B.E. Computer Science & Engineering",
    org: "Kumaraguru College of Technology",
    period: "2019 - 2023",
    note: "Algorithms, systems, and software engineering fundamentals.",
  },
];

export default function AboutPage() {
  return (
    <section className='relative pt-28 pb-16 sm:pt-32 sm:pb-24'>
      <div className='mx-auto max-w-4xl px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{opacity: 0, filter: "blur(10px)"}}
          animate={{opacity: 1, filter: "blur(0px)"}}
          transition={{duration: 0.6, ease}}>
          <h1 className='text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl'>
            About
          </h1>
          <p className='mt-2 font-mono text-sm text-emerald-400'>
            {profile.role}
          </p>

          <div className='mt-6 max-w-[65ch] space-y-4 text-base leading-relaxed text-gray-400'>
            <p>
              I&apos;m {profile.name}, an engineer who likes the whole loop:
              designing an AI system, the retrieval and agents inside it, the
              evaluation and observability that keep it honest, and the
              infrastructure it runs on.
            </p>
            <p>
              Most of my recent work is RunaxAI, a self-hosted AI platform I run
              on a k3s cluster at home and deploy through a self-hosted runner
              with Helm. It pushed me deep into hybrid retrieval, reranking, and
              the Prometheus, Loki, Tempo, and Grafana stack that tells me what
              the system is doing under load.
            </p>
            <p>
              Before the AI focus I shipped full-stack products and data
              pipelines, and that range still shows up: I care as much about a
              clean API and a typed, accessible interface as I do about recall
              at five.
            </p>
          </div>
        </motion.div>

        <motion.div
          className='mt-12'
          initial={{opacity: 0, y: 16}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.5, delay: 0.1, ease}}>
          <h2 className='mb-4 font-mono text-xs uppercase tracking-widest text-gray-500'>
            Currently
          </h2>
          <div className='space-y-3'>
            {now.map((item) => (
              <div key={item.org} className={`${panel} p-5`}>
                <div className='flex flex-wrap items-baseline justify-between gap-2'>
                  <h3 className='text-base font-semibold text-white'>
                    {item.role}{" "}
                    <span className='text-gray-500'>· {item.org}</span>
                  </h3>
                  <span className='font-mono text-xs text-gray-600'>
                    {item.period}
                  </span>
                </div>
                <p className='mt-2 text-sm leading-relaxed text-gray-400'>
                  {item.note}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className='mt-10'
          initial={{opacity: 0, y: 16}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.5, delay: 0.16, ease}}>
          <h2 className='mb-4 font-mono text-xs uppercase tracking-widest text-gray-500'>
            Education
          </h2>
          <div className='space-y-3'>
            {education.map((item) => (
              <div key={item.org} className={`${panel} p-5`}>
                <div className='flex flex-wrap items-baseline justify-between gap-2'>
                  <h3 className='text-base font-semibold text-white'>
                    {item.degree}{" "}
                    <span className='text-gray-500'>· {item.org}</span>
                  </h3>
                  <span className='font-mono text-xs text-gray-600'>
                    {item.period}
                  </span>
                </div>
                <p className='mt-2 text-sm leading-relaxed text-gray-400'>
                  {item.note}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className='mt-12 flex flex-wrap gap-3'
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: 0.5, delay: 0.22}}>
          <Link
            href='/projects'
            className='inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-medium text-zinc-950 transition-all duration-200 hover:bg-emerald-400 active:scale-[0.98]'>
            See the work
            <ArrowUpRight size={15} />
          </Link>
          <Link
            href='/contact'
            className='inline-flex items-center rounded-full border border-white/[0.08] bg-white/[0.02] px-5 py-2.5 text-sm font-medium text-gray-200 transition-all duration-200 hover:border-white/[0.16] hover:bg-white/[0.05] active:scale-[0.98]'>
            Get in touch
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
