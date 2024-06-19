import Link from "next/link";
import ThemeToggle from "./ThemeToggle"; // Import the ThemeToggle component
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className='p-6 mt-6'>
      <div className='container mx-auto flex justify-between  items-center'>
        <div className='flex items-center gap-8'>
          <Link href='/'>
            <span>
              <Image
                className='rounded-full mr-6'
                src='/logo.png'
                alt='logo'
                width={48}
                height={48}></Image>
            </span>
          </Link>
          <Link href='/about'>
            <span>About</span>
          </Link>
          <Link href='/skills'>
            <span>Skills</span>
          </Link>
          <Link href='/projects'>
            <span>Projects</span>
          </Link>
          <Link href='/contact'>
            <span>Contact</span>
          </Link>
        </div>
        <div className='flex gap-8 text-xl'>
          <span className='ml-12'>
            <ThemeToggle />
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
