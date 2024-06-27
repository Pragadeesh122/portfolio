export default function Hero({children}: {children: React.ReactNode}) {
  return (
    <div className='flex flex-col min-h-screen light-mode-gradient dark:bg-black dark:bg-none'>
      {children}
    </div>
  );
}
