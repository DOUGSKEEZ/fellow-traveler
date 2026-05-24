---
title: Axiom 3 — Dependence Is Tail-Localized and Concordant
slug: axiom-tail-localized-dependence
layer: axiom
status: axiom
summary: Two traits can be independent across the population yet strongly and positively dependent within the joint tail.
depends_on: [axiom-pathways-bundle]
order: 3
updated: 2026-05-22
---

# Axiom 3 — Dependence is tail-localized and concordant

Because the bundling is pathway-mediated, and the pathways are only "active" for extreme
individuals, two traits can be statistically independent across the population yet strongly
*and positively* dependent within the joint tail.

The dependence is **concordant**: the co-effects rise together, not compensatorily. This is
the word that does the work — it is what separates a pathway's syndrome (traits that travel
together) from a filter's trade-off (traits that substitute for one another). See the
demarcation layer.

## Formal statement

Let λ be the (upper) tail-dependence coefficient between two traits.

- In the bulk of the distribution: λ → 0 (independent, or merely Gaussian-correlated — which
  still gives λ → 0 asymptotically).
- At the extreme: λ > 0, and the dependence is positive/concordant.

A non-vanishing λ is mathematically impossible under a Gaussian dependence structure and
requires a heavy-tailed, non-Gaussian copula — which is exactly what a shared generative
pathway produces. (The full formalization is *provisional* — see the provisional layer.)
