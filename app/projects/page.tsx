"use client";

import {motion, AnimatePresence} from "framer-motion";
import ProjectCard from "../_components/ProjectCard";
import nalvarPlatform from "@/public/nalvar-display.png";
import citroLanding from "@/public/citro-home.png";
import eleganceHub from "@/public/elegancehub-landing.png";
import wildOasis from "@/public/wild_oasis_webiste.png";
import WildOasisManager from "@/public/wild_oasis_management.png";
import styleSenseAI from "@/public/styleSenseAI.png";
import {StaticImageData} from "next/image";

interface Project {
  title: string;
  description: string;
  longDescription?: string;
  imageUrl: StaticImageData;
  githubLink: string;
  demoLink: string;
  techStack: string[];
}

const projects: Project[] = [
  {
    title: "Nalvar",
    description:
      "A comprehensive website built for Nalvar, a tech consulting business, showcasing their services and case studies. Features an intuitive UI with smooth interactions and a RAG-powered chatbot to assist users with business queries.",
    longDescription:
      "For Nalvar, I developed a modern, comprehensive website that effectively presents their tech consulting services and detailed case studies. The site features an intuitive user interface with smooth animations and interactive elements that enhance the user experience. A key innovation was implementing a RAG (Retrieval-Augmented Generation) chatbot that helps visitors instantly find information about Nalvar's business services without navigating through multiple pages. The responsive design ensures a seamless experience across all devices.",
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
      "RAG Chatbot",
    ],
  },
  {
    title: "Citro Essential Oil",
    description:
      "A bespoke website developed for a client specializing in essential oils. This Next.js-powered site beautifully showcases the client's product range, highlighting the benefits and uses of various essential oils.",
    longDescription:
      "Citro Essential Oil is a client project focused on creating an elegant online presence that effectively communicates product benefits and builds brand awareness. The site features smooth animations, responsive design, and seamless content management capabilities.",
    imageUrl: citroLanding,
    githubLink: "https://github.com/Pragadeesh122/citro",
    demoLink: "https://citroessentialoil.com",
    techStack: ["Next.js", "Tailwind CSS", "ShadCn", "Supabase"],
  },
  {
    title: "EleganceHub",
    description:
      "An e-commerce platform showcasing the latest fashion trends and products. This site offers a sleek, user-friendly interface for browsing and purchasing cutting-edge fashion items, from stylish dresses to elegant accessories.",
    longDescription:
      "EleganceHub represents a comprehensive e-commerce solution with features including user authentication, product filtering, cart management, payment processing, and order tracking. Built with a modern tech stack focusing on performance and user experience.",
    imageUrl: eleganceHub,
    githubLink: "https://github.com/Pragadeesh122/e-commerce",
    demoLink: "https://elegancehub.vercel.app",
    techStack: ["Next.js", "Tailwind CSS", "NextAuth", "ShadCn", "Supabase"],
  },
  {
    title: "Wild Oasis",
    description:
      "A comprehensive hotel booking platform designed for guests. Users can explore available cabins, make reservations, and manage their bookings. The site offers an intuitive interface for a seamless booking experience.",
    longDescription:
      "Wild Oasis guest portal enables users to browse cabin availability, compare options, make bookings, and manage their reservations. The platform emphasizes intuitive navigation and clear presentation of information to streamline the booking process.",
    imageUrl: wildOasis,
    githubLink: "https://github.com/Pragadeesh122/the-wild-oasis-website",
    demoLink: "https://the-wild-oasis-website-iota.vercel.app/",
    techStack: ["Next.js", "Tailwind CSS", "NextAuth", "Supabase"],
  },
  {
    title: "Wild Oasis Manager",
    description:
      "An advanced management system for the Wild Oasis hotel. This platform allows staff to efficiently handle bookings, create and manage cabin listings, process check-ins, and oversee all aspects of guest reservations and hotel operations.",
    longDescription:
      "Wild Oasis Manager is the administrative counterpart to the guest booking system. It provides hotel staff with comprehensive tools for managing reservations, cabin inventory, guest information, and daily operations. Features include a dashboard with key metrics, booking calendar, and detailed reports.",
    imageUrl: WildOasisManager,
    githubLink: "https://github.com/Pragadeesh122/the-wild-oasis-website",
    demoLink: "https://the-wiild-oasis.netlify.app",
    techStack: ["React", "Styled Components", "Supabase"],
  },
  {
    title: "StyleSense AI",
    description:
      "An AI-powered wardrobe management mobile app that provides personalized outfit recommendations using Gemini AI. Features include intelligent calendar for outfit scheduling, wear history tracking, and analytics dashboard for wardrobe usage patterns.",
    longDescription:
      "StyleSense AI utilizes advanced machine learning algorithms to analyze users' clothing items and provide intelligent outfit suggestions based on weather, occasion, and style preferences. The app includes a virtual closet, outfit planning calendar, wear frequency tracking, and personalized style insights.",
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

export default function ProjectsPage() {
  return (
    <section className='py-12 md:py-16 lg:py-20 relative'>
      {/* Main background gradient */}
      <div className='absolute inset-0 bg-gradient-to-b from-blue-950/20 via-cyan-950/10 to-gray-950 -z-10'></div>

      {/* Decorative blob shapes for light mode */}
      <div className='absolute top-24 left-0 w-96 h-96 rounded-full bg-blue-900/10 blur-3xl -z-10'></div>
      <div className='absolute bottom-24 right-0 w-96 h-96 rounded-full bg-cyan-900/10 blur-3xl -z-10'></div>
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-blue-900/10 via-blue-900/10 to-teal-900/10 blur-3xl -z-10'></div>

      {/* Noise texture */}
      <div className="absolute inset-0 opacity-[0.08] bg-[url('/noise.png')] pointer-events-none"></div>

      <div className='container px-4 md:px-6 mx-auto max-w-7xl'>
        <motion.div
          className='flex flex-col items-center justify-center space-y-4 text-center mb-12'
          initial={{opacity: 0, y: -20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.5}}>
          <div className='relative'>
            <h1 className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 pb-2 px-8'>
              My Projects
            </h1>
            <p className='max-w-[800px] text-gray-400 md:text-xl lg:text-xl xl:text-xl px-4 pb-6'>
              Explore my portfolio of web applications built with modern
              technologies, showcasing my skills in web development and design.
            </p>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr'>
          <AnimatePresence>
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                exit={{opacity: 0, y: -20}}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}>
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  longDescription={project.longDescription}
                  imageUrl={project.imageUrl}
                  githubLink={project.githubLink}
                  demoLink={project.demoLink}
                  techStack={project.techStack}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
