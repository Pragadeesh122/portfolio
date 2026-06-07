/**
 * Crafted long-straddle payoff diagram standing in for a screenshot of the
 * Options Strategy Reference. Static SVG (no motion needed); RSC-safe.
 */
export default function PayoffPanel() {
  return (
    <div
      className='relative h-full w-full overflow-hidden bg-[#0a0a0c]'
      role='img'
      aria-label='Long straddle payoff diagram: V-shaped profit and loss curve with two breakeven points and capped maximum loss at the strike'>
      <div className='absolute inset-0 bg-blueprint opacity-40' />

      <svg
        viewBox='0 0 320 200'
        preserveAspectRatio='xMidYMid meet'
        className='relative h-full w-full p-4'>
        <defs>
          <linearGradient id='payoff-fill' x1='0' y1='0' x2='0' y2='1'>
            <stop offset='0%' stopColor='rgb(16,185,129)' stopOpacity='0.22' />
            <stop offset='100%' stopColor='rgb(16,185,129)' stopOpacity='0' />
          </linearGradient>
        </defs>

        {/* Profit area under the V, above the zero line */}
        <path
          d='M10 30 L110 120 L210 120 L310 30 L310 120 L10 120 Z'
          fill='url(#payoff-fill)'
        />

        {/* Zero P/L baseline */}
        <line
          x1='10'
          y1='120'
          x2='310'
          y2='120'
          stroke='rgba(255,255,255,0.18)'
          strokeWidth='1'
          strokeDasharray='3 4'
        />

        {/* Strike marker */}
        <line
          x1='160'
          y1='20'
          x2='160'
          y2='180'
          stroke='rgba(255,255,255,0.08)'
          strokeWidth='1'
        />

        {/* Payoff curve */}
        <polyline
          points='10,30 160,165 310,30'
          fill='none'
          stroke='rgb(52,211,153)'
          strokeWidth='2'
          strokeLinejoin='round'
          strokeLinecap='round'
        />

        {/* Breakeven points */}
        <circle cx='110' cy='120' r='3' fill='rgb(52,211,153)' />
        <circle cx='210' cy='120' r='3' fill='rgb(52,211,153)' />
        {/* Max-loss vertex */}
        <circle cx='160' cy='165' r='3' fill='rgb(248,113,113)' />

        {/* Labels */}
        <text x='160' y='14' textAnchor='middle' className='fill-gray-500' fontSize='9' fontFamily='var(--font-jetbrains), monospace'>
          K
        </text>
        <text x='110' y='136' textAnchor='middle' className='fill-gray-500' fontSize='8' fontFamily='var(--font-jetbrains), monospace'>
          BE-
        </text>
        <text x='210' y='136' textAnchor='middle' className='fill-gray-500' fontSize='8' fontFamily='var(--font-jetbrains), monospace'>
          BE+
        </text>
        <text x='160' y='180' textAnchor='middle' className='fill-red-400/80' fontSize='8' fontFamily='var(--font-jetbrains), monospace'>
          max loss
        </text>
      </svg>

      {/* Caption */}
      <div className='pointer-events-none absolute left-4 top-3 font-mono text-[11px] text-gray-400'>
        long straddle
      </div>
      <div className='pointer-events-none absolute right-4 top-3 font-mono text-[10px] text-emerald-400/80'>
        P/L
      </div>
    </div>
  );
}
