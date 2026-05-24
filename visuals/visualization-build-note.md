# Build Note — Visualization Layer (PARKED)

> **STATUS: PARKED. Do not build this during the library/site setup.**
> Claude Code: ignore this file for now. The current job is the Markdown library and the
> static site. This note exists only so the visualization work we explored is not lost and
> can be picked up later, in a live/interactive session. The `sim/` Python in the repo
> (the first-pass `pmm_simulation.py` and its figures) is *exploratory scaffolding*, not a
> deliverable — do not wire it into the site or treat its figures as canonical.

This records what a long visualization exploration taught us. It is methodology + one figure
spec to build *later*, interactively, where knob-turning is cheap.

---

## Why this is parked

These illustrations want a live environment with a tight render loop (turn a knob, see the
result in a second), not a chat transcript or a one-shot build. Building them now would
distract from the real near-term goal: the canonical Markdown library and the site that
renders it. Revisit only after the library is standing.

---

## Process lessons (the important part)

Separate three layers before changing anything, because most "the picture looks wrong"
complaints were misdiagnosed:

1. **Claim** — what FTH asserts. Rarely the problem.
2. **Model** — the statistical object encoding the claim. Occasionally the problem.
3. **Render** — knobs: point count, bulk spread, trail prevalence/tightness, axis limits,
   color rule. *Almost always* where the problem actually is.

**Default to turning render knobs. Reserve model-swaps for genuine claim-expression failures.**
The exploration went wrong by swapping the *model* (mixture → shared-factor → t-copula →
Gumbel) every time a *render* knob (bulk too dense, trail too tight) was the real fix.
Swapping models throws away accumulated intuition; nudging knobs builds it.

Specific render lessons:
- The most valuable knob is **bulk-to-trail contrast**: wide sparse bulk + diffuse trail makes
  the tail flare read as an organic thickening, not a "unicorn horn" appendage.
- **Sample the trail at its true prevalence.** Equal point counts make a rare pathway look
  over-abundant and dishonest.
- **Always draw the plain-normal control beside the real thing** so "weak correlation" and
  "tail dependence" are visibly distinct.

## Distribution menu (fixed — do not invent per question)

- **Plain bivariate normal** — the null/control. Always shown alongside.
- **Two-component mixture** (bulk + trail) — best *teaching* cartoon; the trail is colorable.
  Honest only when the pathway really is a distinct sub-population.
- **Gumbel copula** — one population, **upper-tail dependence only** (asymmetric, single
  upper-right flare). The most *honest* object for "one population, dependence clenches at the
  top." A validated Gumbel sampler exists in our exploration (positive-stable frailty); reuse it.
- Note: symmetric objects (t-copula) put flares in *both* corners. For a "both traits high"
  story, use the upper-tail-only Gumbel.

## Methodological guardrails (these are theory, keep them)

- **Normal marginals always, for building and proving.** Per Sklar's theorem, marginals and
  dependence separate; FTH is a *dependence* claim. Standardized-normal margins are the honest
  control — they close the "you just drew a fat-tailed trait" escape. Real-world marginals are
  transformed onto normal axes before analysis.
- **The pathway is continuous and primary; the quadrant/box is an analyst's threshold drawn
  afterward.** Most of the pathway lies *outside* any box (the overlooked "tributaries").
- **Never define the travelers by the box.** Define them by the pathway (latent factor /
  co-effects), then draw the box and measure catch/miss. Reversing this *builds a Berkson
  collider by hand* — the correlation inside the box becomes the artifact. Order of operations
  is the demarcation discipline as a workflow.

## Conceptual nuggets the drawings surfaced (promote to real claims)

- **Corridor vs. box**: the pathway is a diagonal corridor; the box is a line drawn across it.
  In one run, the pathway was ~4% of the population, of whom only ~23% were inside the box and
  **~77% on the corridor but below the threshold** — the overlooked candidates (the "Bradys").
- **Filters are axis-aligned cuts on a diagonal target** → inherently lossy (false positives in
  one wedge, false negatives in another). **FTH's move is a basis rotation** onto the pathway's
  axis. "Select on co-effects, not the legible proxy" *is* that rotation. Moneyball was a
  rotation; drafting Brady late was a rotation.

These two belong in `content/derived/` as a **selection-geometry** claim when we resume.

---

## FIGURE TO BUILD LATER — the head-to-head (flagship)

The most persuasive single frame: put a conventional filter and the pathway selector on the
**same** Gumbel population and let them compete for the corner.

**Construction:**
1. One Gumbel population (everyone).
2. **Conventional filter** = axis-aligned cut on the *legible* trait(s) (threshold on X alone,
   or on proxies A,B,C). This is what real filters do — screen on what's easily measured.
3. **Pathway selector** = cut on the latent factor / co-effects (D,E — the corridor).
4. Draw the quadrant box. Count corner-hits for each selector.

**Why it works honestly:** an axis-aligned filter on X says nothing about Y, so it passes a
wedge of high-X/ordinary-Y people who never approach the both-extreme corner. Its corner yield
is low *because it is the wrong shape for a diagonal target*, not because the corner is empty.
The pathway selector aims down the diagonal and hits the corner. Same population, same corner,
opposite yields.

**Two guardrails (or the demo is rigged):**
- **Define, don't place.** Define the filter by a real rule (threshold on the legible axis) and
  let it miss the corner *emergently*. Never hand-position it "just outside the box" — that
  draws the conclusion.
- **Equal budget.** Both selectors pick the same headcount (e.g. top 4% by their respective
  rule). Otherwise headcount does the work and the comparison is meaningless.

**Rows to compute (the payload):**
- corner-yield: fraction of each selector's picks that land in the box.
- **false-negative / "Brady count": genuine corner-dwellers each selector MISSED.** The filter's
  corner false-negative rate is the headline number — the supercolliders conventional selection
  throws away.

This is the `selection-geometry` derived claim made visual, with the Berkson filter as the foil.
Flagship candidate for outreach (e.g. Isaac Arthur) and for hiring/matchmaking/VC applications.
Build it in the live CC loop so the filter threshold and budget are slidable.
