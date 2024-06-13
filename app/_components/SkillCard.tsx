type SkillCardType = {
  skill: string;
  level: string;
  icon: string;
};

const SkillCard = ({skill, level, icon}: SkillCardType) => {
  return (
    <div className='border p-4 rounded-lg flex items-center space-x-4'>
      <img src={icon} alt={skill} className='h-12 w-12' />
      <div>
        <h3 className='text-xl font-bold'>{skill}</h3>
        <p className='text-gray-700'>{level}</p>
      </div>
    </div>
  );
};

export default SkillCard;
