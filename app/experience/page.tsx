"use client";

import React, {useState} from "react";
import {motion, AnimatePresence} from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Building,
  Calendar,
  ChevronDown,
  ChevronUp,
  Filter,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/_components/ui/card";
import {Button} from "@/app/_components/ui/button";
import {Badge} from "@/app/_components/ui/badge";

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
  type: "work" | "education";
  skills?: string[];
  icon: React.ReactNode;
}

const experiences: Experience[] = [
  {
    title: "Software Training",
    company: "IU Corps",
    period: "Oct 2024 - Dec 2024",
    description: [
      "Led the development of an activity management platform for IU Corps, enabling efficient tracking of community engagement initiatives.",
      "Implemented user authentication, role-based permissions, and dynamic dashboards for administrators.",
      "Designed and deployed RESTful APIs to support seamless front-end interactions.",
    ],
    icon: <Briefcase className='w-10 h-10 text-blue-600 dark:text-blue-400' />,
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
    icon: <Briefcase className='w-10 h-10 text-blue-600 dark:text-blue-400' />,
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
    icon: (
      <GraduationCap className='w-10 h-10 text-purple-600 dark:text-purple-400' />
    ),
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
    icon: <Briefcase className='w-10 h-10 text-blue-600 dark:text-blue-400' />,
    type: "work",
    skills: ["JavaScript", "HTML", "CSS", "Bootstrap", "PHP", "MySQL"],
  },
  {
    title: "Bachelor of Science in Computer Science and Engineering",
    company: "Kumaraguru College of Technology",
    period: "2019so - 2023",
    description: [
      "Focused on Computer Science fundamentals, algorithms, and software development methodologies.",
      "Relevant coursework: Data Structures, Algorithms, Object-Oriented Programming, and Database Management Systems.",
      "GPA: 8.5/10.0",
    ],
    icon: (
      <GraduationCap className='w-10 h-10 text-purple-600 dark:text-purple-400' />
    ),
    type: "education",
  },
];

