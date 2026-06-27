# Home "Control Surface" Pilot — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign the home page into a "Control Surface" operator-console layout (Preserve mode) that removes the eyebrow overuse and one-panel monotony identified in the audit.

**Architecture:** All changes are presentational and live in one client component (`Hero-Section.tsx`) plus one CSS utility (`globals.css`). No new dependencies, no data-model changes, no routing changes. Verification is rendered output (typecheck + Playwright screenshots at 1440 and 390 + console-error check), not unit tests, because the work is pure UI.

**Tech Stack:** Next.js 14 (App Router), React 18, Tailwind CSS v3, framer-motion, Sora + JetBrains Mono.

## Global Constraints

- Single accent color: **emerald** only. No cyan, no second accent on home. (saturation < 80%)
- Fonts unchanged: Sora (`font-sans`) for display, JetBrains Mono (`font-mono`).
- **Zero em-dashes (`—`/`–`)** in any visible string. Use `-` or restructure.
- **No invented numeric stats.** Numbers must come from real data in `app/data/*`, else omit.
- All decorative/perpetual motion must be disabled under `prefers-reduced-motion` (handled by the existing `globals.css` block which disables `.animate-scanline`, `.animate-breathe`, `.animate-ping`, `.animate-marquee`).
- Mobile (`< 768px`) must collapse to single column, `w-full`, no horizontal scroll.
- Dark theme page-wide; no theme inversion.
- No new npm dependencies.
- Dev server runs on `http://localhost:3002` (3000/3001 in use). Start with `npm run dev` from `portfolio/`.
- Work happens in the `portfolio/` repo on branch `redesign/home-control-surface`.

---

### Task 1: Hero left column — single status line, trimmed subtext, two CTAs, mail in social row

**Files:**
- Modify: `portfolio/app/_components/Hero-Section.tsx` (the left `motion.div`, lines ~128-188)

**Interfaces:**
- Consumes: `profile.availability`, `profile.location`, `profile.timezone`, `profile.summary`, `profile.email`, `profile.resumePath` (all exist in `app/data/profile.ts`); `socials` array; `Mail`, `MoveRight` icons (already imported).
- Produces: no exported symbols; structural change only.

- [ ] **Step 1: Replace the status block (eyebrow badge + separate location) with one mono status line**

Find the existing block (currently the `mb-8 flex flex-wrap ... text-gray-500` div containing the availability badge and the `{profile.location} / {profile.timezone}` span) and replace it with:

```tsx
<div className='mb-8 flex flex-wrap items-center gap-x-3 gap-y-1.5 font-mono text-[11px] uppercase tracking-widest text-gray-500'>
  <span className='inline-flex items-center gap-2 text-emerald-300/90'>
    <span className='relative flex h-2 w-2'>
      <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/60' />
      <span className='relative inline-flex h-2 w-2 rounded-full bg-emerald-400' />
    </span>
    {profile.availability}
  </span>
  <span aria-hidden className='text-gray-700'>·</span>
  <span>
    {profile.location} / {profile.timezone}
  </span>
</div>
```

- [ ] **Step 2: Swap the hero subtext from `profile.intro` to `profile.summary`**

The hero body paragraph currently renders `{profile.intro}` (~28 words). Change it to render `{profile.summary}` (the purpose-built 12-word one-liner) to satisfy the ≤20-word hero-subtext rule without mutating the shared `intro` field (which is mirrored into the backend RAG store). Update the paragraph:

```tsx
<p className='mt-7 max-w-[62ch] text-base leading-relaxed text-gray-400 sm:text-lg'>
  {profile.summary}
</p>
```

- [ ] **Step 3: Remove the third "Email" text CTA**

Delete the entire `<Link href={`mailto:${profile.email}`} ...>` element inside the CTA row (the one wrapping `<Mail size={15} /> Email`). Leave the `View selected work` Link and the `ResumeButton` as the only two CTAs.

- [ ] **Step 4: Add a mail icon to the social row**

In the socials `motion`/`div` row, after the `.map` over `socials`, add a mail link so email is still reachable:

```tsx
<Link
  href={`mailto:${profile.email}`}
  aria-label='Email'
  className='transition-colors duration-200 hover:text-emerald-400'>
  <Mail size={17} />
</Link>
```

- [ ] **Step 5: Typecheck**

Run: `cd portfolio && npx tsc --noEmit`
Expected: no errors. (If `MoveRight` becomes unused, it is still used by the primary CTA; `Mail` is now used in the social row.)

- [ ] **Step 6: Verify rendered output (desktop + mobile)**

Ensure dev server is running (`npm run dev`). Using Playwright MCP: resize 1440x900, navigate to `http://localhost:3002/`, wait ~1s for blur-in, screenshot `verify-t1-desktop.png`; resize 390x844, reload, screenshot `verify-t1-mobile.png`.
Expected: one status line (dot + availability + `·` + location/timezone), 12-word subtext, exactly two CTAs (`View selected work`, `Resume`), four social icons (GitHub, LinkedIn, Twitter, mail). No console errors.

