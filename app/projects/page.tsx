"use client";

import {motion} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {Github, ArrowUpRight} from "lucide-react";
import nalvarPlatform from "@/public/nalvar-display.png";
import citroLanding from "@/public/citro-home.png";
import eleganceHub from "@/public/elegancehub-landing.png";
import wildOasis from "@/public/wild_oasis_webiste.png";
import financeTracker from "@/public/finance-tracker.png";
import styleSenseAI from "@/public/styleSenseAI.png";
import {StaticImageData} from "next/image";

const ease = [0.22, 1, 0.36, 1];

interface Project {
  title: string;
  description: string;
  imageUrl: StaticImageData;
  githubLink: string;
  demoLink: string;
  techStack: string[];
}

const projects: Project[] = [
  {
    title: "Nalvar",
    description:
      "A comprehensive website built for Nalvar, a tech consulting business, showcasing their services and case studies. Features an intuitive UI with smooth interactions and a RAG-powered chatbot.",
    imageUrl: nalvarPlatform,
    githubLink: "https://github.com/Pragadeesh122/nalvar",
    demoLink: "https://nalvar.com",
    techStack: [
      "Next.js",
      "React",
      "FastAPI",
      "TypeScript",
      "Tailwind CSS",
      "LangChain",
      "RAG",
    ],
  },
  {
    title: "Citro Essential Oil",
    description:
      "A bespoke e-commerce website for an essential oils client. Next.js-powered with elegant product showcases, smooth animations, and responsive design.",
    imageUrl: citroLanding,
    githubLink: "https://github.com/Pragadeesh122/citro",
    demoLink: "https://citroessentialoil.com",
    techStack: ["Next.js", "Tailwind CSS", "ShadCn", "Supabase"],
  },
  {
    title: "Finance Tracker",
    description:
      "Investment calculator app with CAGR computation, return projections, goal planning, retirement planning, step-up SIP calculations, and mutual fund tracking.",
    imageUrl: financeTracker,
    githubLink: "https://github.com/Pragadeesh122/finance_tracker",
    demoLink: "https://www.financetracker.one/",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "EleganceHub",
    description:
      "A full-featured e-commerce platform with user auth, product filtering, cart management, payment processing, and order tracking.",
    imageUrl: eleganceHub,
    githubLink: "https://github.com/Pragadeesh122/e-commerce",
    demoLink: "https://elegancehub.vercel.app",
    techStack: ["Next.js", "Tailwind CSS", "NextAuth", "ShadCn", "Supabase"],
  },
  {
    title: "Wild Oasis",
    description:
      "Hotel booking platform for guests to explore cabins, make reservations, and manage bookings with an intuitive interface.",
    imageUrl: wildOasis,
    githubLink: "https://github.com/Pragadeesh122/the-wild-oasis-website",
    demoLink: "https://the-wild-oasis-website-iota.vercel.app/",
    techStack: ["Next.js", "Tailwind CSS", "NextAuth", "Supabase"],
  },
  {
    title: "StyleSense AI",
    description:
      "AI-powered wardrobe management mobile app with personalized outfit recommendations using Gemini AI, calendar scheduling, and analytics.",
    imageUrl: styleSenseAI,
    githubLink: "https://github.com/Pragadeesh122/VirtualWardrobe",
    demoLink: "#",
    techStack: [
      "React Native",
      "Expo",
      "Tamagui",
      "Gemini AI",
      "Firebase",
      "Node.js",
    ],
  },
];

