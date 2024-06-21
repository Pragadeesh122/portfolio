import Link from "next/link";

type ProjectCardType = {
  title: string;
  description: string;
  link: string;
  image: string;
};

const ProjectCard = ({title, description, link, image}: ProjectCardType) => {
  return (
    <div className='border p-4 rounded-lg hover:shadow-lg transition-shadow duration-300'>
      <img src={image} alt={title} className='rounded-lg mb-4' />
      <h3 className='text-lg font-bold mb-2'>{title}</h3>
      <p className='text-gray-700 mb-4'>{description}</p>
      <Link href={link} className='text-blue-500 hover:underline'>
        View Project
      </Link>
    </div>
  );
};

export default ProjectCard;
