type ExperienceCardType = {
  company: string;
  role: string;
  period: string;
  description: string;
};

const ExperienceCard = ({
  company,
  role,
  period,
  description,
}: ExperienceCardType) => {
  return (
    <div className='border p-4 rounded-lg'>
      <h3 className='text-xl font-bold'>{role}</h3>
      <p className='text-gray-700'>{company}</p>
      <p className='text-gray-600 italic'>{period}</p>
      <p className='mt-2'>{description}</p>
    </div>
  );
};

export default ExperienceCard;
