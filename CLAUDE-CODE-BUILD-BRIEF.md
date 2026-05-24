# Build Brief for Claude Code — Fellow Traveler site & iteration workflow

You are setting up the site and the working environment for the **Fellow Traveler Hypothesis**.
Read `CLAUDE.md` first (project context, frontmatter schema, status glyphs). This file is the
build-and-workflow brief that sits on top of it.

---

## 0. Prime directive

`content/` is the **single source of truth**. Astro is a **pure renderer**. No theory text ever
lives in a component or a page — only in `content/*.md`. Components hold layout, navigation, and
styling; claims never do. If you ever find yourself typing a sentence of theory into a `.astro`
or `.jsx` file, stop — it belongs in a content file.

**Reference model:** <https://observer-centrism.org/>. Imitate its *structure and discipline* —
few frozen axioms; a hard wall between assumed / derived / provisional / open; per-claim files
whose frontmatter drives an index and a dependency map; an "open gaps" page; multiple entry
points (a narrative guide and a by-domain/by-layer index). Do **not** imitate its subject matter.

**The credibility is the status honesty.** Do not upgrade any claim's `status` to make the site
look more finished. A domain expert trusts this work because `open` gaps are marked as openly as
`derived` results. The visible humility is the credibility. Render the glyphs (◆ axiom, ●
derived, ◐ provisional, ○ open) faithfully from frontmatter and never silently promote.

---

## 1. Environment & hosting

- Target machine: homelab server `samwise@192.168.10.21`. Another Astro site is already served
  from this host, so **inspect what's already there before installing** — match the existing Node
  version and reuse the pattern rather than fighting it. Do not disrupt the other site (check
  ports, reverse-proxy / Cloudflare config, and any process manager already in use).
- **Now:** run locally on the homelab — `astro dev` for iteration, and confirm a clean
  `astro build` + `astro preview` so the production build is known-good.
