# Control Surface Propagation Plan

> Applies the approved home "Control Surface" language (see
> `2026-06-27-home-control-surface-redesign-design.md`) to the remaining pages
> and clears deferred audit findings. Branch: `redesign/control-surface`.

**Goal:** Bring Experience, Projects, and Skills in line with the home bar and remove dead code, with no functional/IA changes.

## Global Constraints

- Single accent = emerald only (no cyan, no second accent anywhere).
- Fonts unchanged; no new deps; ZERO em-dashes; no invented numbers.
- Reduced-motion + mobile single-column collapse preserved.
- Verify per task: `npx tsc --noEmit`; final: `npm run build` + screenshots.

## Audit corrections (verified by reading source)

- Contact form is NOT placeholder-as-label; it uses an accessible floating-label
  pattern (`<label htmlFor>` + `placeholder=' '`). No change needed.
- About page is already on-system and clean; only orphaned from nav. Nav
  inclusion left to the user; no redesign.

---

### Task 1: Experience — emerald-only accent

**File:** `app/experience/page.tsx`

Replace the cyan education styling with neutral so emerald is the only accent;
work vs education is distinguished by icon (Briefcase vs GraduationCap) + label.

- Timeline dot: education branch `border-cyan-500/30 bg-cyan-500/10` →
  `border-white/10 bg-white/[0.04]`; education icon `text-cyan-400` →
  `text-gray-400`. Work branch unchanged (emerald).
- Type badge: education branch
  `text-cyan-400 bg-cyan-500/10 border-cyan-500/20` →
  `text-gray-400 bg-white/[0.04] border-white/10`. Work branch unchanged.

Verify: `npx tsc --noEmit`. Commit.

---

### Task 2: Projects — drop per-card tier eyebrows

**File:** `app/projects/page.tsx` (`FeatureCard`)

Remove the `{project.tier === "flagship" ? "Flagship" : "Featured"}` mono eyebrow
span. Keep the year/status span. Result header row:

```tsx
<div className='flex items-center gap-3'>
  <span className='font-mono text-[11px] text-gray-600'>
    {project.year}
    {project.status ? ` · ${project.status}` : ""}
  </span>
</div>
```

Keep the single `More projects` section header. Verify: `npx tsc --noEmit`. Commit.

---

### Task 3: Skills — cluster grid to hairline manifest

**File:** `app/skills/page.tsx`

Replace the `grid ... lg:grid-cols-3` cluster block (5 items leave an empty cell)
with a single hairline-divided container (full tags shown), echoing the home
manifest:

```tsx
<motion.div
  initial={{opacity: 0, filter: "blur(10px)"}}
  animate={{opacity: 1, filter: "blur(0px)"}}
  transition={{duration: 0.5, delay: 0.1, ease}}
  className='flex flex-col divide-y divide-white/[0.06] overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.015]'>
  {capabilityClusters.map((cluster) => (
    <div key={cluster.id} className='p-6 sm:p-7'>
      <h2 className='text-lg font-semibold text-white'>{cluster.title}</h2>
      <p className='mt-2 max-w-[65ch] text-[15px] leading-relaxed text-gray-400'>
        {cluster.summary}
      </p>
      <div className='mt-4 flex flex-wrap gap-2'>
        {cluster.tags.map((t) => (
          <span
            key={t}
            className='rounded-full border border-white/[0.06] bg-white/[0.02] px-2.5 py-1 font-mono text-[11px] text-gray-400'>
            {t}
          </span>
        ))}
      </div>
    </div>
  ))}
</motion.div>
```

The Tooling wall below is unchanged (already hairline rows). Verify: `npx tsc --noEmit`. Commit.

---

### Task 4: Delete dead components

**Files:** delete `app/_components/ProjectCard.tsx`, `app/_components/SkillCard.tsx`.

Confirm zero importers first:
`grep -rn "ProjectCard\|SkillCard\|SkillComponent" app --include=*.tsx | grep import`
(expect no matches). Then delete and `npx tsc --noEmit`. Commit.

---

### Task 5: Build + cross-page verification

- `npx tsc --noEmit` and `npm run build` (expect clean, 10 routes).
- Screenshot `/experience`, `/projects`, `/skills` at 1440 and 390.
- Confirm: single emerald accent (no cyan), no empty grid cells, eyebrows within
  cap, mobile single-column, no new console errors.
- Report pass/fail; commit any fixes.
