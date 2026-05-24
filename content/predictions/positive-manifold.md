---
title: Prediction — The Positive Manifold (Tail-Tightening and a Non-Cognitive Co-Effect)
slug: prediction-positive-manifold
layer: prediction
status: provisional
summary: Two falsifiable tail-dependence tests of FTH against psychometric data — tail-tightening as upper-tail dependence vs. a Gaussian-copula null, and a non-cognitive co-effect that discriminates a tail-localized pathway from both mutualism and ordinary (uniform) pleiotropy.
depends_on: [pathway-mixture-model, demarcation-principle, axiom-tail-localized-dependence, research-program]
order: 1
updated: 2026-05-24
---

# Prediction — The Positive Manifold

The positive manifold — diverse cognitive tasks all correlate positively — is the cleanest
real-world fork in the literature (conventionally, a latent general factor *g*). It is the right
first test bed because the bundling is already half-traced: a single (or networked) hidden cause
is the standard explanation. FTH's job here is not to re-discover the manifold but to make two
predictions the standard account does not, stated precisely enough to be tested and to **fail**.

A note on what kind of file this is. This is a *proposed test*, not a result. Status is
`provisional` (◐). Promotion requires data, not argument — a prediction is confirmed or
disconfirmed, never proven.

One reframing governs the whole file. The live competitors to FTH **also posit a fork** (a common
cause). The fight is not *whether* there is a shared source but *what shape* it has: a uniform fork
spread across the whole distribution, or a fork that switches on only in a rare tail regime. Every
sharp prediction below is an attempt to measure that shape.

## The trap to avoid before stating anything

The intuitive operationalization of "the manifold is tighter at the tail" is: *take the top 1% on
g, compute their subtest intercorrelation matrix, show it is higher.* **Do not use this.** It is
killed twice over:

1. **Range restriction.** Correlations computed inside a sample truncated on g (or anything
   g-saturated) are attenuated. The within-group matrix is mechanically *lower*, not higher.
2. **Spearman's Law of Diminishing Returns (the differentiation hypothesis).** Independently of
   restriction, average intercorrelation and g-saturation are empirically *lower* in
   higher-ability groups (Spearman 1927; Detterman & Daniel 1989; replicated, including into
   gifted samples). The established fact points the opposite way to naive tail-tightening.

Both objections are statements about the **within-truncated-sample Pearson correlation**. The
PMM's actual claim is about **tail dependence λ — a copula property** measured over the full
population's quantiles. Stating the prediction at the copula level is what keeps it alive.

## Prediction 1 — Tail-tightening (stated as a copula claim)

> In a **population-representative, full-range** cognitive battery, fit the dependence structure
> in the body of the distribution. Compute what a **Gaussian copula calibrated to that same bulk
> correlation matrix** predicts for the joint upper-tail exceedance rate at high quantiles.
> FTH predicts observed joint-exceedance **exceeds** the Gaussian-null: positive upper tail
> dependence (λ_U > 0), a non-Gaussian, heavy-tailed copula.

The baseline is the load-bearing choice. Against an *independence* null this is trivially true for
any positive correlation and discriminates nothing. Against a *Gaussian* null — which has λ_U = 0
for every ρ < 1 — it is sharp, and it is the same move that destroyed the Gaussian copula in 2008.

**The heavy-tail commitment, owned.** This null is not free. The PMM's Result 4 distinguishes the
*practical* finite-q exceedance (robust, and present even with Gaussian components) from the
*asymptotic* λ_U > 0 (which requires genuinely heavy tails). A Gaussian copula at matched ρ
**also** clusters at finite q — so beating the Gaussian-matched-ρ null is not the practical
effect; it is the heavy-tail bet. Result 4 says claim heavy tails only when independently
justified. P1 therefore *is* that bet, and the file states it as such rather than smuggling it in.

**Falsifiable, but tail-data-hungry — not unidentifiable.** The test does **not** require
estimating the q → 1 limit. It requires detecting, at the largest finite q the sample supports, an
exceedance **excess** over the Gaussian-matched-ρ prediction — which a t-copula produces and a
Gaussian does not. That is identifiable. The obstacle is power: the divergence lives in the
sparsest region of the data, so the test demands very large representative samples. Expensive, not
impossible.