export default function ExperiencePage() {
  const [filter, setFilter] = useState<"all" | "work" | "education">("all");
  const [expanded, setExpanded] = useState<string | null>(null);

  // Filter experiences based on type only
  const filteredExperiences = experiences.filter((exp) => {
    return filter === "all" || exp.type === filter;
  });

  const handleToggleExpand = (title: string) => {
    setExpanded(expanded === title ? null : title);
  };

  return (
    <section className='py-12 md:py-16 lg:py-20 relative'>
      {/* Decorative background elements */}
      <div className='absolute inset-0 bg-gradient-to-b from-blue-50/70 via-indigo-50/50 to-white dark:from-blue-950/20 dark:via-indigo-950/10 dark:to-gray-950 -z-10'></div>

      {/* Decorative blob shapes for light mode */}
      <div className='absolute top-24 left-0 w-96 h-96 rounded-full bg-gradient-to-br from-blue-100/40 to-indigo-100/40 blur-3xl dark:opacity-0 -z-10'></div>
      <div className='absolute bottom-24 right-0 w-96 h-96 rounded-full bg-gradient-to-tr from-indigo-100/40 to-purple-100/40 blur-3xl dark:opacity-0 -z-10'></div>
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-96 rounded-full bg-gradient-to-r from-cyan-100/30 via-sky-100/30 to-blue-100/30 blur-3xl dark:opacity-0 -z-10'></div>

      {/* Noise texture */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.08] bg-[url('/noise.png')] pointer-events-none"></div>

      <div className='container px-4 md:px-6 mx-auto max-w-5xl relative'>
        <motion.div
          className='flex flex-col items-center justify-center space-y-4 text-center mb-12'
          initial={{opacity: 0, y: -20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.5}}>
          <h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 dark:from-blue-400 dark:via-cyan-400 dark:to-teal-400 text-transparent bg-clip-text pb-2'>
            Experience & Education
          </h1>
          <p className='max-w-[700px] text-gray-600 dark:text-gray-400 md:text-xl'>
            My professional journey, work experience, and educational background
          </p>
        </motion.div>

        <div className='mb-8 flex justify-center'>
          <div className='flex flex-wrap gap-2'>
            <Button
              onClick={() => setFilter("all")}
              variant={filter === "all" ? "default" : "outline"}
              className={`gap-2 rounded-full transition-all duration-300 ${
                filter === "all"
                  ? "bg-blue-600 hover:bg-blue-700 text-white shadow-md"
                  : "border-blue-200 text-blue-700 hover:border-blue-300 hover:bg-blue-50/50 dark:border-blue-800 dark:text-blue-300 dark:hover:border-blue-700 dark:hover:bg-blue-900/20"
              }`}>
              <Filter className='h-4 w-4' />
              All
            </Button>
            <Button
              onClick={() => setFilter("work")}
              variant={filter === "work" ? "default" : "outline"}
              className={`gap-2 rounded-full transition-all duration-300 ${
                filter === "work"
                  ? "bg-blue-600 hover:bg-blue-700 text-white shadow-md"
                  : "border-blue-200 text-blue-700 hover:border-blue-300 hover:bg-blue-50/50 dark:border-blue-800 dark:text-blue-300 dark:hover:border-blue-700 dark:hover:bg-blue-900/20"
              }`}>
              <Briefcase className='h-4 w-4' />
              Work
            </Button>
            <Button
              onClick={() => setFilter("education")}
              variant={filter === "education" ? "default" : "outline"}
              className={`gap-2 rounded-full transition-all duration-300 ${
                filter === "education"
                  ? "bg-blue-600 hover:bg-blue-700 text-white shadow-md"
                  : "border-blue-200 text-blue-700 hover:border-blue-300 hover:bg-blue-50/50 dark:border-blue-800 dark:text-blue-300 dark:hover:border-blue-700 dark:hover:bg-blue-900/20"
              }`}>
              <GraduationCap className='h-4 w-4' />
              Education
            </Button>
          </div>
        </div>

        <div className='relative'>
          {/* Timeline line */}
          <div className='absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700 hidden sm:block'></div>

          <AnimatePresence>
            {filteredExperiences.length > 0 ? (
              <motion.div className='space-y-8'>
                {filteredExperiences.map((experience, index) => (
                  <motion.div
                    key={experience.title}
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    exit={{opacity: 0, y: -20}}
                    transition={{duration: 0.4, delay: index * 0.1}}
                    className='relative'>
                    <Card className='sm:ml-16 overflow-visible border-0 bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-md transition-all duration-300 relative'>
                      {/* Decorative top border gradient for light mode */}
                      <div className='absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-300 dark:from-blue-700 dark:via-indigo-700 dark:to-purple-700'></div>

                      {/* Icon positioned half in/half out of card */}
                      <div className='absolute left-[-2px]  -translate-x-1/2 top-[-6px] bg-gradient-to-b from-white to-blue-50/80 dark:from-gray-800 dark:to-gray-800 p-1 rounded-full border-2 border-blue-100 dark:border-gray-700 shadow-md z-50 hidden sm:block'>
                        {experience.icon}
                      </div>

                      <CardHeader className='pb-3 flex flex-row items-start sm:items-center gap-4 pl-4 sm:pl-6'>
                        <div className='sm:hidden bg-gradient-to-b from-white to-blue-50/80 dark:from-gray-800 dark:to-gray-800 p-1 rounded-full border-2 border-blue-100 dark:border-gray-700 shadow-md'>
                          {experience.icon}
                        </div>
                        <div className='flex flex-col space-y-1.5 flex-grow'>
                          <div className='flex items-center justify-between'>
                            <CardTitle className='text-xl font-bold text-blue-700 dark:text-blue-300'>
                              {experience.title}
                            </CardTitle>
                            <Badge
                              variant={
                                experience.type === "work"
                                  ? "default"
                                  : "secondary"
                              }
                              className={`ml-2 ${
                                experience.type === "work"
                                  ? "bg-blue-600 hover:bg-blue-700 text-white"
                                  : "bg-blue-600 hover:bg-blue-700 text-white"
                              }`}>
                              {experience.type === "work"
                                ? "Work"
                                : "Education"}
                            </Badge>
                          </div>
                          <div className='flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-gray-500 dark:text-gray-400'>
                            <div className='flex items-center gap-1'>
                              <Building className='h-4 w-4' />
                              <span>{experience.company}</span>
                            </div>
                            <div className='flex items-center gap-1'>
                              <Calendar className='h-4 w-4' />
                              <span>{experience.period}</span>
                            </div>
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent className='pt-0'>
                        <AnimatePresence>
                          <motion.div
                            initial={false}
                            animate={{
                              height:
                                expanded === experience.title ? "auto" : "auto",
                            }}
                            className='space-y-2'>
                            {experience.description.map((desc, i) => (
                              <motion.p
                                key={i}
                                className='text-gray-600 dark:text-gray-300'
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                transition={{delay: i * 0.1}}>
                                • {desc}
                              </motion.p>
                            ))}

                            {experience.skills && (
                              <motion.div
                                className='flex flex-wrap gap-2 mt-4'
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                transition={{delay: 0.3}}>
                                {experience.skills.map((skill) => (
                                  <Badge
                                    key={skill}
                                    variant='outline'
                                    className='bg-blue-50 border-blue-200 text-blue-700 dark:bg-blue-900/30 dark:border-blue-800 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-all duration-300 px-3 py-1 rounded-full'>
                                    {skill}
                                  </Badge>
                                ))}
                              </motion.div>
                            )}
                          </motion.div>
                        </AnimatePresence>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                className='text-center py-16'
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{delay: 0.3}}>
                <p className='text-lg text-gray-500 dark:text-gray-400'>
                  No experiences found matching your criteria.
                </p>
                <Button
                  onClick={() => {
                    setFilter("all");
                  }}
                  className='mt-4 bg-blue-600 hover:bg-blue-700 text-white'>
                  Reset filters
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
