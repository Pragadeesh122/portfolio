import Image from "next/image";
import Link from "next/link";
import mainPage from "@/public/mainPage.png";

export default function Page() {
  return (
    <div className='flex flex-col-reverse items-center md:flex-row sm:gap-20 p-4 mx-auto'>
      <div className='flex flex-col gap-6 xs:gap-8 sm:gap-12 sm:items-start max-w-2xl'>
        <div className='text-lg'>
          <h1 className='mb-4 font-bold text-4xl sm:text-5xl md:text-6xl text-gray-800 dark:text-white'>
            Hello all, I&apos;m{" "}
            <span className='text-blue-600 dark:text-blue-400'>Pragadeesh</span>
          </h1>
          <p className='text-gray-600 dark:text-gray-300 text-lg sm:text-xl sm:leading-loose'>
            I specialize in full-stack web development with expertise in
            JavaScript, React, TailwindCSS, and Next.js. Focused on creating
            responsive, user-friendly applications, I leverage modern frameworks
            and libraries to deliver high-performance solutions.
          </p>
        </div>
        <div className='flex gap-4 xs:gap-6 sm:gap-8'>
          <Link
            href='https://drive.google.com/file/d/1VOzWOWeBXT6nW1QYXG9oyLQCBs1A67DI/view?usp=sharing'
            target='_blank'>
            <button className='px-6 py-3 text-lg font-semibold rounded-md bg-gray-800 text-white hover:bg-gray-700 transition duration-300 shadow-md'>
              View Resume
            </button>
          </Link>
          <Link href='/contact'>
            <button className='px-6 py-3 text-lg font-semibold rounded-md bg-blue-500 text-white hover:bg-blue-600 transition duration-300 shadow-md'>
              Contact Me
            </button>
          </Link>
        </div>
      </div>
      <div className='w-full md:w-1/2 max-w-lg'>
        <Image
          className='rounded-lg '
          src={mainPage}
          placeholder='blur'
          alt='Developer working'
          priority
        />
      </div>
    </div>
  );
}