- [ ] **Step 7: Commit**

```bash
cd portfolio
git add app/_components/Hero-Section.tsx
git commit -m "feat(home): single status line, tightened hero stack, mail in social row

Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>"
```

---

### Task 2: Telemetry panel — RunaxAI heading + live pill, scanline sweep on the product shot

**Files:**
- Modify: `portfolio/app/_components/Hero-Section.tsx` (the `ProjectWindow` component + the `aside` panel header, lines ~34-67 and ~191-208)
- Modify: `portfolio/app/globals.css` (no new keyframe needed; reuse `animate-scanline`)

**Interfaces:**
- Consumes: `flagship.title`, `flagship.status` (`"Live"` for runaxai, from `app/data/projects.ts`).
- Produces: scanline overlay markup inside `ProjectWindow`.

- [ ] **Step 1: Replace the panel header eyebrow with heading + live pill**

In the `aside`, replace the header block (the `<div className='flex items-end justify-between ...'>` containing the `Featured project` `<p>`, the `RunaxAI` `<h2>`, and the `more work` link) with:

```tsx
<div className='flex items-center justify-between gap-4 border-b border-white/[0.06] pb-4'>
  <div className='flex items-center gap-3'>
    <h2 className='text-xl font-semibold tracking-tight text-white'>
      {flagship.title}
    </h2>
    {flagship.status === "Live" && (
      <span className='inline-flex items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-emerald-300/90'>
        <span className='h-1.5 w-1.5 rounded-full bg-emerald-400 animate-breathe' />
        {flagship.status}
      </span>
    )}
  </div>
  <Link
    href='/projects'
    className='shrink-0 font-mono text-[11px] uppercase tracking-widest text-gray-500 transition-colors duration-200 hover:text-emerald-400'>
    more work
  </Link>
</div>
```

Note: `{flagship.status}` renders "Live" (real data); no hardcoded label, no invented metric.

- [ ] **Step 2: Add the scanline sweep overlay inside `ProjectWindow`'s image area**

In `ProjectWindow`, the image container is `<div className='relative aspect-[16/10] bg-[#0c0d10]'>` wrapping the `<Image .../>`. Add an overlay element as a sibling immediately after the `<Image />`:

```tsx
<div
  aria-hidden
  className='pointer-events-none absolute inset-x-0 top-0 h-1/3 animate-scanline bg-gradient-to-b from-transparent via-emerald-400/[0.07] to-transparent'
/>
```

The `animate-scanline` utility (defined in `tailwind.config.ts`) translates the band from `-100%` to `400%`; the outer `ProjectWindow` card already has `overflow-hidden`, so the band is clipped. Because the class is `animate-scanline`, the existing `prefers-reduced-motion` block in `globals.css` disables it automatically. No `globals.css` edit is required — confirm in Step 3.

- [ ] **Step 3: Confirm reduced-motion already covers it**

Run: `grep -n "animate-scanline" portfolio/app/globals.css`
Expected: it appears inside the `@media (prefers-reduced-motion: reduce)` block. If for any reason it is absent, add `.animate-scanline,` to that block's selector list. (As of this plan it is present, so no change expected.)

- [ ] **Step 4: Typecheck**

Run: `cd portfolio && npx tsc --noEmit`
Expected: no errors.

- [ ] **Step 5: Verify rendered output**

Dev server running. Playwright: 1440x900, navigate to `/`, wait ~1s, screenshot `verify-t2-desktop.png`.
Expected: panel header shows `RunaxAI` with an emerald `Live` pill (breathing dot), no "Featured project" eyebrow; a faint emerald band sweeps vertically over the product screenshot. `more work` link still present. No console errors.

- [ ] **Step 6: Verify reduced-motion**

Playwright: emulate reduced motion (`browser_run_code_unsafe` or launch with reduced-motion), reload `/`, confirm the band is static (no animation). If the MCP cannot emulate it, manually confirm the selector is in the reduced-motion block (Step 3) and note it.

- [ ] **Step 7: Commit**

```bash
cd portfolio
git add app/_components/Hero-Section.tsx
git commit -m "feat(home): telemetry panel with live pill and scanline sweep

Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>"
```

---

### Task 3: Capability manifest — hairline-divided rows/columns replacing the 5-card strip

**Files:**
- Modify: `portfolio/app/_components/Hero-Section.tsx` (the `CapabilityStrip` function, lines ~87-119)

**Interfaces:**
- Consumes: `capabilityClusters` (5 entries, from `app/data/profile.ts`), each with `id`, `title`, `summary`, `tags`.
- Produces: no exported symbols.

- [ ] **Step 1: Rewrite `CapabilityStrip` as a flex manifest with hairline dividers**

Replace the entire `CapabilityStrip` function body's returned JSX with:

```tsx
function CapabilityStrip() {
  return (
    <motion.div
      {...fade(0.22)}
      className='flex flex-col divide-y divide-white/[0.06] overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.015] xl:flex-row xl:divide-x xl:divide-y-0'>
      {capabilityClusters.map((cluster) => (
        <Link
          key={cluster.id}
          href='/skills'
          className='group flex-1 p-5 transition-colors duration-200 hover:bg-white/[0.025]'>
          <h3 className='text-sm font-semibold text-gray-100'>
            {cluster.title}
          </h3>
          <p className='mt-2 line-clamp-3 text-[13px] leading-relaxed text-gray-500'>
            {cluster.summary}
          </p>
          <div className='mt-4 flex flex-wrap gap-1.5'>
            {cluster.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className='font-mono text-[10px] text-gray-600 transition-colors duration-200 group-hover:text-gray-500'>
                {tag}
              </span>
            ))}
          </div>
        </Link>
      ))}
    </motion.div>
  );
}
```

Key changes vs. the old version: the per-entry mono eyebrow id (`cluster.id.replaceAll("-", " /")`) is removed (the title is the label); the layout is flex (clean dividers, no grid-wrap empty cell); `text-gray-650` (a non-existent Tailwind shade that silently fell back) is corrected to `text-gray-600`. On `< xl` it is a vertical stack with `divide-y` hairlines; on `xl` it is 5 equal `flex-1` columns with `divide-x` hairlines — exactly 5 cells, no gap.

- [ ] **Step 2: Typecheck**

Run: `cd portfolio && npx tsc --noEmit`
Expected: no errors.

- [ ] **Step 3: Verify rendered output (desktop + mobile)**

Dev server running. Playwright: 1440x900, navigate `/`, screenshot `verify-t3-desktop.png`; 390x844, reload, screenshot `verify-t3-mobile.png`.
Expected desktop: one bordered container, 5 equal columns separated by thin vertical hairlines, each = title + summary + ≤3 mono tags, **no** `AI /AGENTS /RAG`-style eyebrow ids, no empty cell. Expected mobile: single column, entries separated by horizontal hairlines, no horizontal scroll. No console errors.

- [ ] **Step 4: Commit**

```bash
cd portfolio
git add app/_components/Hero-Section.tsx
git commit -m "feat(home): hairline capability manifest, drop per-entry eyebrows

Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>"
```

---

### Task 4: Whole-page pre-flight verification

**Files:**
- None modified (verification + optional screenshot artifacts only)

**Interfaces:**
- Consumes: the rendered home page from Tasks 1-3.
- Produces: a short pass/fail report against the spec's pre-flight checklist.

- [ ] **Step 1: Full-page capture, desktop**

Dev server running. Playwright: 1440x900, navigate `/`, wait ~1s, full-page screenshot `verify-final-desktop.png`. Read it.

- [ ] **Step 2: Full-page capture, mobile**

Playwright: 390x844, reload `/`, full-page screenshot `verify-final-mobile.png`. Read it.

- [ ] **Step 3: Run the targeted pre-flight checklist**

Confirm each, fixing inline if any fails:
- Eyebrow-class labels on home reduced to ~1 (the hero status line). `more work` is a real link, not an eyebrow.
- Exactly two hero CTAs; no duplicate contact intent (email is an icon).
- Hero subtext ≤ 20 words; hero fits 1440x900 viewport without scrolling to reach CTAs.
- Single accent (emerald); no cyan anywhere on home.
- Capability manifest: 5 cells on xl, no empty cell; single column on mobile.
- Scanline + breathe present at default; disabled under reduced-motion.
- No invented numeric stats; `Live` pill is real data.
- No em-dashes in any visible string.
- No new console errors (compare against the audit baseline which had only the unrelated `localhost:8000/reset` 404 + logo aspect-ratio warning).

- [ ] **Step 4: Report**

Summarize pass/fail per checklist item with the two final screenshots. If all pass, the pilot is complete and ready for the user to approve propagation to the other pages.

- [ ] **Step 5: Commit any inline fixes (if needed)**

```bash
cd portfolio
git add -A
git commit -m "fix(home): pre-flight adjustments

Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>"
```

---

## Self-Review

**Spec coverage:**
- Hero status line / intro trim / 2 CTAs / mail demotion → Task 1. ✓
- Telemetry panel: RunaxAI + live pill, scanline, no invented metrics → Task 2. ✓
- Capability manifest (hairline, no eyebrow ids, no empty cell) → Task 3. ✓
- Chrome/rhythm result (eyebrow count ~1, emerald-only) → verified in Task 4. ✓
- Out-of-scope items (nav/footer/other pages/dead code/contact labels/cyan) → untouched by all tasks. ✓
- Mobile collapse, reduced-motion, success criteria → Tasks 1-4 verification steps. ✓

**Placeholder scan:** No TBD/TODO; every code step shows complete JSX/CSS; commands have expected output. ✓

**Type/name consistency:** `flagship.title`/`flagship.status`, `profile.summary`/`availability`/`location`/`timezone`/`email`, `capabilityClusters[].{id,title,summary,tags}` all match the data files read during the audit. `animate-scanline`/`animate-breathe` match `tailwind.config.ts`. ✓
