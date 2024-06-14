import Link from "next/link";
import ThemeToggle from "./ThemeToggle"; // Import the ThemeToggle component

const Navbar = () => {
  return (
    <nav className='p-6'>
      <div className='container mx-auto flex justify-between items-center'>
        <Link href='/'>
          <span className='text-2xl font-bold'>My Portfolio</span>
        </Link>
        <div className='flex gap-8 text-xl'>
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
          <span className='ml-12'>
            <ThemeToggle />
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
