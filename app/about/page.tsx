import ExperienceCard from "../_components/ExperienceCard";

export default function Page() {
  type Experience = {
    company: string;
    role: string;
    period: string;
    description: string;
  };

  const experiences: Experience[] = [
    {
      company: "Tech Company A",
      role: "Frontend Developer",
      period: "Jan 2020 - Present",
      description:
        "Worked on developing and maintaining the frontend of various web applications using React and Next.js.",
    },
    {
      company: "Tech Company B",
      role: "Full Stack Developer",
      period: "Jun 2018 - Dec 2019",
      description:
        "Developed full stack web applications using Node.js, Express, and MongoDB.",
    },
  ];

  return (
    <div className='text-white'>
      <h1 className='text-4xl font-bold'>About Me</h1>
      <p className='mt-4'>
        I am a passionate web developer with experience in building modern web
        applications.
      </p>
      <h2 className='text-3xl font-bold mt-8'>Experience</h2>
      <div className='mt-4 space-y-4'>
        {experiences.map((exp) => (
          <ExperienceCard
            key={exp.role}
            company={exp.company}
            role={exp.role}
            period={exp.period}
            description={exp.description}
          />
        ))}
      </div>
    </div>
  );
}
