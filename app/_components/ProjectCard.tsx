"use client";

import {useState} from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/_components/ui/card";
import {Button} from "@/app/_components/ui/button";
import {Badge} from "@/app/_components/ui/badge";
import {
  Github,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  ArrowUpRight,
} from "lucide-react";
import Image from "next/image";
import {motion, AnimatePresence} from "framer-motion";
import {StaticImageData} from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  longDescription?: string;
  imageUrl: StaticImageData;
  githubLink: string;
  demoLink: string;
  techStack: string[];
}

export default function ProjectCard({
  title,
  description,
  longDescription,
  imageUrl,
  githubLink = "#",
  demoLink = "#",
  techStack = [],
}: ProjectCardProps) {
  const [showDetails, setShowDetails] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      whileHover={{y: -8, transition: {duration: 0.3, ease: "easeOut"}}}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className='h-full group perspective'>
      <Card className='h-full flex flex-col overflow-hidden relative border border-gray-700 bg-gray-800 shadow-xl shadow-gray-900/30 rounded-xl transform-gpu transition-all duration-300'>
        {/* Enhanced hover gradient accent overlay for light mode */}
        <motion.div
          animate={{opacity: isHovered ? 1 : 0}}
          className='absolute left-0 top-0 w-2 h-full bg-gradient-to-b from-blue-500 to-blue-600  rounded-l-xl transition-opacity duration-300'
        />

        {/* Image container with overlay effect */}
        <div className='relative w-full aspect-video overflow-hidden group'>
          <Image
            src={imageUrl}
            alt={title}
            fill
            className='object-cover object-center transition-transform duration-700 group-hover:scale-110 brightness-[0.85]'
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          />

          <div className='absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-80'></div>
        </div>

        <CardHeader className='pb-2 space-y-2 pt-5'>
          <div className='flex items-start justify-between'>
            <CardTitle className='text-xl font-bold tracking-tight text-gray-50'>
              {title}
            </CardTitle>
            <motion.div
              animate={{rotate: isHovered ? 45 : 0}}
              className='text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
              <Link href={demoLink} target='_blank'>
                <ArrowUpRight className='h-5 w-5' />
              </Link>
            </motion.div>
          </div>
          <CardDescription className='text-sm text-gray-400 line-clamp-2 '>
            {description}
          </CardDescription>
        </CardHeader>

        {/* Enhanced tech stack badges for light mode */}
        <div className='px-6 pb-2'>
          <div className='flex flex-wrap gap-1.5'>
            {techStack.map((tech) => (
              <Badge
                key={tech}
                variant='secondary'
                className='text-xs font-medium bg-blue-900/40 text-blue-200 hover:bg-blue-800/60 border border-blue-800/20 px-2 py-1 rounded-full'>
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        <CardContent className='pt-4 pb-4 flex-grow'>
          <AnimatePresence>
            {showDetails && longDescription && (
              <motion.div
                initial={{opacity: 0, height: 0}}
                animate={{opacity: 1, height: "auto"}}
                exit={{opacity: 0, height: 0}}
                transition={{duration: 0.3}}
                className='overflow-hidden'>
                <div className='py-3 pr-1 max-h-[150px] overflow-y-auto scrollbar scrollbar-thin scrollbar-thumb-blue-600 scrollbar-track-blue-900/20'>
                  <p className='text-sm text-gray-300'>{longDescription}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </CardContent>

        <CardFooter className='pt-0 flex flex-col gap-3 mt-auto pb-4'>
          {longDescription && (
            <Button
              variant='ghost'
              size='sm'
              onClick={() => setShowDetails(!showDetails)}
              className='w-full justify-center text-sm text-gray-400 hover:text-gray-200 border-t border-gray-700 rounded-none pt-3'>
              {showDetails ? (
                <>
                  <span>Show less</span>
                  <ChevronUp className='ml-1 h-4 w-4' />
                </>
              ) : (
                <>
                  <span>Show more</span>
                  <ChevronDown className='ml-1 h-4 w-4' />
                </>
              )}
            </Button>
          )}

          <div className='flex gap-3 w-full mt-2'>
            <Button
              asChild
              variant='outline'
              className='flex-1 gap-1.5 bg-gray-800 border border-gray-600 text-gray-200 hover:bg-gray-700'>
              <a
                href={githubLink}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={`View ${title} GitHub repository`}>
                <Github className='h-4 w-4' />
                <span>Code</span>
              </a>
            </Button>

            {title === "StyleSense AI" ? (
              <div className='flex-1 gap-1.5 bg-blue-600 hover:bg-blue-700 text-white border-0 shadow-md shadow-blue-900/30'>
                <div className='flex items-center w-full h-full justify-center '>
                  <span className='text-white text-sm text-semibold'>
                    Coming Soon
                  </span>
                </div>
              </div>
            ) : (
              <Button
                asChild
                className='flex-1 gap-1.5 bg-blue-600 hover:bg-blue-700 text-white border-0 shadow-md shadow-blue-900/30'>
                <Link
                  href={demoLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={`View ${title} live demo`}>
                  <ExternalLink className='h-4 w-4' />
                  <span>Demo</span>
                </Link>
              </Button>
            )}
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
