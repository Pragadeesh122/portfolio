const FooterSkeleton = () => {
  return (
    <footer className='p-4 mt-8 w-full'>
      <div className='flex items-center justify-center gap-20 animate-pulse'>
        <div className='flex gap-6'>
          <div className='w-[30px] h-[30px] bg-gray-300 rounded-full'></div>
          <div className='w-[30px] h-[30px] bg-gray-300 rounded-full'></div>
          <div className='w-[30px] h-[30px] bg-gray-300 rounded-full'></div>
        </div>
        <div className='w-72 h-6 bg-gray-300 rounded'></div>
      </div>
    </footer>
  );
};

export default FooterSkeleton;
