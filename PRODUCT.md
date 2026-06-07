# PRODUCT.md — Pragadeesh VS, Portfolio

> Register: **brand** (design IS the product). This is a personal portfolio; a
> visitor's impression is the deliverable.

## Who / What

Pragadeesh VS — **AI Systems & Full-Stack Engineer**. Builds production-grade AI
agents, RAG platforms, LLM observability, and cloud-native apps. Currently a
software engineer at Slower.ai; M.S. Computer Science, Indiana University.

The site exists to land one read fast: *this person ships real AI
infrastructure, not toy demos.* The previous version read like a conventional
full-stack portfolio with AI mentions bolted on. This version leads with systems
engineering and surfaces concrete, current work.

## Positioning (what to surface, in priority order)

1. Production RAG and AI agent infrastructure (hybrid RAG, HyDE, reranking,
   dense/sparse fusion, evals).
2. AI memory systems and memory research interest.
3. LLM observability and evaluation (Prometheus / Loki / Tempo / Grafana).
4. Cloud-native / self-hosted deployment (k3s, Helm, Cloudflare Tunnel,
   GitHub Actions, self-hosted runners).
5. Full-stack product engineering (FastAPI + Next.js platforms).
6. Data / ML / financial engineering pipelines.

## Flagship narrative

- **RunaxAI** (https://runaxai.com) is the flagship: a self-hosted AI
  management / RAG platform running on a k3s cluster on a Mac mini, exposed via
  Cloudflare Tunnel, deployed by a self-hosted runner through Helm/kubectl.
  Present it as advanced production infrastructure, never a side project.
- **Options Strategy Reference** is the second headline: financial-engineering /
  interactive-education project with a tested payoff engine, Black-Scholes
  pricing, and Greeks/probability overlays.
- Older work (Nalvar, Citro, Finance Tracker, EleganceHub, Wild Oasis,
  StyleSense AI) lives below the headliners as supporting range.

## Aesthetic direction

**Lane: engineering control-surface / observability console.** Reference points:
Vercel black, Grafana/observability dashboards, Linear precision. NOT the
editorial-magazine lane, NOT SaaS-cream, NOT generic AI-portfolio bento.

- **Canvas:** near-black `#09090b` (zinc-950). A faint hairline blueprint grid
  and two restrained emerald signal-glows carry depth. No purple, no neon.
- **Accent:** emerald `hsl(160 84% 39%)` — the existing brand color, kept and
  treated as a "healthy signal" indicator (status dots, active states, key
  links). One accent only; do not spread it thin.
- **Type:** `Sora` for display + body (geometric, technical), `JetBrains Mono`
  for telemetry/metadata/labels/tech tags. Hierarchy via weight + scale
  contrast, not size alone. No gradient text anywhere.
- **Surfaces:** data-panels with single hairline borders (`border-white/[0.06]`)
  over a subtly lighter zinc, not glassmorphism-by-default and not uniform
  3-up card grids. Cards only when elevation earns it.
- **Motion:** intentional blur-in entrances with stagger, slow telemetry/marquee
  loops, magnetic/hover precision. Every animation honors
  `prefers-reduced-motion`.

## Hard rules (this project)

- No emojis in UI, copy, or alt text.
- No gradient text (`background-clip: text`).
- No uniform 3-column icon+heading+text card grids.
- No tiny uppercase tracked eyebrow above *every* section (it's currently
  overused; reserve for deliberate moments).
- No skill percentage bars/dots — use capability clusters.
- No em dashes in UI copy; no marketing buzzwords (streamline, empower,
  supercharge, seamless, next-gen, cutting-edge).
- Tailwind v3 syntax only. Server Components by default; isolate motion behind
  `'use client'` leaf components.
- `min-h-[100dvh]` for full-height sections, never `h-screen`.
- Do not break contact, resume, nav, or the chat assistant.

## Structured data

`app/data/profile.ts` and `app/data/projects.ts` are the single source of truth
for positioning copy, capability clusters, and project records. The chatbot
backend (`portfolio_backend`) and its Pinecone index must be reindexed
separately to reflect content changes here — the frontend and the vector store
do not share state.
