# WORKFLOW — developing the Fellow Traveler Hypothesis

This is the durable loop for growing the theory the way Observer-Centrism is grown. The site is a
**pure renderer**: `content/` is the single source of truth, and the sidebar, the derivation chain,
the Derivations workbench, and the open-gaps page all rebuild themselves from frontmatter. You almost
never touch `src/`.

## Running it locally

The site is **local-first** on the homelab. From the repo root (`/home/samwise/fellow-traveler`):

```bash
npm install         # first time only
npm run dev         # iterate — http://<host>:4327/fellow-traveler/
npm run build       # production build into dist/
npm run preview     # serve the built site to confirm it's known-good
```

- Node **v22.21.1** (matches the other Astro site on this host). Port **4327** is pinned in
  `astro.config.mjs` so it never collides with the `dougmcafee-com` / `tannhauser-labs` sites
  (those default to 4321).
- The dev server runs *under* the GitHub Pages base path on purpose, so what you see locally
  matches production exactly. The local URL therefore includes `/fellow-traveler/`.

## The loop

### 1. Author or revise a claim
Create or edit a Markdown file under the matching `content/<layer>/` folder. Give it honest
frontmatter — the schema is enforced in `src/content.config.ts` and mirrors `CLAUDE.md`:

```yaml
---
title:        # human-readable
slug:         # url-safe, unique across the repo (this is what links/routes use)
layer:        # axiom | demarcation | derived | provisional | open-gap | application | perspective | reference | exploration
status:       # axiom | derived | provisional | draft | stub | non-viable | reference
summary:      # one sentence — shown on cards, the derivation chain, and the Guide
depends_on:   # [slugs] this claim rests on — drives the derivation chain and the "rests on / supports" footers
order:        # integer, display order within its layer
updated:      # ISO date
provenance:   # optional — path(s) into transcripts/ (see step 2)
---
```

Save, and the site re-renders automatically: the **sidebar**, the **derivation chain** (from
`depends_on`), the **Derivations workbench** (every derived/provisional claim), the **Open Gaps**
page, and every page's **"rests on / supports"** footer all update. There is nothing else to wire up.

**Where a new claim appears is determined by its `layer`** (routing lives in `claimUrl()` in
`src/lib/claims.ts`):

Each Framework subheading is an **index** that lists its claims, and **every claim gets its own
page** (the section pages are not composed multi-claim documents):

| layer | sidebar home · renders on |
|-------|--------------------------|
| `axiom` | Framework › **Foundation** — its **own page** (`/foundation/<slug>`), listed on the Foundation index. Exception: `central-premise` is the **thesis** (◎, not an axiom), with its own page (`/central-premise`) in Orientation |
| `demarcation` | Framework › **Demarcation** — its **own page** (`/demarcation/<slug>`), listed on the Demarcation index |
| `derived`, `provisional` | Framework › **Derivations** — its **own page** (`/derivations/<slug>`), listed on the Derivations workbench, enumerated in the sidebar with its status glyph |
| `application` | **Domains** — composed onto the Domains page (`/domains#<slug>`); stub until the first file lands |
| `exploration` | Program & Frontiers › **Explorations** — flat list (`/explorations`); stub until the first file lands |
| `reference` | **Reference** — composed onto the Reference page (`/reference#<slug>`); `research-program` is the one exception, with its own page under Program & Frontiers |
| `open-gap` | collected on the **Open Gaps** page (alongside any `draft`/`stub`/`non-viable` claim) |

To add a claim, just drop the file in `content/<layer>/`. Foundation, Demarcation, and Derivations
pick up every file of their layer (in `order`) on their index, give it its own page via the shared
`ClaimPage.astro` template, and add a sidebar entry — automatically. (Reference and Domains remain
composed multi-section pages.)

The **Predictions** and **Connections** subheadings under Framework are stub landing pages (no
content layer is wired to them yet); when that work begins, give it a layer and a one-line entry in
`claimUrl()` / `SidebarNav.astro`, mirroring how Derivations is wired.

### Page format varies by epistemic type
Every claim page opens with a plain-language **Overview** — the file's own opening prose, lifted
out automatically by the `rehypeOverviewSplit` plugin (`astro.config.mjs`) at the first `##`
heading; the rest renders below as the detail. You get this for free by writing prose before your
first sub-heading. (The split runs on all rendered markdown; pages that shouldn't show it — the
central premise, which *is* the overview, plus reference/background — render with the `prose-flat`
class, which hides the label and separator in CSS.) A per-type **framing note** (`FramingNote.astro`,
text in `TYPE_FRAMING` in `src/lib/claims.ts`) states what kind of thing the page is and how to read it:

