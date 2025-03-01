"use client";

import {useState, useEffect} from "react";
import {motion, AnimatePresence} from "framer-motion";
import SkillCard from "../_components/SkillCard";
import {skillData, categories} from "../data/SkillData";

// Moving metadata to a separate metadata file as it can't be exported from a client component
// This could be in app/skills/metadata.ts or directly used in layout.tsx

export default function SkillsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredSkills, setFilteredSkills] = useState(skillData);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const filtered = skillData.filter((skill) => {
      const matchesCategory =
        selectedCategory === "All" || skill.category === selectedCategory;
      const matchesSearch = skill.skill
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
    setFilteredSkills(filtered);
  }, [selectedCategory, searchQuery]);

  return (
    <section className='py-12 md:py-16 lg:py-24'>
      <div className='container px-4 md:px-6 mx-auto max-w-7xl'>
        <motion.div
          className='flex flex-col items-center justify-center space-y-4 text-center'
          initial={{opacity: 0, y: -20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.5}}>
          <div className='mb-8'>
            <h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 text-transparent bg-clip-text'>
              My Technical Expertise
            </h1>
            <p className='max-w-[800px] text-gray-600 dark:text-gray-400 md:text-xl lg:text-lg xl:text-xl'>
              I&apos;m proficient in a wide range of web development
              technologies, from front-end frameworks to backend and databases.
            </p>
          </div>
        </motion.div>

        <div className='mb-8'>
          <div className='flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0'>
            <div className='flex flex-wrap gap-2 justify-center sm:justify-start'>
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-blue-600 text-white dark:bg-blue-500"
                      : "bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
                  }`}
                  whileHover={{scale: 1.05}}
                  whileTap={{scale: 0.95}}>
                  {category}
                </motion.button>
              ))}
            </div>

            <div className='relative w-full sm:w-64'>
              <input
                type='text'
                placeholder='Search skills...'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className='w-full px-4 py-2 rounded-full border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-200'
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'>
                  ✕
                </button>
              )}
            </div>
          </div>
        </div>

        <motion.div
          layout
          className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-8'>
          <AnimatePresence>
            {filteredSkills.length > 0 ? (
              filteredSkills.map((skill, index) => (
                <motion.div
                  key={skill.skill}
                  layout
                  initial={{opacity: 0, scale: 0.8}}
                  animate={{opacity: 1, scale: 1}}
                  exit={{opacity: 0, scale: 0.8}}
                  transition={{duration: 0.4, delay: index * 0.05}}
                  className='bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-100 dark:border-gray-700'>
                  <SkillCard
                    src={skill.src}
                    alt={skill.alt}
                    skill={skill.skill}
                    category={skill.category}
                    proficiency={skill.proficiency}
                  />
                </motion.div>
              ))
            ) : (
              <motion.div
                className='col-span-full text-center py-12'
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{delay: 0.3}}>
                <p className='text-lg text-gray-500 dark:text-gray-400'>
                  No skills found matching your criteria.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory("All");
                    setSearchQuery("");
                  }}
                  className='mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors'>
                  Reset filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
