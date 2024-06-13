import ProjectCard from "../_components/ProjectCard";

export default function Page() {
  type Project = {
    title: string;
    description: string;
    link: string;
    image: string;
  };

  const projects: Project[] = [
    {
      title: "Project One",
      description: "Description of project one.",
      link: "#",
      image: "https://via.placeholder.com/300",
    },
    {
      title: "Project Two",
      description: "Description of project two.",
      link: "#",
      image: "https://via.placeholder.com/300",
    },
  ];

  return (
    <div className='text-white'>
      <h1 className='text-4xl font-bold'>My Projects</h1>
      <div className='mt-4 grid grid-cols-1 md:grid-cols-2 gap-4'>
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            link={project.link}
            image={project.image}
          />
        ))}
      </div>
    </div>
  );
}
