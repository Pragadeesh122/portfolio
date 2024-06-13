const Footer = () => {
  return (
    <footer className=' p-4 mt-8'>
      <div className='container mx-auto text-center'>
        &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