function FeaturedProjectCard({project, index}: {project: Project; index: number}) {
  return (
    <motion.div
      initial={{opacity: 0, filter: "blur(10px)"}}
      animate={{opacity: 1, filter: "blur(0px)"}}
      transition={{duration: 0.6, delay: index * 0.1, ease}}
      className='group rounded-2xl bg-zinc-900/60 border border-gray-800/50 backdrop-blur-sm overflow-hidden hover:border-gray-700/60 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/5'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-0'>
        {/* Image */}
        <div className='relative aspect-video md:aspect-auto overflow-hidden'>
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className='object-cover transition-transform duration-700 group-hover:scale-105'
            sizes='(max-width: 768px) 100vw, 50vw'
          />
          <div className='absolute inset-0 bg-gradient-to-t from-zinc-900/60 to-transparent md:bg-gradient-to-r md:from-transparent md:to-zinc-900/20' />
        </div>

        {/* Content */}
        <div className='p-6 sm:p-8 flex flex-col justify-center'>
          <h3 className='text-xl sm:text-2xl font-bold tracking-tight text-white mb-3'>
            {project.title}
          </h3>
          <p className='text-gray-400 text-sm leading-relaxed mb-5'>
            {project.description}
          </p>

          {/* Tech badges */}
          <div className='flex flex-wrap gap-1.5 mb-6'>
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className='px-2.5 py-1 text-xs font-mono text-gray-400 border border-gray-800/50 rounded-full bg-gray-800/20'>
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className='flex items-center gap-4'>
            <Link
              href={project.githubLink}
              target='_blank'
              className='flex items-center gap-1.5 text-sm text-gray-400 hover:text-emerald-400 transition-colors duration-200'>
              <Github size={15} />
              <span>Source</span>
            </Link>
            {project.title !== "StyleSense AI" ? (
              <Link
                href={project.demoLink}
                target='_blank'
                className='flex items-center gap-1.5 text-sm text-gray-400 hover:text-emerald-400 transition-colors duration-200'>
                <span>Live Demo</span>
                <ArrowUpRight size={15} />
              </Link>
            ) : (
              <span className='text-sm text-gray-600 font-mono'>
                Coming Soon
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function CompactProjectCard({project, index}: {project: Project; index: number}) {
  return (
    <motion.div
      initial={{opacity: 0, filter: "blur(10px)"}}
      animate={{opacity: 1, filter: "blur(0px)"}}
      transition={{duration: 0.6, delay: 0.2 + index * 0.08, ease}}
      className='group rounded-2xl bg-zinc-900/60 border border-gray-800/50 backdrop-blur-sm overflow-hidden hover:border-gray-700/60 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/5 flex flex-col'>
      {/* Image */}
      <div className='relative aspect-video overflow-hidden'>
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className='object-cover transition-transform duration-700 group-hover:scale-105'
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent' />
      </div>

      <div className='p-5 flex flex-col flex-grow'>
        <h3 className='text-lg font-bold tracking-tight text-white mb-2'>
          {project.title}
        </h3>
        <p className='text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2 flex-grow'>
          {project.description}
        </p>

        {/* Tech badges */}
        <div className='flex flex-wrap gap-1.5 mb-4'>
          {project.techStack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className='px-2 py-0.5 text-xs font-mono text-gray-400 border border-gray-800/50 rounded-full bg-gray-800/20'>
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className='px-2 py-0.5 text-xs font-mono text-gray-500'>
              +{project.techStack.length - 4}
            </span>
          )}
        </div>

        {/* Links */}
        <div className='flex items-center gap-4'>
          <Link
            href={project.githubLink}
            target='_blank'
            className='flex items-center gap-1.5 text-sm text-gray-400 hover:text-emerald-400 transition-colors duration-200'>
            <Github size={14} />
            <span>Source</span>
          </Link>
          {project.title !== "StyleSense AI" ? (
            <Link
              href={project.demoLink}
              target='_blank'
              className='flex items-center gap-1.5 text-sm text-gray-400 hover:text-emerald-400 transition-colors duration-200'>
              <span>Demo</span>
              <ArrowUpRight size={14} />
            </Link>
          ) : (
            <span className='text-sm text-gray-600 font-mono'>Coming Soon</span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsPage() {
  const featured = projects.slice(0, 2);
  const rest = projects.slice(2);

  return (
    <section className='pt-28 sm:pt-32 pb-16 sm:pb-24 relative'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          className='mb-16'
          initial={{opacity: 0, filter: "blur(10px)"}}
          animate={{opacity: 1, filter: "blur(0px)"}}
          transition={{duration: 0.6, ease}}>
          <p className='font-mono text-xs uppercase tracking-widest text-emerald-500 mb-3'>
            Featured Work
          </p>
          <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4'>
            Projects
          </h1>
          <p className='text-gray-400 text-lg max-w-2xl'>
            A showcase of web applications built with modern technologies,
            spanning full-stack development, AI integration, and design.
          </p>
        </motion.div>

        {/* Featured projects - full width */}
        <div className='space-y-6 mb-8'>
          {featured.map((project, index) => (
            <FeaturedProjectCard
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </div>

        {/* Remaining projects - compact grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6'>
          {rest.map((project, index) => (
            <CompactProjectCard
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
