import Image, {StaticImageData} from "next/image";

type SkillComponentProps = {
  src: StaticImageData;
  alt: string;
  skill: string;
};

export default function SkillComponent({src, alt, skill}: SkillComponentProps) {
  return (
    <div className='flex flex-col items-center justify-center space-y-2'>
      <div className='flex h-20 w-20 items-center justify-center rounded-full bg-muted dark:bg-background_1-200 shadow-md'>
        <div className='h-10 w-10 text-primary relative'>
          <Image src={src} alt={alt} fill></Image>
        </div>
      </div>
      <p className='text-sm font-medium'>{skill}</p>
    </div>
  );
}