**How it can lose (the rent).** Observed joint-exceedance ≤ Gaussian-null (λ_U ≈ 0) at the maximum
feasible q: the joint ability distribution is Gaussian-copula-adequate at the tail and there is
nothing to explain.

**Standing headwind, declared.** SLODR/differentiation is logically distinct from a copula claim
but empirically pulls against it — if abilities genuinely differentiate at the top, heavy
upper-tail coupling is less likely. The differentiation literature currently has the better of the
prior. This is a head-to-head FTH can lose, and that is the point.

**Data discipline.** Use test-standardization samples or large representative cohorts. Do *not* use
enlistment/military data (truncated at the bottom by entry standards — the population quantiles are
wrong) or college samples. Estimate via copula / joint-exceedance over population quantiles; never
truncate-then-correlate.

**Status as a discriminator: weak (housekeeping).** A heavy-tailed manifold is consistent with
several accounts, including the live rival below, so this prediction does not separate FTH from
them. The discriminating work is done by Prediction 2.

## Prediction 2 — A non-cognitive co-effect (the demarcation test, applied)

> Among individuals at the extreme of **measured g** (never achievement) in an **unselected,
> representative** sample, a genuinely non-cognitive trait *T* is elevated relative to its
> population mean, where the elevation is **tail-localized** — flat-or-(gently-)linear in the bulk
> and *departing upward, super-linearly,* toward the joint extreme — and **survives within-family
> controls**. FTH predicts more than a
> shifted mean: because the high-g tail is a **mixture** of pathway-members and non-members, it
> predicts **inflated conditional variance** (and right-skew) in T | g-extreme — a second-moment
> signature a deterministic confound cannot produce.

### Why this is harder than "g and T share genes"

Ordinary pleiotropy **is a fork**: a shared genetic cause loading on a cognitive node and on *T*.
So the live rival — **mutualism within cognition + ordinary pleiotropy to T** — already contains a
fork and already predicts a non-zero genetic correlation rg(g, T). What it predicts is a
**uniform, Gaussian-additive** fork: E[T | g] rises roughly linearly across the *whole*
distribution, and T | g is shifted but **unimodal and non-inflated**.

FTH's specific bet is a **tail-localized** fork: the shared factor *P* is active only in the rare
pathway regime (Z = 1), so the *curvature* of E[T | g] is **tail-localized** — its departure from
the bulk trend is flat-or-linear in the body and turns **convex, upward** only near the joint
extreme — and T | g-extreme is a **mixture** (inflated variance, right-skew). The discriminator is
therefore **not** "is there a fork" (both have one), and **not** "can T bootstrap cognition"
(neither rival needs it) — it is **whether the fork is tail-localized**.

### What actually discriminates (the conjunction)

Two conjuncts, **both load-bearing**:

1. **Non-cognitive margin.** *T* cannot be a node in a cognitive bootstrapping web. This is the
   guard that rules out **mutualism** as the source — a trait that cannot feed back into cognition
   cannot be built up by reciprocal cognitive feedback.
2. **Tail-concentration (with variance inflation).** The bundling is localized to the joint
   extreme, beyond what a uniform rg predicts. This rules out **ordinary pleiotropy** *and* a
   uniform SES/developmental confound.

Either conjunct alone fails. A non-cognitive trait with *uniform* bundling is just pleiotropy; a
*tail-localized* bundling with a cognitive trait could be mutualism. **The conjunction is the
test** — and that is the honest correction to the earlier "structural vs. parametric" framing,
which overreached. Both predictions are tail-dependence tests against a Gaussian-copula null;
neither is purely structural. P2 earns its keep by the conjunction, not by being a different kind
of test.

### Criteria for an admissible *T* (re-ranked)

- **Measurable across the full g range** — so flat-bulk-vs-accelerating-tail (and the conditional
  variance) can actually be estimated. *Primary: the test is the shape, so the shape must be
  observable.*
- **Non-cognitive / cannot bootstrap cognition** — excludes processing speed, working memory, the
  intellect facet of openness (those are *secretly g*), and also anything that plausibly feeds back
  into cognitive development. This is the mutualism guard.
