import ProjectCard from "../_components/ProjectCard";
import citroLanding from "@/public/citro-landing.png";
import eleganceHub from "@/public/elegancehub-landing.png";
import wildOasis from "@/public/wild_oasis_webiste.png";
import WildOasisManager from "@/public/wild_oasis_management.png";
import {StaticImageData} from "next/image";

export const metadata = {
  title: "Projects",
  description: "Check out some of the projects I have worked on.",
};

type Project = {
  title: string;
  description: string;
  imageUrl: StaticImageData;
  githubLink: string;
  demoLink: string;
  techStack: string[];
};

const projects: Project[] = [
  {
    title: "EleganceHub",
    description:
      "An e-commerce platform showcasing the latest fashion trends and products. This site offers a sleek, user-friendly interface for browsing and purchasing cutting-edge fashion items, from stylish dresses to elegant accessories.",
    imageUrl: eleganceHub,
    githubLink: "https://github.com/Pragadeesh122/e-commerce",
    demoLink: "https://elegancehub.vercel.app",
    techStack: ["Next.js", "Tailwind CSS", "NextAuth", "ShadCn", "Supabase"],
  },
  {
    title: "Citro Essential Oil",
    description:
      "A bespoke website developed for a client specializing in essential oils. This Next.js-powered site beautifully showcases the client's product range, highlighting the benefits and uses of various essential oils.",
    imageUrl: citroLanding,
    githubLink: "https://github.com/Pragadeesh122/citro",
    demoLink: "https://citroessentialoil.com",
    techStack: ["Next.js", "Tailwind CSS", "ShadCn", "Supabase"],
  },
  {
    title: "Wild Oasis",
    description:
      "A comprehensive hotel booking platform designed for guests. Users can explore available cabins, make reservations, and manage their bookings. The site offers an intuitive interface for a seamless booking experience.",
    imageUrl: wildOasis,
    githubLink: "https://github.com/Pragadeesh122/the-wild-oasis-website",
    demoLink: "https://the-wild-oasis-website-iota.vercel.app/",
    techStack: ["Next.js", "Tailwind CSS", "NextAuth", "Supabase"],
  },
  {
    title: "Wild Oasis Manager",
    description:
      "An advanced management system for the Wild Oasis hotel. This platform allows staff to efficiently handle bookings, create and manage cabin listings, process check-ins, and oversee all aspects of guest reservations and hotel operations.",
    imageUrl: WildOasisManager,
    githubLink: "https://github.com/Pragadeesh122/the-wild-oasis-website",
    demoLink: "https://the-wiild-oasis.netlify.app",
    techStack: ["React", "Styled Components", "Supabase"],
  },
];

export default function ProjectShowcase() {
  return (
    <div className='container mx-auto py-12'>
      <h1 className='text-3xl font-bold text-center mb-12'>My Projects</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16'>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            techStack={project.techStack}
            imageUrl={project.imageUrl}
            githubLink={project.githubLink}
            demoLink={project.demoLink}
          />
        ))}
      </div>
    </div>
  );
}
