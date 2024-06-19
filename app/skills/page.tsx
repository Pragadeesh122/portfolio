import SkillCard from "../_components/SkillCard";

export const metadata = {
  title: "Skills",
  description: "Check out some of the skills I have acquired.",
};
export default function Page() {
  type Skill = {
    skill: string;
    level: string;
    icon: string;
  };

  const skills: Skill[] = [
    {
      skill: "JavaScript",
      level: "Advanced",
      icon: "https://via.placeholder.com/40",
    },
    {
      skill: "React",
      level: "Advanced",
      icon: "https://via.placeholder.com/40",
    },
    {
      skill: "Next.js",
      level: "Advanced",
      icon: "https://via.placeholder.com/40",
    },
    {
      skill: "Tailwind CSS",
      level: "Intermediate",
      icon: "https://via.placeholder.com/40",
    },
  ];

  return (
    <div>
      <h1 className='text-4xl font-bold'>My Skills</h1>
      <div className='mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {skills.map((skill) => (
          <SkillCard
            key={skill.skill}
            skill={skill.skill}
            level={skill.level}
            icon={skill.icon}
          />
        ))}
      </div>
    </div>
  );
}