- **Near-zero bulk correlation with g** — so the uniform story is weak a priori and the tail signal
  is clean. The "flat-or-linear" softening does not relax this for free: the linear-bulk case (a *T*
  carrying its own uniform-pleiotropy channel) remains admissible, but at a cost on two fronts —
  lower power (the convex departure is resolved on top of a slope, not against a flat baseline), and
  a sharper **identification** burden, because the bulk trend must be modeled correctly: misspecify
  it and the rival's own linear signal leaks into the curvature estimate the test depends on.
  Near-zero bulk correlation is therefore the high-power, clean-identification design; linear-bulk is
  admissible but demands you defend the bulk functional form.
- **Shares etiology with g (rg ≠ 0)** — *demoted to a mechanism-plausibility prior, not a
  discriminator.* The live rival predicts rg ≠ 0 too, so a non-zero genetic correlation is nearly
  **inert** as evidence for FTH over the composite. It makes the pathway story mechanistically
  plausible; it does not test it.

### The second-moment corroborator (sharper, but costlier)

Because the PMM is a mixture, the extreme-g group blends pathway-members and non-members, so it
predicts **inflated Var(T | g-extreme)** and right-skew — not merely a shifted mean. A
*homoscedastic* nonlinear pleiotropy engineered to reproduce the conditional **mean** would still
predict a shifted-but-**unimodal, non-inflated** *T*. So a **second-moment (variance / skew) test**
separates the mixture-fork from *homoscedastic* deterministic pleiotropy that conditional-mean tests
cannot — this is rungs 2–3 of the ladder formalized in the pre-registration section below.

**The honest ceiling.** Variance and skew do **not** separate the mixture from *heteroscedastic*
pleiotropy with skewed noise, which can fake all three moments. Only the **shape** of the
conditional distribution (bimodality) does. So the second-moment test is the middle of a ladder, not
its top — see the parked frontier below.

**Cost, stated plainly.** Estimating a *variance* (let alone a skew or a full conditional shape)
conditional on extreme g needs even more upper-tail coverage than P1's exceedance-excess test — a
higher moment in the region where *n* is already thinnest. The higher the rung, the more it costs;
the skew and shape rungs are likely the first to be unpowered in practice. Treat the higher moments
as **corroborators, not gates**: their confirmation is strong, their silence says little.

### Two traps written in red

- **The achievement-filter trap.** "Eminent people are both brilliant and driven" is **not**
  evidence — it is Berkson. Achievement is a conjunctive filter on g *and* T *and* luck;
  conditioning on it manufactures the correlation by FTH's own collider mechanism. Select on
  **measured g in an unselected sample**. The moment the sample is "laureates" or "founders," you
  are measuring a filter, not a pathway.
- **The tail-localized confound.** A confound *can* be tail-localized (extreme wealth buys both
  elite cognitive training and *T*). Defeat it with a **within-family / sibling-discordant design**:
  compare the higher-g sibling to the lower-g sibling. Shared family SES cancels. If the high-g
  sibling is also elevated on *T* within the family, the SES confound is largely defeated. (This
  design imports its own cost — see the asymmetry section.)

### Pre-registration: form now, magnitudes parked

The back door P2 must close is the degrees-of-freedom one — picking, *after* seeing the data,
whichever quantile and threshold make the result look confirmatory. Closing it does **not** require
fabricating magnitudes here. It splits cleanly into two tiers, only one of which is a property of
the theory.

**Tier 1 — form-level commitments (made now, no numbers, no instrument).** These are *signs and
monotonicities*, falsifiable on their own because each rival predicts the opposite sign or a flat
profile. They are properties of the PMM's structure (derived in `pathway-mixture-model` — see the
shape Result there), not of any dataset, so they belong in this layer. The committed direction is
that, conditioning on higher *g*, the distribution of *T* departs from a
linear–Gaussian–homoscedastic–symmetric null in a *signed* way, with the departures
**concentrated in the upper range, not uniform**:

| committed sign (ex ante) | the uniform/deterministic null it breaks | rival it kills | cost to detect |
|---|---|---|---|
| E[T \| g] departs **upward and super-linearly** from the bulk linear extrapolation, with **onset in the upper range** (convex onset — *not* a global monotone-slope claim; the mixture saturates once *g* is pure-pathway) | linear pleiotropy → constant slope | **linear** uniform pleiotropy | low |
| Var(T \| g) **> bulk and rising** with extremity (structured, plausibly hump-shaped — peaks near mixing-fraction ≈ ½, not a fixed value) | deterministic mean → homoscedastic, flat ratio | **homoscedastic** nonlinear pleiotropy | higher |
| Skew(T \| g-extreme) **> 0** (minority pathway component is the right bump) | symmetric noise → zero skew | **symmetric-noise heteroscedastic** pleiotropy | higher still |

The three are a **ladder**, each killing a strictly more sophisticated rival, and the data-hunger
climbs with the rung. None requires a pre-committed magnitude: a *concave* mean, a *flat* variance
ratio, or *zero/negative* skew each falsifies its rung outright. That alone shuts the
"any-upward-curve-counts" door.

The "flat-or-linear" softening touches only the **mean** rung: uniform linear pleiotropy is still
homoscedastic and symmetric, so rungs 2–3 keep their flat (variance) and zero (skew) baselines
regardless of the bulk slope. The higher rungs are therefore *more* robust to a linear bulk, not
less — the place the mean rung got softer is exactly where the variance and skew rungs stay sharp.

**The rung above the ladder (parked frontier).** The rival that survives all three signs is
**skewed-noise heteroscedastic** pleiotropy — a smooth deterministic model can fake convex mean,
rising variance, *and* positive skew with no discrete mixture. Only the **shape** of T | g-extreme
separates it: a mixture predicts **bimodality / a distinct right bump** (the pathway component),
which is not a moment at all. Moment tests → full-conditional-distribution test. This is the same
heteroscedastic rival parked in the cost section; it is honestly the top of the ladder and is *not*
closed by the three signs.

**Tier 2 — magnitude thresholds (parked, by design — not a deficiency).** The specific
*g*-quantile, the size of the convex departure that beats sampling noise, and the numeric variance
ratio are properties of a **chosen instrument, a measured *T*, and that instrument's reliability** —
none of which is a property of the theory. Committing them in a theory file would be false
precision wearing a lab coat. They belong in a downstream study-protocol / `applications` file bound
to a real dataset, set against the bulk *g*–*T* slope measured *in that same data* (the
uniform-pleiotropy null is its linear extrapolation) and the noise floor at the chosen quantile.
Until then P2 is **conditionally falsifiable**: the *directions* are committed and can fail now; the
*magnitudes* await a dataset. The flag stays up.

### How it can lose (the rent)

Phrased as failures of the committed signs, the prediction fails if, at extreme measured g, *T* is:
**absent** (no elevation); or **uniform / linear** across the distribution (constant slope — a fork,
but the pleiotropy kind, not FTH's); or its E[T | g] is **concave rather than convex-onset**; or its
Var(T | g) is **flat** (homoscedastic — deterministic mean, not a mixture); or its skew is **zero or
negative** (symmetric); or it **vanishes within families** (SES confound); or *T* turns out
**g-loaded** (secretly g). Note what a failure does *not* rule out: a rival passing all three signs
may still be **skewed-noise heteroscedastic** pleiotropy rather than a mixture — only the
conditional-distribution **shape** (bimodality) adjudicates that, and that rung is parked.

### Illustrative candidates (illustrative only — not endorsed)

- **Conscientiousness** has the right bulk profile (≈ zero / slightly negative general-population
  correlation with g) but fails on *two* counts: it sits dangerously close to "the thing that, with
  g, produces achievement" (circularity), and it plausibly *can* feed cognitive development (study
  habits, persistence) — so it is a **weak mutualism guard**, not a clean non-cognitive margin.
- **A pleiotropic somatic trait** (refractive error / myopia is the textbook case: replicated
  g/education correlation with a partial shared genetic basis) has a **strong** non-cognitive margin
  — it cannot bootstrap cognition — but its leading causal story is partly education→myopia, and it
  may be a **bulk (uniform)** effect, which would fail the tail-concentration conjunct. Satisfies
  conjunct 1; doubtful on conjunct 2.
- **Height** is the cautionary example: real correlation, but SES / assortative-mating confounded
  and roughly uniform across the distribution — fails tail-concentration. The textbook *weak*
  discriminator.

