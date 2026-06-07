"use client";

import {memo} from "react";

const services = [
  {name: "api.runax", note: "FastAPI", state: "healthy"},
  {name: "worker.arq", note: "ARQ", state: "healthy"},
  {name: "postgres", note: "primary", state: "healthy"},
  {name: "redis", note: "cache", state: "healthy"},
  {name: "pinecone", note: "vectors", state: "healthy"},
  {name: "grafana", note: "observability", state: "healthy"},
] as const;

const metrics = [
  {label: "retrieval p95", value: "182ms"},
  {label: "rerank", value: "cross-enc"},
  {label: "recall@5", value: "0.94"},
  {label: "uptime", value: "99.92%"},
] as const;

/**
 * Crafted "cluster status" console standing in for a screenshot of RunaxAI.
 * Pure CSS motion (scanline + breathing status dot); no render-loop state.
 */
function RunaxPanelBase() {
  return (
    <div
      className='relative h-full w-full overflow-hidden bg-[#0a0a0c]'
      role='img'
      aria-label='RunaxAI cluster status console showing healthy services and retrieval metrics'>
      <div className='absolute inset-0 bg-blueprint opacity-40' />

      {/* Slow scan sweep */}
      <div className='pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-emerald-500/[0.07] to-transparent animate-scanline' />

      <div className='relative flex h-full flex-col p-5 sm:p-6 font-mono text-[11px] leading-relaxed'>
        {/* Header */}
        <div className='flex items-center justify-between border-b border-white/[0.06] pb-3'>
          <span className='text-gray-400'>runaxai / k3s</span>
          <span className='flex items-center gap-1.5 text-emerald-400'>
            <span className='relative flex h-1.5 w-1.5'>
              <span className='absolute inline-flex h-full w-full rounded-full bg-emerald-500 animate-breathe' />
            </span>
            cluster online
          </span>
        </div>

        {/* Services */}
        <div className='mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5'>
          {services.map((s) => (
            <div key={s.name} className='flex items-center justify-between gap-2'>
              <span className='flex items-center gap-2 truncate text-gray-300'>
                <span className='h-1 w-1 flex-shrink-0 rounded-full bg-emerald-400' />
                {s.name}
              </span>
              <span className='flex-shrink-0 text-gray-600'>{s.note}</span>
            </div>
          ))}
        </div>

        {/* Metrics readout */}
        <div className='mt-auto grid grid-cols-2 gap-px overflow-hidden rounded-md border border-white/[0.06] bg-white/[0.02]'>
          {metrics.map((m) => (
            <div key={m.label} className='bg-[#0a0a0c] px-3 py-2.5'>
              <div className='text-[10px] uppercase tracking-wider text-gray-600'>
                {m.label}
              </div>
              <div className='mt-0.5 text-sm text-emerald-300'>{m.value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const RunaxPanel = memo(RunaxPanelBase);
export default RunaxPanel;
