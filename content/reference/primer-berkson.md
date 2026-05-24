---
title: "Primer — Berkson's Paradox & Collider Bias"
slug: primer-berkson
layer: reference
status: reference
summary: Conditioning on a common effect induces spurious association among its causes; this is exactly what FTH calls a filter, and the demarcation is FTH's only departure.
depends_on: []
order: 2
updated: 2026-05-23
---

# Primer — Berkson's Paradox & Collider Bias

*Background prior art. Established statistics, credited in full — not a contribution of this
framework.*

## What it is

**Berkson's paradox** (Joseph Berkson, 1946, *Biometrics Bulletin*) is the observation that
selecting a sample on a **common effect** of two otherwise-independent causes induces a spurious
association between those causes *within the selected sample*. Berkson's own setting was hospital
data: two conditions that are unrelated in the general population can appear negatively correlated
among hospitalized patients, because being admitted is more likely if you have *either* condition.
The correlation is manufactured by the act of selection; it does not exist in the population.

In the modern causal-graph language (Pearl and the DAG tradition), the selection variable is a
**collider** — a node where two arrows meet, `cause → effect ← cause`. Conditioning on a collider
(or on a descendant of one) opens a non-causal path between its parents. The everyday name for the
mechanism is **"explaining away"**: once you know an admitted patient is sick, learning they lack
one cause raises the odds of the other. The induced association is typically negative under
disjunctive ("either") selection; conjunctive ("both") selection populates a corner without
inducing the same sign — the distinction matters and is treated in the model layer.

## How FTH relates to it — and the one line of departure

FTH does not dispute any of this. A **filter**, in FTH's vocabulary, *is* a Berkson collider:
exogenous selection on shared **inputs**, a closed set, with a nameable casualty roster. The
spurious correlation lives only inside the selected set and vanishes in the full population.

> FTH departs from Berkson on exactly one move — the **demarcation**: a correlation among extremes
> is a real *pathway* (a common cause, arrows fanning **out**) rather than a Berkson artifact when
> its members share a **co-effect** no filter selected on. Colliders share their inputs; pathways
> share their outputs.

Berkson's paradox is the fallacy the framework must clear, not a discovery it claims. See
`filter-vs-pathway` and `demarcation-principle`.
