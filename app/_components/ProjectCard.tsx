"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/app/_components/ui/card";
import {Button} from "@/app/_components/ui/button";
import {GithubIcon, ExternalLinkIcon, InfoIcon} from "lucide-react";
import Image, {StaticImageData} from "next/image";
import {Badge} from "./ui/badge";
import Link from "next/link";
import {useState} from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  longDescription?: string;
  imageUrl: StaticImageData;
  githubLink: string;
  demoLink: string;
  techStack: string[];
  featured?: boolean;
}

export default function ProjectCard({
  title = "Amazing Project",
  description = "This is a fantastic project that showcases my skills in React, Next.js, and Tailwind CSS.",
  longDescription,
  imageUrl,
  githubLink = "https://github.com/yourusername/amazing-project",
  demoLink = "https://amazing-project.vercel.app",
  techStack = ["React", "Next.js", "Tailwind CSS"],
  featured = false,
}: ProjectCardProps) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <Card
      className={`w-full max-w-md overflow-hidden transition-all duration-300 transform hover:shadow-xl border-gray-300 dark:border-gray-400 ${
        featured ? "border-2 border-blue-500 dark:border-blue-400" : ""
      } ${showDetails ? "scale-105 z-10" : "hover:scale-102"}`}>
      <CardHeader className='p-0 relative'>
        <div className='relative w-full h-60 overflow-hidden'>
          <Image
            src={imageUrl}
            placeholder='blur'
            alt={title}
            fill
            className={`object-cover transition-transform duration-700 ${
              showDetails ? "scale-110" : ""
            }`}
          />
          {featured && (
            <div className='absolute top-0 right-0 bg-blue-500 text-white px-3 py-1 rounded-bl-lg font-medium text-sm z-10'>
              Featured
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent className={`p-4 ${showDetails ? "pb-0" : ""}`}>
        <div className='flex justify-between items-start mb-2'>
          <h3 className='text-xl font-bold'>{title}</h3>
          <Button
            variant='ghost'
            size='sm'
            className='p-1 h-auto'
            onClick={() => setShowDetails(!showDetails)}
            aria-label={showDetails ? "Hide details" : "Show details"}>
            <InfoIcon
              size={18}
              className={`transition-transform ${
                showDetails ? "text-blue-500 rotate-180" : ""
              }`}
            />
          </Button>
        </div>

        <p className='text-sm text-gray-600 dark:text-gray-200 mb-4'>
          {showDetails && longDescription ? longDescription : description}
        </p>

        <div className='flex flex-wrap gap-2 mb-4'>
          {techStack.map((tech, index) => (
            <Badge key={index} variant='default' className='text-xs'>
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className='bg-gray-50 p-4 flex justify-between items-center dark:bg-gray-600 border-t dark:border-gray-700'>
        <Button variant='outline' size='sm' className='flex items-center gap-2'>
          <GithubIcon className='w-4 h-4' />
          <Link href={githubLink} target='_blank' rel='noopener noreferrer'>
            GitHub
          </Link>
        </Button>
        <Button variant='default' size='sm' className='flex items-center gap-2'>
          <ExternalLinkIcon className='w-4 h-4' />
          {title === "StyleSense AI" ? (
            <span>Coming Soon!</span>
          ) : (
            <Link href={demoLink} target='_blank' rel='noopener noreferrer'>
              Live Demo
            </Link>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
}
