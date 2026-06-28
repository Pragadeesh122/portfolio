# Home Pilot Redesign — "Control Surface"

- **Date:** 2026-06-27
- **Status:** Approved (design); spec pending user review
- **Mode:** Redesign — Preserve (per design-taste-frontend v2, Section 11)
- **Scope:** Home page only (pilot). Establishes the design bar to propagate later.

## Design Read

Developer / AI-systems portfolio home for technical hiring managers, in a dark
control-surface / systems-telemetry language. Native Tailwind + Sora (display) +
JetBrains Mono, existing emerald/zinc tokens preserved. This is a *pilot*: one
page redesigned end-to-end so the user can approve the direction on real output
before it rolls to the rest of the site.

**Dials:** `DESIGN_VARIANCE 6` · `MOTION_INTENSITY 6` · `VISUAL_DENSITY 4–5`
(current site reads ~5/5/4; this is +1 variance, +1 motion — Preserve band).

## Why (Audit Basis)

The current home is competent but carries fixable AI tells (design-taste-frontend
Section 9 / Section 4.7):

1. **Eyebrow epidemic** — ~9 `UPPERCASE TRACKING` mono labels on one page
   (`FEATURED PROJECT`, `MORE WORK`, `AI /AGENTS /RAG` ×5, etc.), far over the
   `ceil(sections/3)` cap. This is the dominant tell.
2. **One-panel monotony** — `rounded-2xl border-white/[0.06] bg-white/[0.015]`
   reused for every container; no background or layout rhythm.
3. **Capability grid cell gap** — 5 clusters in a 3-col grid leaves a dangling
   empty cell (violates exact-cell-count).
4. **Hero stack overload** — eyebrow + location + name + role + intro + 3 CTAs +
   socials (> 4 text elements rule); intro is ~28 words (> 20-word subtext cap).
5. **Duplicate contact intent** — hero "Email" CTA duplicates nav "Contact".

## What Stays (Preserve)

- Emerald accent + zinc/near-black palette (single accent, locked).
- Sora display + JetBrains Mono. No font changes.
- Real product screenshots in mac-window frames.
- Capability *clusters* as the content model (not skill-percentage bars).
- Faint emerald radial glow + blueprint grid background.
- `framer-motion` blur-in entry; reduced-motion handling in `globals.css`.

## The Design

### Section 1 — Hero (asymmetric split → operator console)

**Left column:**
- **One mono status line** replacing the separate eyebrow + location:
  `● Open to AI systems & full-stack roles · Austin, TX / CST`.
  The live dot stays (availability is real semantic state → allowed dot, and is
  the page's one permitted eyebrow-class element). Uses the existing
  `animate-breathe`/ping treatment, reduced-motion gated.
- Name (`Pragadeesh VS`) and role line: unchanged styling (already strong).
- **Intro trimmed to ≤ 20 words**, ≤ 4 lines.
- **CTAs reduced to two:** primary `View selected work` + secondary `Resume`.
  The third "Email" text CTA is removed from the hero and represented by the
  mail icon in the social row → fixes Hero Stack Discipline + duplicate intent.
- Social icon row (GitHub, LinkedIn, Twitter) + mail icon.

**Right column — the telemetry panel:**
- Heading is **just `RunaxAI` + a real `[live]` status pill** (no "Featured
  project" eyebrow). The `more work` link stays (it is a real navigable link,
  not decoration → allowed).
- Product screenshot keeps the mac-window frame, gains a **subtle scanline
  sweep** via the existing `animate-scanline` keyframe: low opacity, absolutely
  positioned overlay, `pointer-events-none`, disabled under
  `prefers-reduced-motion` (already covered by the `globals.css` block).
  Motivation (per Section 5 "motion must be motivated"): signals a running,
  live system — reinforces the control-surface identity.
- Below the frame: real tech chips (existing `flagship.tech` slice) + the
  `Source / runaxai.com` link row.
- **No invented metrics.** Any numeric stat must come from real data; otherwise
  it is omitted (Section 4.9 fake-precise-numbers ban).

### Section 2 — Capability manifest (replaces the 5-card strip)

Replace five identical bordered cards with **one hairline-divided manifest**:

- A single bordered container.
- `xl`: 5 equal columns separated by `divide-x` vertical hairlines (fills exactly
  5 cells — no empty cell).
- `< md`: collapses to stacked rows separated by `divide-y` horizontal hairlines,
  `w-full`, `px-4`.
- Each entry: cluster **title** + one-line summary + 2–3 mono tags.
- **Drop the `AI /AGENTS /RAG` mono eyebrow id** per entry — the title is the
  label. Each entry still links to `/skills`.

This removes the per-card box monotony, the empty-cell gap, and 5 eyebrows at
once.

### Section 3 — Chrome & rhythm (result)

- Home eyebrow count drops from ~9 to **~1** (the hero status line) — under cap.
- Emerald remains the only accent (no cyan on home).
- Background treatment unchanged (subtle, on-brand).

## Components / Structure

- `app/page.tsx` — composition root wrapper unchanged (padding/container).
- `app/_components/Hero-Section.tsx` — client component (motion). Holds:
  - status line, name/role/intro, reduced CTA set, social+mail row;
  - `ProjectWindow` telemetry panel extended with the scanline overlay
    (CSS-only via `animate-scanline`, so no JS render cost);
  - `CapabilityStrip` refactored to the hairline-divided manifest layout.
- Scanline overlay is pure CSS (class-based) → no new `useState`/rAF, no perf
  regression; remains inside the existing client tree.

## Out of Scope (deferred to propagation phase)

- Navbar, Footer, ChatInterface, and all other routes.
- Deleting dead components `ProjectCard.tsx` / `SkillCard.tsx`.
- Contact-form placeholder-as-label fix and form contrast.
- Experience-page cyan second-accent leak.
- Orphaned `/about` route decision.

These are documented findings to be addressed only after the home bar is
approved, so the pilot stays small and reviewable.

## Pre-Flight Check (design-taste-frontend Section 14) — targeted

- [x] Brief inference declared.
- [x] Dials explicit and reasoned (6/6/4–5).
- [x] Redesign mode = Preserve; audit performed.
- [x] Zero em-dashes in shipped UI strings (copy self-audit at build).
- [x] One theme (dark) page-wide; one accent (emerald).
- [x] Hero fits viewport; ≤ 4 text elements; intro ≤ 20 words; 2 CTAs.
- [x] Eyebrow count ≤ `ceil(sections/3)` (target ~1).
- [x] No duplicate CTA intent (email demoted to icon).
- [x] Capability manifest has exact cell count (no empty cell).
- [x] Motion motivated (scanline = "live system"); reduced-motion gated.
- [x] Real images (existing product screenshots); no div-fakes; no fake numbers.
- [x] Mobile collapse explicit for the manifest (`divide-y`, `w-full`, `px-4`).

## Success Criteria

1. Home renders with the operator-console hero and hairline manifest at desktop
   (1440) and mobile (390) with no horizontal scroll or layout breakage.
2. Eyebrow-class labels on home reduced to ~1.
3. Scanline + breathe motion present at default, fully disabled under
   `prefers-reduced-motion`.
4. No new console errors; no invented numeric stats.
5. Visual coherence preserved with the (unchanged) other pages so propagation is
   straightforward.
