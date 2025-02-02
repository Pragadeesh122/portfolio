import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/_components/ui/card";
import {Button} from "@/app/_components/ui/button";
import {GithubIcon, ExternalLinkIcon} from "lucide-react";
import Image, {StaticImageData} from "next/image";
import {Badge} from "./ui/badge";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: StaticImageData;
  githubLink: string;
  demoLink: string;
  techStack: string[];
}

export default function Component({
  title = "Amazing Project",
  description = "This is a fantastic project that showcases my skills in React, Next.js, and Tailwind CSS. It's a fully responsive web application with a beautiful UI.",
  imageUrl,
  githubLink = "https://github.com/yourusername/amazing-project",
  demoLink = "https://amazing-project.vercel.app",
  techStack = ["React", "Next.js", "Tailwind CSS"],
}: ProjectCardProps) {
  return (
    <Card className='w-full max-w-md overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-xl border-gray-300 dark:border-gray-400 ob'>
      <CardHeader className='p-0'>
        <div className='relative w-full h-60'>
          {title === "StyleSense AI" ? (
            <Image
              src={imageUrl}
              placeholder='blur'
              className='object-contain'
              alt={title}
              fill
            />
          ) : (
            <Image src={imageUrl} placeholder='blur' alt={title} fill />
          )}
        </div>
      </CardHeader>
      <CardContent className='p-4'>
        <CardTitle className='text-xl font-bold mb-2'>{title}</CardTitle>
        <p className='text-sm text-gray-600 dark:text-gray-200 mb-4'>
          {description}
        </p>
        <div className='flex flex-wrap gap-2 mb-4'>
          {techStack.map((tech, index) => (
            <Badge key={index} variant='default' className='text-xs'>
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className='bg-gray-50 p-4 flex justify-between items-center dark:bg-gray-600'>
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
