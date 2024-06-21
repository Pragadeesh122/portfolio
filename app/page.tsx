import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Home",
  description:
    "Welcome to my portfolio. A showcase of my work and skills as a modern web developer.",
};

export default function Page() {
  return (
    <div className='flex flex-row gap-20 p-4 mx-auto'>
      <div className='flex flex-col gap-12'>
        <div className='text-lg max-w-xl'>
          <h1 className='mb-4 font-bold text-4xl text-gray-800'>
            Hello all, I&apos;m Pragadeesh
          </h1>
          <p className='text-gray-500 text-lg  leading-loose  font-semibold'>
            I specialize in full-stack web development with expertise in
            JavaScript, React, TailwindCSS, and Next.js. Focused on creating
            responsive, user-friendly applications, I leverage modern frameworks
            and libraries to deliver high-performance solutions.
          </p>
        </div>
        <div className='flex gap-8'>
          <Link href='/resume.pdf' passHref>
            <button className='px-6 py-3 border-2 border-slate-700 bg-slate-700 text-white rounded-lg transition duration-300'>
              Download Resume
            </button>
          </Link>
          <Link href='/contact' passHref>
            <button className='px-6 py-3 border-2 border-red-500 bg-red-500 text-white rounded-lg transition duration-300'>
              Contact Me
            </button>
          </Link>
        </div>
      </div>
      <div>
        <Image
          className='rounded-lg object-cover shadow-lg'
          src='/pic5.webp'
          width={500}
          height={300}
          alt='homeLogo'
        />
      </div>
    </div>
  );
}