- **Thesis** (the central premise, ◎) — *the claim the whole framework supports;* not derived or proven.
- **Axioms** — *posited, not derived.* No proof apparatus; an axiom you can prove isn't an axiom.
- **Demarcation** — *a criterion, not a theorem.* Structured and precise, but not a proof.
- **Derivations** — *the only type with the full proof apparatus.* A **Depends-On** block sits up
  top (deps before the proof), the body's section headings get a proof-step accent
  (`.prose-derivation`), and the footer shows only **Supports** (deps are already up top).
- **Predictions** — *empirical;* stated to be tested, not proven. **Connections** — *expository.*

Reference-layer entries skip the Overview scaffold (their lead is a background disclaimer, not an
overview).

> Cross-reference other claims in prose by their **slug in backticks** (e.g. `` `demarcation-principle` ``),
> matching the existing files — not as Markdown links. The chain, the sidebar, and the footers carry the
> real navigation, and backtick references stay correct regardless of the deploy base path.

### 2. Record provenance
Drop the reasoning that produced a non-trivial result into `transcripts/` and link it from the
claim's `provenance:` field. It appears on the claim page as **"reasoning behind this."** See
`transcripts/README.md`. Don't fabricate one; omit the field if the reasoning wasn't captured.

### 3. Iterate a visual *(currently parked)*
The visualization layer is deliberately **deferred** — see "Visualization layer" below. When it
resumes, the rule is: turn render **knobs**, re-render, reference the figure from a content
caption; reach for a model-swap only on a genuine claim-expression failure.

### 4. Promote a status — only when earned
Move `◐ provisional → ● derived` (or any promotion) **only** when an actual argument earns it, and
write that argument into the file body. Never promote a status to make the site look more finished.
The honesty of the glyphs is the entire credibility of the project; the renderer shows exactly
what the frontmatter says and never upgrades it.

### 5. Park, don't chase
A new direction (the inter-entity protocol, the Fermi application, a quantum-probability stab) gets
a **stub file** with `status: stub` (or `draft` once it's sketched) in the right layer — or goes in
the `exploration` layer if it's a parallel, aggressive reframing that runs alongside the main
chain rather than under it. Wanting something later is not the same as chasing it now. Explorations
are sandboxes and are never load-bearing.

## Status vocabulary (rendered glyphs)

The status carries an entry's **rigor**, independent of which Framework subheading it sits under
(a Prediction and a Derivation can both be `provisional`; the glyph, not the section, tells you how
firm it is).

| status        | glyph | meaning                                          |
|---------------|-------|--------------------------------------------------|
| `axiom`       | ◆     | assumed; not derived; load-bearing               |
| `derived`     | ●     | follows from the axioms by an explicit argument  |
| `provisional` | ◐     | plausible and motivated, not yet rigorous        |
| `draft`       | ○     | sketched, but not yet worked through             |
| `stub`        | ·     | a placeholder — intended, not yet written        |
| `non-viable`  | ✗     | explored and set aside; it does not hold up      |
| `reference`   | ◇     | background prior art; **no claim glyph**, ever   |

Reference-**layer** entries (the glossary, the primers, the research-program note) are rendered
glyph-free and wear a dashed `Background` tag — the boundary between "textbook" and "this theory"
is itself a credibility signal, so it is never blurred.

## Adding a new layer or status
Both are enums in `src/content.config.ts`, with display metadata (label, blurb, order, glyph) in
`src/lib/claims.ts` (`LAYER_META`, `STATUS_META`). Add to both and the whole site picks it up.

## Visualization layer (parked)
`visuals/` holds the first-pass `pmm_simulation.py` and two exploratory figures. Per
`visuals/visualization-build-note.md`, this work is **parked**: it wants a live session with a
tight render loop, and its figures are *not* wired into the site or treated as canonical. When it
resumes, refactor `pmm_simulation.py` into one parameterized entry point (all knobs at the top:
`model`, `bulk_spread`, `trail_prevalence`, `trail_tightness`, `point_count`, `axis_limits`,
`color_rule`), keep the fixed three-object menu (plain bivariate normal · two-component mixture ·
Gumbel copula), sample the trail at its true prevalence, render into `visuals/figures/`, and only
then reference those outputs from content captions.

## Deploying (later — currently dormant)
See `.github/workflows/deploy.yml`. It is disabled (manual-trigger only). Before enabling: confirm
the GitHub repo name and set `base` in `astro.config.mjs` to match (`/<repo-name>` for a project
page, or `/` for a `<user>.github.io` root site). Every internal link already routes through
`href()` in `src/lib/site.ts`, so `base` is the only edit required.
