const NavbarSkeleton = () => {
  return (
    <nav className='p-4 mt-2 text-md'>
      <div className='container mx-auto flex justify-between items-center animate-pulse'>
        <div className='w-12 h-12 bg-gray-300 dark:bg-slate-800 rounded-full'></div>
        <div className='flex items-center gap-16 px-16 py-4 rounded-3xl border-2 border-gray-300 dark:border-slate-800 shadow-md bg-gray-200 dark:bg-slate-800'>
          <div className='w-14 h-6 bg-gray-300  dark:bg-slate-900 rounded'></div>
          <div className='w-14 h-6 bg-gray-300   dark:bg-slate-900 rounded'></div>
          <div className='w-14 h-6 bg-gray-300  dark:bg-slate-900 rounded'></div>
        </div>
        <div className='w-10 h-10 bg-gray-300 dark:bg-slate-900 rounded-full'></div>
      </div>
    </nav>
  );
};

export default NavbarSkeleton;
