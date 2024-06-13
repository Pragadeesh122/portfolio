import Link from "next/link";

const Navbar = () => {
  return (
    <nav className='bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 shadow-lg'>
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
