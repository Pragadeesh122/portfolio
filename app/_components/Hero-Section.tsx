import mainPage from "@/public/mainPage.png";
import HeroAnimations from "./HeroAnimations";
import HeroImageAnimation from "./HeroImageAnimation";

export default function HeroSection() {
  // Content data that could potentially come from a CMS or API in the future
  const heroData = {
    name: "Pragadeesh",
    title: "Full Stack Web Developer",
    description:
      "I specialize in building responsive, user-friendly applications with modern JavaScript frameworks. My expertise includes React, TailwindCSS, Next.js, and Node.js. I'm passionate about creating high-performance solutions that deliver exceptional user experiences.",
  };

  return (
    <>
      <div className='w-full grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 items-center py-8 md:py-16'>
        <div className='md:col-span-3 order-2 md:order-1 px-4 md:px-8'>
          <HeroAnimations
            name={heroData.name}
            title={heroData.title}
            description={heroData.description}
          />
        </div>

        <div className='md:col-span-2 order-1 md:order-2 flex justify-center'>
          <HeroImageAnimation imageSrc={mainPage} />
        </div>
      </div>

      {/* Decorative elements */}
      <div className='absolute top-32 -left-16 w-32 h-32 bg-blue-400/10 dark:bg-blue-400/5 rounded-full filter blur-lg'></div>
      <div className='absolute top-[40%] right-16 w-24 h-24 bg-purple-400/10 dark:bg-purple-400/5 rounded-full filter blur-lg'></div>
      <div className='absolute bottom-20 left-1/3 w-32 h-32 bg-teal-400/10 dark:bg-teal-400/5 rounded-full filter blur-lg'></div>

      {/* Decorative shapes */}
      <div className='absolute top-[20%] right-[15%] w-4 h-4 bg-blue-500/30 dark:bg-blue-500/20 rounded-full animate-pulse'></div>
      <div
        className='absolute top-[40%] left-[10%] w-3 h-3 bg-purple-500/30 dark:bg-purple-500/20 rounded-full animate-pulse'
        style={{animationDelay: "1s"}}></div>
      <div
        className='absolute bottom-[30%] right-[25%] w-2 h-2 bg-teal-500/30 dark:bg-teal-500/20 rounded-full animate-pulse'
        style={{animationDelay: "2s"}}></div>
    </>
  );
}
