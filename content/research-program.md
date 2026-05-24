---
title: Research Program — Tracing the Collisions
slug: research-program
layer: reference
status: provisional
summary: The investigative spine — trace the collisions, then describe their generative model, with "why" tabled — anchored in latent-factor recovery and the positive manifold.
depends_on: [demarcation-principle, filter-vs-pathway, axiom-tail-localized-dependence]
order: 1
updated: 2026-05-22
---

# Research Program — Tracing the Collisions

The phenomenon, stated plainly: **traits that are uncorrelated in the population collide at the
extremes more often than independence allows, and exceptional travelers — each a collision of
extreme traits — appear to collide with one another too.** The program below is the spine for
turning that observation into a defensible theory.

The ambition is that the effect is **corporeal**: a real feature of how the world generates
extremes, not a retrospective classification. A claim earns "corporeal" exactly when it passes
the demarcation test — a genuine pathway, not Berkson plus hindsight.

## Terminology (resolved)

To avoid colliding with established statistics, the vocabulary is layered:

- **Technical spine:** a *traveler* walks a *pathway* (a fork / common cause) and arrives at a
  *collision* (the rare tail co-occurrence). Travelers who walked the same path are *fellow
  travelers*. The spurious counterpart is the *Berkson collider* (a selection node) — always
  qualified, never just "collider," because that word belongs to the literature and means the
  opposite causal structure.
- **Evocative register (essays, banners only):** *supercollider* names the extreme regime where
  rare, high-energy collisions occur — exotic outcomes invisible in the bulk. "Exceptional
  Colliders Collide" is permitted as a provocative title trading on the physics double-meaning,
  provided the body stays precise.

`fork product` is a causal-structure label only; it does not appear in prose.

## Two levels

- **Intra-entity** — extreme *traits* collide within one traveler (the within-person syndrome;
  tail dependence). This is the **winnable battle** and the ground for the rigorous core.
- **Inter-entity** — exceptional *travelers* collide with one another (scenes, dynasties,
  "mafias"). This is the seductive but contaminated ground: shared institutions (filters),
  homophily (networks), and hindsight (survivorship) explain most apparent inter-entity
  collisions before any novel effect is needed. It is admissible only under the protocol below.

Build rigor on intra-entity. Treat inter-entity as application that must clear demarcation first.

## The ladder

The investigation climbs four rungs. Three are active; the fourth is tabled.

### 1. Trace — recover the latent common factor

A pathway is, formally, a **latent factor loading on several observed extreme traits**. Tracing
a collision therefore means latent-factor recovery: does a single (or networked) hidden cause
account for the joint elevation of the traits, or is the correlation only an artifact of
conditioning on a Berkson collider?

**Anchor (real, half-traced already): the positive manifold.** Scores on diverse cognitive
tasks all correlate positively — the empirical "positive manifold" — conventionally explained by
a latent general factor (Spearman's *g*). That is a fork producing concordant correlation,
sitting in the literature. It is the cleanest place to start tracing, far cleaner than any
business anecdote.

*Method:* factor / latent-variable models on the tail subpopulation; latent-confounder-aware
causal discovery; check for the open-set co-effect signature that distinguishes a fork from a
Berkson collider.

### 2. How — the mechanism of the loading

The mechanism question is a battle already drawn for us: *g*-as-a-real-single-common-cause
versus the **mutualism / network** account (van der Maas and colleagues), in which abilities
bootstrap one another developmentally and produce the manifold *without* a single latent factor.

**FT's stance:** "pathway" denotes *any real generative structure that bundles* — a single latent
factor **or** a self-reinforcing network. FT does not commit to one-factor reductionism. This
keeps the framework off a hill the psychometricians have contested for a century while preserving
the core claim (the bundling is mechanistic, not artifactual).

### 3. Describe — write the generative model

The achievable near-term deliverable, and the first genuine artifact worth more than any
anecdote: a generative model that reproduces the dependence profile —

- λ → 0 in the bulk (independent, or merely Gaussian-correlated), and
- λ > 0, concordant, at the tail.

A latent-factor model or a heavy-tailed copula can do this. A model that reproduces the profile
*is* a description of the phenomenon and is falsifiable. The deliverable can pair the model with
a simulation and a topographic-density visualization (reusing existing matplotlib work), so the
tail-localized concordance is both computed and seen.

### 4. Why — tabled

The deepest rung — why trait space is organized so that such pathways arise at all — is a fun
philosophical and possibly evolutionary question, deliberately **deferred**. Left here as a
placeholder so the program has a slot for it without letting it block the winnable rungs.

## Testable predictions (the rent the theory pays)

These go beyond restating *g* and are demarcation-passing (they concern un-selected co-effects):

1. **Tail-tightening.** The positive manifold should be *stronger* among extreme performers than
   in the middle of the distribution — concordant tail dependence, not merely positive average
   correlation.
2. **Non-cognitive co-effects.** Extreme cognitive ability should bundle with traits that
   *g*-research does not select on — un-selected co-effects whose elevation is the signature of a
   real pathway rather than a measurement artifact.

Both are hypotheses to be tested, not established results.

## Inter-entity protocol (admissibility for the contaminated ground)

An inter-entity collision (a "scene" or "mafia") counts as evidence for FT only if it clears all
four steps — failure permitted and reported at each:

1. Specify the pathway signature **ex ante**, without reference to the famous outcome.
2. Search for candidate clusters matching the signature.
3. Verify whether those clusters actually share the syndrome.
4. Allow the prediction to **fail** — the signature must sometimes pick clusters that do not pan
   out, or the claim is unfalsifiable.

This is the inter-entity form of the co-effect test: a real pathway predicts *further, unsung*
clusters, not just the famous one we started from.

## How this spawns claim files

Each rung will generate its own files under the appropriate layer:

- `derived/` — the generative-model description once it follows by argument.
- `provisional/` — the tail-tightening and non-cognitive-co-effect predictions; the latent vs.
  network stance.
- `open-gaps/` — the "why" rung; the confirm-strong/disconfirm-weak asymmetry of demarcation.
- `applications/` — the inter-entity protocol applied to specific scenes/cohorts.
- `perspectives/` — the Moneyball example, demoted to a communication heuristic and explicitly
  flagged as illustrative (and as itself an instance of the Berkson-plus-hindsight trap).