- **Later (build for it now, don't deploy yet):** the existing flow is *push git master → GitHub
  → Cloudflare auto-updates*. Keep this site compatible with **GitHub Pages**: set `site` and
  `base` in `astro.config` correctly (if the repo is not a user/org root site, `base` must be the
  repo name, and all internal links/asset paths must respect `base`). Add a GitHub Actions
  workflow for Pages but leave deployment dormant / documented until the human enables it.
- Do not commit secrets. Add a sensible `.gitignore` (node_modules, build output, OS cruft).

## 2. Stack

- **Astro** with **content collections**. Define the collection schema to match the frontmatter
  in `CLAUDE.md` exactly (`title, slug, layer, status, summary, depends_on, order, updated`).
  Add `status: reference` and `layer: reference` as valid values (used by the primer — see §5).
- Markdown with math: enable **remark-math + rehype-katex** (the content uses LaTeX, e.g.
  `pathway-mixture-model.md`). Verify equations render before declaring done.
- Keep dependencies minimal. No CMS, no database, no client framework unless a specific
  interactive visual needs it (see §6).

## 3. What to build (pages)

1. **Home** — the central premise, the three axioms, and the epigram *"Colliders share their
   inputs; pathways share their outputs."* Plus the two entry points below.
2. **Guide** (narrative entry point) — a reading order that walks premise → axioms → demarcation
   → model → predictions. Prose links into the claim files; it does not restate them.
3. **Index** (structured entry point) — every claim grouped by `layer`, each row showing its
   `status` glyph and `summary`, read from frontmatter. This is the map of the whole theory.
4. **Dependency map** — a graph built from `depends_on`. A simple, legible node-link or nested
   view is enough to start; it must update automatically when frontmatter changes.
5. **Open gaps** — auto-collected list of every file with `status: open` (and surface
   `provisional` caveats too). This page is a feature, not an afterthought.
6. **Claim pages** — one rendered page per content file, showing title, status glyph, summary,
   the body, its dependencies (linked), and what depends on it (back-links).
7. **Reference / primer** — see §5.
8. **Visuals** — render the existing figures with their captions; see §6.

## 4. Provenance: keep the reasoning, not just the conclusions

Create a top-level `transcripts/` (or `derivations/`) folder **outside `content/`**. Its purpose:
every non-trivial `derived`/`provisional` claim should be traceable to the reasoning that
produced it, so that revisiting a result in six months doesn't mean excavating old chat logs.

- Add an optional frontmatter field `provenance:` (a path or list of paths into `transcripts/`)
  and surface it on claim pages as a "reasoning behind this" link.
- Seed the folder with a `README.md` explaining the convention. Do not fabricate transcripts;
  leave the structure ready for the human to drop them in.

## 5. The primer (answers the human's open question — yes, build it)

Background concepts FTH borrows are **reference material, subordinate to the claims** — never
peers of them. Extend the existing `content/reference/glossary.md` with short primer entries,
each `status: reference`, `layer: reference`:

- **Berkson's paradox / collider bias** — what it is, whose it is, and the one line on how FTH
  *departs* from it (the demarcation principle).
- **Gaussian copula & the 2008 story** — the marquee entry; the famous, expensive demonstration
  that joint tails are *not* independent (λ_U = 0 assumed, reality disagreed). Credit it fully;
  it is rhetorical anchor, not FTH's contribution.
- **Tail dependence (λ), copulas, Gumbel vs. Gaussian vs. Student-t** — define λ; note the
  practical-vs-asymptotic distinction (finite-quantile dependence is robust even for Gaussians;
  asymptotic λ_U > 0 needs heavy tails); note Gumbel = upper-tail-only asymmetry.
- **Positive manifold & Spearman's g; mutualism/network models** — the first real-world test bed
  (see `research-program.md`), named as established prior art.

Rule: reference entries must **never** carry a `derived`/`provisional`/`axiom` glyph. They are
not the human's contributions and must not borrow the authority of the status system. Make them
visually distinct (a different card style / a "background" tag) so the boundary between "textbook"
and "this theory" is unmistakable. That boundary is itself a credibility signal.

## 6. Visualizations — the sandbox, built with the right discipline

The current `visuals/` holds `pmm_simulation.py` and two figures. **Read
`visuals/visualization-build-note.md` before touching anything here** — it records hard-won
lessons. The essential one, to bake into the tooling:

> Separate three layers and never collapse them: the **claim** (what FTH asserts), the **model**
> (the statistical object encoding it), and the **render** (knobs: point count, spread, trail
> prevalence, trail tightness, axis limits, color rule). Most "the picture looks wrong" problems
> are **render** problems — fix with a knob, never by swapping the model. A few are model
> problems. Almost none are claim problems. Name the layer before changing anything. Model-swaps
> are rare and deliberate; knob-turns are the default.

Build accordingly:

- Refactor `pmm_simulation.py` into **one parameterized entry point with every knob exposed at
  the top** — `model` choice, `bulk_spread`, `trail_prevalence`, `trail_tightness`,
  `point_count`, `axis_limits`, `color_rule` — so a tweak is a one-line change and a re-render,
  not a rewrite. This is the single most important piece of tooling for the human's future loop.
- Keep a **fixed three-object menu**, do not invent distributions per-question: (a) plain
  bivariate normal — the null/control, always drawable beside the real thing; (b) two-component
  mixture — bulk + colorable trail, the best *teaching* cartoon; (c) Gumbel copula — one
  population, upper-tail-only flare, the most honest *truth-claim* object. Sample the trail
  **proportionally to its real prevalence** — equal counts make a rare trail look over-abundant
  and lie about rarity.
- Provide a fast local render loop (a `make`-style or single-command rebuild of figures) so
  knob-turning is the path of least resistance. Optionally a small live preview, but the priority
  is *cheap iteration*, not interactivity for its own sake.
- Figures are build artifacts: regenerate them into `visuals/figures/`, and have the site
  reference those outputs with captions. Captions live in content; images are assets.

## 7. The iteration workflow (the durable goal, not just a one-time build)

Set the human up to develop the theory the way Observer-Centrism is developed. Document this in a
`WORKFLOW.md` at the repo root:

1. **Author/revise a claim** as a `content/*.md` file with honest frontmatter (status +
   depends_on). The site re-renders; the index, dependency map, and open-gaps page update
   automatically.
2. **Record provenance** — drop the reasoning into `transcripts/` and link it via `provenance:`.
3. **Iterate a visual** — turn knobs in the parameterized script, re-render, reference the figure
   from a content caption. Reach for a model-swap only on a genuine claim-expression failure.
4. **Promote a status** only when an actual argument earns it — and write that argument into the
   file body. Never promote to look finished.
5. **Park, don't chase** — new directions (inter-entity protocol, Fermi application, quantum-
   probability stab) get a stub file with `status: open` or `status: provisional` in the right
   layer, or go in `content/explorations/`. Wanting something later ≠ chasing it now.

Add `content/explorations/` for parallel/aggressive reframings that run *alongside* the main
chain (mirrors OC's Geometric Algebra track). These are sandboxes, never load-bearing.

## 8. Definition of done (verify before reporting back)

- `astro dev` serves locally on the homelab without disturbing the existing site.
- `astro build` + `astro preview` succeed; KaTeX equations render.
- Index, dependency map, and open-gaps page are all generated from frontmatter — adding a dummy
  content file makes it appear everywhere automatically (test this, then delete the dummy).
- Reference/primer entries are visually distinct and carry no claim-glyph.
- The parameterized visualization script renders all figures from one command with knobs at top.
- `WORKFLOW.md`, `transcripts/README.md`, and a `.gitignore` exist.
- GitHub Pages config (`site`/`base` + dormant Actions workflow) is present but not deployed.
- Report what was found on the homelab (Node version, existing-site setup) and any deviation from
  this brief, with reasons.

## 9. Things NOT to do

- Do not put theory text in components/pages.
- Do not invent content, citations, transcripts, or numbers. Empty roadmap layers stay empty.
- Do not upgrade statuses. Do not give reference entries claim-glyphs.
- Do not swap the visualization model to fix a render problem.
- Do not deploy to GitHub Pages or alter the existing site's serving without the human's go-ahead.
