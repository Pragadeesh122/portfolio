"use client";

import {useEffect, useRef} from "react";
import {motion, useScroll, useTransform} from "framer-motion";

type Experience = {
  title: string;
  company?: string;
  institution?: string;
  period: string;
  description: string;
  icon: React.ReactNode;
  color: string;
};

export default function InteractiveExperience({
  experiences,
}: {
  experiences: Experience[];
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const {scrollYProgress} = useScroll({target: containerRef});
  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0.6, 1]);

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      if (!containerRef.current) return;
      const {clientX, clientY} = ev;
      containerRef.current.style.setProperty("--mouse-x", `${clientX}px`);
      containerRef.current.style.setProperty("--mouse-y", `${clientY}px`);
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return (
    <div
      ref={containerRef}
      className='relative'
      style={{
        backgroundImage:
          "radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(0,0,0,0.03), transparent 80%)",
      }}>
      <motion.div style={{scale, opacity}}>
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            className='mb-24 relative'
            initial={{opacity: 0, x: index % 2 === 0 ? -100 : 100}}
            whileInView={{opacity: 1, x: 0}}
            viewport={{once: true}}
            transition={{duration: 0.8, delay: index * 0.2}}>
            <div
              className={`absolute top-0 ${
                index % 2 === 0 ? "left-0" : "right-0"
              } w-2 h-full bg-gradient-to-b ${experience.color}`}
            />
            <div className={`relative ${index % 2 === 0 ? "ml-8" : "mr-8"}`}>
              <div
                className={`absolute top-0 ${
                  index % 2 === 0 ? "-left-12" : "-right-12"
                } w-10 h-10 rounded-full bg-gradient-to-br ${
                  experience.color
                } flex items-center justify-center text-white`}>
                {experience.icon}
              </div>
              <div className='bg-white bg-opacity-70 backdrop-filter backdrop-blur-lg rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200'>
                <h3 className='text-2xl font-semibold mb-2 text-gray-800'>
                  {experience.title}
                </h3>
                <p className='text-lg text-gray-600 mb-2'>
                  {experience.institution || experience.company}
                </p>
                <p className='text-sm text-gray-500 mb-4'>
                  {experience.period}
                </p>
                <p className='text-gray-700'>{experience.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
