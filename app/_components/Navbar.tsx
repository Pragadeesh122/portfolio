import Link from "next/link";
import ThemeToggle from "./ThemeToggle"; // Import the ThemeToggle component
import Image from "next/image";
import {League_Spartan, Roboto_Slab} from "next/font/google";

const lg = League_Spartan({subsets: ["latin"]});
const rb = Roboto_Slab({subsets: ["latin"]});

const Navbar = () => {
  return (
    <nav className='p-6 mt-6 text-xl'>
      <div className='container mx-auto flex justify-between  items-center'>
        <div className={`${rb.className} flex items-center gap-16`}>
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
          {/* <Link href='/about'>
            <span>About</span>
          </Link> */}
          <Link className='nav_link_hover' href='/skills'>
            <span>Skills</span>
          </Link>
          <Link className='nav_link_hover' href='/projects'>
            <span>Projects</span>
          </Link>
          <Link className='nav_link_hover' href='/contact'>
            <span>Contact</span>
          </Link>
        </div>
        <div>
          <span className='ml-12 px-2 pt-3 pb-2 rounded-lg hover:bg-link_hover dark:hover:bg-slate-600'>
            <ThemeToggle />
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
