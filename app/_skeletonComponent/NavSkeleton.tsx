const NavbarSkeleton = () => {
  return (
    <nav className='p-4 mt-2 md:text-md lg:text-lg font-semibold'>
      <div className='container mx-auto flex justify-between items-center'>
        <div className='w-[34px] h-[34px] bg-gray-300 dark:bg-gray-700 rounded-full animate-pulse'></div>
        <div className='hidden sm:flex items-center gap-16 px-16 py-4 rounded-3xl border-2 border-gray-300 dark:border-gray-700 shadow-md'>
          <div className='w-16 h-6 bg-gray-300 dark:bg-gray-700 rounded animate-pulse'></div>
          <div className='w-20 h-6 bg-gray-300 dark:bg-gray-700 rounded animate-pulse'></div>
          <div className='w-18 h-6 bg-gray-300 dark:bg-gray-700 rounded animate-pulse'></div>
        </div>
        <div className='flex gap-6 items-center'>
          <div className='w-8 h-8 bg-gray-300 dark:bg-gray-700 rounded-lg animate-pulse'></div>
          <div className='block sm:hidden w-6 h-6 bg-gray-300 dark:bg-gray-700 rounded animate-pulse'></div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarSkeleton;
