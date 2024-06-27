import Image from "next/image";
import Link from "next/link";
import mainPage from "@/public/mainPage.png";
import mainPage_1 from "@/public/mainPage-1.png";

export const metadata = {
  title: "Home",
  description:
    "Welcome to my portfolio. A showcase of my work and skills as a modern web developer.",
};

export default function Page() {
  return (
    <div className='flex flex-col-reverse items-center md:flex-row  sm:gap-20 p-4 mx-auto'>
      <div className='flex flex-col gap-6 xs:gap-8  sm:gap-12 sm:items-start'>
        <div className='text-lg max-w-xl'>
          <h1 className='mb-4 font-bold text-xl text-gray-800 dark:text-gray-200  sm:text-xl md:text-2xl lg:text-4xl'>
            Hello all, I&apos;m Pragadeesh
          </h1>
          <p className='text-gray-500  text-md sm:text-md md:text-lg  leading-loose  font-semibold'>
            I specialize in full-stack web development with expertise in
            JavaScript, React, TailwindCSS, and Next.js. Focused on creating
            responsive, user-friendly applications, I leverage modern frameworks
            and libraries to deliver high-performance solutions.
          </p>
        </div>
        <div className='flex gap-4 xs:gap-6 sm:gap-8 '>
          <Link
            href='https://drive.google.com/file/d/1KjEyJSIe6OV2jesGv9hwCH2H60MckcVW/view?usp=sharing'
            target='_blank'>
            <div className='overflow-hidden rounded-lg'>
              <button className=' px-4 py-2 xs:px-6 xs:py-3 text-md xs:text-lg border-2 border-slate-700 bg-slate-700 text-white rounded-lg hover:scale-110 transition duration-300'>
                View Resume
              </button>
            </div>
          </Link>
          <Link href='/contact'>
            <div className='overflow-hidden rounded-lg'>
              <button className='px-4 py-2 xs:px-6 xs:py-3 text-md xs:text-lg border-2 border-red-500 bg-red-500 dark:border-green-400 dark:bg-green-400 text-white rounded-lg hover:scale-110 transition duration-300'>
                Contact Me
              </button>
            </div>
          </Link>
        </div>
      </div>
      <div>
        <Image
          className='rounded-lg object-cover '
          src={mainPage}
          placeholder='blur'
          width={550}
          height={300}
          alt='homeLogo'
        />
      </div>
    </div>
  );
}
