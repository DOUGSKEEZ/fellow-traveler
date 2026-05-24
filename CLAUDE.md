# CLAUDE.md — Fellow Traveler Hypothesis

This file orients you (Claude Code) to the project. Read it fully before scaffolding anything.

## What this project is

The **Fellow Traveler Hypothesis (FTH)** is an original statistical framework. Its claim:
when you select an individual for an extreme value on one trait, you are not drawing a rare
coordinate — you are drawing *membership in the narrow set of pathways capable of reaching
that extreme*, and those pathways carry a syndrome of correlated traits. So conditioning on
one extreme makes other, seemingly unrelated extremes far more common than independence
predicts. The framework distinguishes this real, generative effect (a "collision" sitting on
a "pathway") from the spurious selection artifact of Berkson's paradox (a "filter").

This repository is the home for the theory: a set of indexed Markdown claim-files that build
into a static site, in the spirit of <https://observer-centrism.org/>.

## Reference model

`observer-centrism.org` is the structural template. What to imitate is its **discipline**,
not its physics:

- Few frozen axioms, stated as the only commitments.
- A hard wall between what is *assumed* (axioms), *derived* (consequences), *provisional*
  (plausible but not yet rigorous), and *open* (acknowledged gaps).
- Per-claim Markdown files carrying frontmatter (`status`, `depends_on`), from which the site
  *builds* its index, dependency map, and status glyphs. The honesty lives in the metadata.
- Falsifiable predictions and an explicit "open gaps" page.
- Multiple entry points: a narrative guide and a by-domain index.

Under the hood it is an Astro content-collections site. Recommend the same here unless the
human chooses otherwise.

## Stack (recommended default — confirm with the human)

- **Astro** with content collections, deployed to **GitHub Pages** (the human wants
  `*.github.io` hosting).
- The content files in `content/` are framework-agnostic Markdown + YAML frontmatter, so they
  can also be published by any other static generator if the human prefers something simpler.
- Do not commit a heavy framework choice without confirming. If the human wants minimal, a
  plain Markdown site (e.g. Astro's basic starter, or even a single rendered index) is fine.

## Repository layout

```
content/
  axioms/        # frozen commitments — the foundation
  demarcation/   # what separates a Fellow Traveler collision from a Berkson artifact
  derived/       # propositions that follow by argument         (to be authored)
  provisional/   # plausible-but-soft results                   (to be authored)
  open-gaps/     # honestly parked unknowns                     (to be authored)
  applications/  # hiring, matchmaking, VC, logistics, medical  (to be authored)
  perspectives/  # essays, incl. the Fermi Paradox application  (to be authored)
  reference/     # glossary and shared definitions
```

Only `axioms/`, `demarcation/`, and `reference/` are populated so far. The empty layers are
the roadmap, not a backlog to fabricate — see "Content roadmap" below.

## Frontmatter schema (authoritative)

Every claim file carries this block. Treat it as the schema for the Astro content collection.

```yaml
---
title:        # human-readable title
slug:         # url-safe id, unique across the repo
layer:        # axiom | demarcation | derived | provisional | open-gap | application | perspective | reference
status:       # axiom | derived | provisional | open
summary:      # one sentence, used on index cards and the dependency map
depends_on:   # list of slugs this claim rests on (drives the dependency graph)
order:        # integer, display order within its layer
updated:      # ISO date
---
```

## Status vocabulary and glyphs

Render these on index pages and the dependency map, exactly as Observer-Centrism marks ● / ◐.

| status      | glyph | meaning                                             |
|-------------|-------|-----------------------------------------------------|
| `axiom`     | ◆     | assumed; not derived; load-bearing                  |
| `derived`   | ●     | follows from axioms by an explicit argument         |
| `provisional`| ◐    | plausible and motivated, not yet rigorous           |
| `open`      | ○     | acknowledged gap; honestly unresolved               |

Never silently promote a claim's status. Promotion from ◐ to ● requires an actual argument
in the file body. This honesty is the project's credibility and the whole point of imitating
the reference model.

## Authoring conventions

- **Voice:** rigorous but accessible to a layperson. Lead with the plain-language idea, then
  the formal version. The corrected text diagram in `demarcation/filter-vs-pathway.md` is the
  tone target — a smart non-specialist should follow it.
- **The central contrast** is *inputs vs. outputs*: a filter's members share their inputs (a
  closed set — exactly what the gate selected on); a pathway's members share their outputs (an
  open set — the syndrome, *including co-effects nobody selected for*). When in doubt, fall
  back to this framing.
- **Cite honestly.** Berkson's paradox, Simpson's paradox, collider bias, tail dependence /
  copulas are real prior art — name them correctly and do not claim them as original. FTH's
  originality is the *demarcation* and the *extraction* program built on top.
- **Never fabricate citations, data, or worked numbers.** Placeholder examples must be labeled
  as illustrative.
- **Keep the asymmetry caveat intact.** The falsifier confirms strongly but disconfirms weakly
  (see `demarcation/demarcation-principle.md`). Do not paper over it to make the theory look
  tidier.

## Build roadmap (suggested order)

1. Scaffold Astro + a content collection whose schema matches the frontmatter above.
2. Wire GitHub Pages deployment (base path = repo name if not a user/org root site).
3. Build a home page (premise + the three axioms + the inputs/outputs epigram).
4. Build the index that groups files by `layer` and renders the status glyph from `status`.
5. Build the dependency map from `depends_on` (a simple graph is enough to start).
6. Render the demarcation pages, preserving the ASCII contrast diagram (or re-cut it as an
   inline SVG that matches it exactly — same letters both sides, only arrow direction differs).
7. Add an "open gaps" page that lists every `status: open` file.

## Content roadmap (what is NOT yet written — author with the human, do not invent)

- `derived/` — the Moneyball/extraction arbitrage proposition; the grim-game "narrow nets beat
  broad nets" result.
- `provisional/` — formalization of tail dependence (λ) for FTH; the conjunctive-vs-additive
  selection sign analysis.
- `open-gaps/` — the confirm-strong/disconfirm-weak asymmetry of the falsifier; the causal
  direction question (does the pathway generate the trait, or the trait the pathway?).
- `applications/` — hiring, matchmaking, VC, logistics, medical diagnosis.
- `perspectives/` — the Fermi Paradox application (Great Filters as collider bottlenecks) and
  the science-communication essays.

When the human is ready to write any of these, draft into the matching folder using the schema.
