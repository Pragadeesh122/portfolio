import SkillCard from "../_components/SkillCard";
import {skillData} from "../data/SkillData";

export const metadata = {
  title: "Skills",
  description: "Check out some of the skills I have acquired.",
};
export default function Component() {
  return (
    <section className='py-6 md:py-12 lg:py-24'>
      <div className='container px-4 md:px-6'>
        <div className='flex flex-col items-center justify-center space-y-4 text-center'>
          <div className='mb-8'>
            <h2 className='text-2xl font-bold tracking-tighter sm:text-2xl md:text-3xl lg:text-5xl mb-4'>
              My Technical Expertise
            </h2>
            <p className='max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-lg/relaxed'>
              I&apos;m proficient in a wide range of web development
              technologies, from front-end frameworks to backend and databases.
            </p>
          </div>
        </div>
        <div className='mx-auto grid max-w-5xl grid-cols-2 gap-12 py-12 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6'>
          {skillData.map((skill, index) => (
            <SkillCard
              key={index}
              src={skill.src}
              alt={skill.alt}
              skill={skill.skill}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