Note that the ideal *T* must satisfy **both** conjuncts at once — non-cognitive **and**
tail-concentrated — and no candidate above clearly does. That gap is itself the design problem,
left to the data.

The tension is likely **structural, not merely empirical**: the traits most clearly outside the
bootstrapping web (somatic, early-fixed) are the ones whose g-correlation is most apt to be *uniform
pleiotropy* rather than tail-localized — so the conjunction may be **rare in nature**, not just hard
to find. "No clean winner — the search is the finding" is therefore an admissible result, not a
failure.

## What earns its keep: a tail-localized fork, not just "a fork"

The framework's agnosticism — "pathway" = a latent factor *or* a self-reinforcing network — keeps
FTH off the g-wars hill but, taken loosely, threatens to make it un-discriminating. The resolution
is **not** that P2 is a structurally different kind of test (it is not — it is a tail-dependence
test like P1). The resolution is that the **live rival already contains a fork**: mutualism within
cognition, plus ordinary pleiotropy reaching *T*. That composite satisfies "there is a shared
cause" and "T cannot bootstrap," so neither of those features discriminates.

What the composite **cannot** produce is a fork that is *both* non-cognitive in its margin *and*
concentrated in the tail. The non-cognitive margin puts the source outside the bootstrapping web
(kills mutualism-as-source); the tail-concentration puts the fork in the rare regime (kills uniform
pleiotropy and uniform SES). Remove either, and a rival walks straight through. That conjunction —
not Prediction 1, and not any single criterion — is the rent the theory pays.

## Cost and the preserved asymmetry

P2 is sharp in principle but expensive in practice: it needs a representative sample with *T*
measured across the full g range, genetic / sibling structure for the within-family control, and
enough upper-tail coverage to estimate not just a conditional mean but a conditional **variance**.

The demarcation asymmetry survives intact and must not be papered over: **the test confirms
strongly but disconfirms weakly** — and the within-family design **worsens** the disconfirmation
side. Difference scores compound measurement error across a sibling pair correlated ≈ 0.5, and
conditioning on extreme *measured* g admits regression-to-the-mean (lucky-high scorers whose *true*
g is lower), both biasing toward a **false null**. So a within-family null is *especially*
uninformative. Mitigation: model the sibling difference as a latent variable / use multiple g
indicators to attenuate the regression-to-the-mean. A clean confirmation strongly supports a
pathway, because no collider can manufacture a tail-localized, within-family-robust, non-cognitive
co-effect; a null disconfirms only weakly — here, more weakly than usual, by design.

## Reading the two outcomes together

The two predictions are not redundant and need not agree. If **P1 returns Gaussian-adequate** (no
heavy upper-tail in the manifold) while **P2 returns a tail-concentrated, variance-inflated,
non-cognitive co-effect**, that is **not** a contradiction. It would say the within-cognition
manifold is a mild, non-heavy-tailed fork, while the real tail-localized pathway runs *cross-domain*
— into the co-effect. That outcome would relocate FTH's strongest cognitive evidence off the
manifold and onto the co-effect, arguably where it belongs, since the co-effect is the part no
g-test selected on. (Whether the perspectives layer should then lead with the co-effect rather than
the manifold is a downstream framing decision, not settled here.)

## Summary table

| | Prediction 1 (tail-tightening) | Prediction 2 (non-cognitive co-effect) |
|---|---|---|
| claim | λ_U > 0 vs. Gaussian-matched-ρ null (the heavy-tail bet, owned) | tail-localized **and** variance-inflated elevation of a non-cognitive *T* |
| sample | representative, full-range battery | extreme **measured** g, unselected, sibling pairs; *T* across full g range |
| baseline | Gaussian copula at matched ρ | uniform-pleiotropy fork: linear E[T \| g], unimodal non-inflated *T* |
| fails if | observed exceedance ≤ Gaussian-null at max feasible q | concave / flat-variance / symmetric / uniform / vanishes in-family / g-loaded |
| headwind | SLODR; tail data-hunger (power) | achievement-filter (Berkson); SES; difference-score attenuation |
| discriminates FTH from the live rival? | no (housekeeping) | **yes — but only by the conjunction** (non-cognitive ∧ tail-concentrated) |
