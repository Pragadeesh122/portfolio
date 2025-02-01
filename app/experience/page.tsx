import React from "react";
import {BookOpen, Coffee, Briefcase, GraduationCap} from "lucide-react";
import {Card, CardContent} from "@/app/_components/ui/card";

const experiences = [
  {
    title: "Software Training",
    company: "IU Corps",
    period: "Oct 2024 - Dec 2024",
    description:
      "Built an activity management platform with NextJS 14 and Prisma ORM for YMCA programs, reducing admin workload by 40%. Implemented automated notifications and analytics dashboard using Server Components and Shadcn/UI for program tracking.",
    icon: <Briefcase className='h-6 w-6' />,
    color: "bg-green-200 text-green-600",
  },
  {
    title: "Software Developer Intern",
    company: "OSIDigital",
    period: "May 2024 - July 2024",
    description:
      "Developing enterprise applications using React and Redux, creating reusable components and integrating responsive UI elements to improve user experience and application performance.",
    icon: <Briefcase className='h-6 w-6' />,
    color: "bg-blue-200 text-blue-600",
  },
  {
    title: "Master's in Computer Science",
    institution: "Indiana University, Bloomington",
    period: "August 2023 - May 2025",
    description:
      "Advancing knowledge in cutting-edge areas of computer science, with a focus on advanced algorithms, machine learning, and software engineering practices.",
    icon: <GraduationCap className='h-6 w-6' />,
    color: "bg-purple-200 text-purple-600",
  },
  {
    title: "Web Development Intern",
    company: "SmartKnower",
    period: "April 2022 - June 2022",
    description:
      "Revitalized a B2B e-commerce platform using MERN stack, increasing user engagement by 30% and improving site efficiency through RESTful API development.",
    icon: <Coffee className='h-6 w-6' />,
    color: "bg-yellow-200 text-yellow-600",
  },
  {
    title: "Bachelor of Science in Computer Science and Engineering",
    institution: "Kumaraguru College of Technology",
    period: "August 2019 - April 2023",
    description:
      "Built a strong foundation in computer science fundamentals, including data structures, algorithms, software design, and programming paradigms.",
    icon: <BookOpen className='h-6 w-6' />,
    color: "bg-red-200 text-red-600",
  },
];

export default function ExperiencePage() {
  return (
    <div className=' mx-auto px-4 py-16'>
      <h1 className='text-4xl font-bold text-center mb-12  text-gray-800 dark:text-slate-200'>
        My Journey
      </h1>
      <div className='space-y-8'>
        {experiences.map((experience, index) => (
          <Card
            key={index}
            className='hover:shadow-lg transition-shadow duration-300 max-w-7xl dark:border-gray-500'>
            <CardContent className='p-6 rounded-2xl'>
              <div className='flex items-start'>
                <div className={`${experience.color} p-3 rounded-full mr-4`}>
                  {experience.icon}
                </div>
                <div className='flex-1'>
                  <h3 className='text-xl font-semibold mb-2'>
                    {experience.title}
                  </h3>
                  <p className='text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2'>
                    {experience.institution || experience.company} |{" "}
                    {experience.period}
                  </p>
                  <p className='text-gray-500 dark:text-gray-300'>
                    {experience.description}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
