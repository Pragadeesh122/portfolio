const NavSkeleton = () => {
  return (
    <div className='flex items-center justify-between py-4 sm:py-5 px-4 sm:px-6 w-full'>
      {/* Logo skeleton with shadow */}
      <div className='flex items-center space-x-3'>
        <div className='w-[40px] h-[40px] bg-gray-800 rounded-full animate-pulse shadow-lg shadow-blue-900/10'></div>
        <div className='hidden sm:block w-32 h-6 bg-gradient-to-r from-gray-800 to-gray-700 rounded animate-pulse'></div>
      </div>

      {/* Navigation items skeleton - now with increased spacing and pill shape */}
      <div className='hidden sm:flex items-center space-x-6 ml-auto'>
        <div className='w-[70px] h-10 bg-gray-800 rounded-lg animate-pulse shadow-sm shadow-blue-900/5'></div>
        <div className='w-[80px] h-10 bg-gray-800 rounded-lg animate-pulse shadow-sm shadow-blue-900/5'></div>
        <div className='w-[100px] h-10 bg-gray-800 rounded-lg animate-pulse shadow-sm shadow-blue-900/5'></div>
        <div className='w-[70px] h-10 bg-gray-800 rounded-lg animate-pulse shadow-sm shadow-blue-900/5'></div>
      </div>

      {/* Mobile menu button skeleton with shadow */}
      <div className='block sm:hidden'>
        <div className='w-10 h-10 bg-gray-800 rounded-full animate-pulse shadow-md shadow-blue-900/10'></div>
      </div>
    </div>
  );
};

export default NavSkeleton;
