"use client";

export default function Hero({children}: {children: React.ReactNode}) {
  return (
    <div className='flex flex-col min-h-screen relative overflow-hidden'>
      {/* Near-black base */}
      <div className='absolute inset-0 bg-[#09090b]' />

      {/* Subtle emerald radial gradient at top */}
      <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.08),transparent_50%)]' />

      {/* Subtle emerald radial gradient at bottom-right */}
      <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(16,185,129,0.06),transparent_50%)]' />

      {/* Main content */}
      <div className='relative z-10 flex flex-col flex-1'>{children}</div>
    </div>
  );
}
