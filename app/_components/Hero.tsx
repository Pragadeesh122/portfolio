export default function Hero({children}: {children: React.ReactNode}) {
  return (
    <div className='flex flex-col min-h-[100dvh] relative overflow-hidden'>
      {/* Near-black base */}
      <div className='absolute inset-0 bg-[#09090b]' />

      {/* Faint blueprint grid, masked so it fades out toward the edges */}
      <div
        className='absolute inset-0 bg-blueprint opacity-70'
        style={{
          maskImage:
            "radial-gradient(ellipse 90% 60% at 50% 0%, black, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 90% 60% at 50% 0%, black, transparent 80%)",
        }}
      />

      {/* Emerald signal glow, top */}
      <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.10),transparent_55%)]' />

      {/* Emerald signal glow, bottom-right */}
      <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(16,185,129,0.05),transparent_50%)]' />

      {/* Main content */}
      <div className='relative z-10 flex flex-col flex-1'>{children}</div>
    </div>
  );
}
