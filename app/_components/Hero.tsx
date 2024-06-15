export default function Hero({children}: {children: React.ReactNode}) {
  return (
    <div className='flex flex-col min-h-screen light-mode-gradient dark:bg-primary-first dark:bg-none'>
      {/* <video
        autoPlay
        muted
        loop
        className='rotate-180 absolute inset-0 object-cover object-center   '>
        {" "}
        <source src='/blackhole.webm' type='video/webm' />
      </video> */}
      {children}
    </div>
  );
}
