import Link from "next/link";

export default function Page() {
  const metadata = {
    title: "Home",
    description:
      "Welcome to my portfolio. A showcase of my work and skills as a modern web developer.",
  };

  return (
    <div className='p-4'>
      <div className='text-center '>
        <h1 className='text-5xl font-bold'>Welcome to My Portfolio</h1>
        <p className='mt-4 text-lg'>
          A showcase of my work and skills as a modern web developer.
        </p>
        <div className='mt-8 space-x-4'>
          <Link href='/projects'>
            <span className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition'>
              View Projects
            </span>
          </Link>
          <Link href='/contact'>
            <span className='bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition'>
              Contact Me
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
