# Central Premise — Load-Bearing Audit

*Working note, not a claim. No frontmatter schema, no glyph, not wired into the site. Lives in
`transcripts/` because it is analysis of the content, not content. Authored 2026-05-31.*

## What this is

A map of everything the Central Premise (`content/axioms/00-central-premise.md`) asserts, and of
the lower-layer claims that are supposed to carry each assertion. The premise reads as overworked
because it is carrying weight the layers beneath it cannot yet bear: a premise that can point at
solid Derivations / Predictions / Connections earns terseness; a premise whose support is thin or
scattered has to argue for itself, and bloats. This audit does **not** rewrite the premise. It
locates the load, so the scaffolding can be solidified first and the cut made later.

Three failure types are flagged:
- **(a) UNSUPPORTED** — the premise asserts something no lower claim carries.
- **(b) MIS-STATUSED** — the support exists, but at a status weaker than the premise implies (or is
  read to imply).
- **(c) SCATTERED** — the support exists but has no single home, so the premise re-argues it.

The north star for "what the premise is *meant* to assert" is a three-layer stack that must never
blur: the **inversion** (a collision refutes chance under a pre-specified null — *certain*); the
**trichotomy + demarcation** (refuted independence ⇒ fork / filter / entanglement, sorted by the
un-selected co-effect — *derived*); the **bet** (the pathway is the live, vindicable reading — the
◎ thesis). The premise's job is to assert the third while standing visibly on the first two, with
confidence pinned to **collisions** (the conjunction), never to a single extreme.

## The carrier map (every assertion → its support)

Body paragraphs are B1–B10; summary clauses are S1–S4.

| # | Assertion (compressed) | Carrier claim(s) | Carrier status | Carries the weight? |
|---|---|---|---|---|
| B1 | A single extreme tells you little; could be a lucky bulk draw or a pathway traveler; one axis can't tell. | `axiom-pathways-not-coincidence` | axiom ◆ | **Yes.** Verbatim the axiom. |
| B2 / S1–S2 | The *collision* (several unrelated extremes together — intra **or** inter, never coordinated) cannot be faked; two rarities exceed the product of their rates only when something connects them ⇒ independence is broken. | `derivation-non-independence-signature` (steps 1–3, the inversion); `axiom-pathways-not-coincidence`; `pathway-mixture-model` Result 2 | derived ● / axiom ◆ / provisional ◐ | **Yes — conditionally.** The inversion is ● *given P0* (a pre-specified null). The premise states it unconditionally ("should almost never happen; independent long-shots multiply out to nothing"). Acceptable for a thesis one-liner, but the certainty is P0-conditional and the premise never says so. See note 1. |
| B3 | A collision is only a surface; ≥3 machines stamp it — filter, pathway, and (where people are involved) mutual influence/entanglement. | `derivation-non-independence-signature` (§The three structures); `filter-vs-pathway` | derived ● / axiom ◆ | **Yes.** Three structures are derived. Entanglement is correctly scoped to the people/inter-entity case ("where people are involved"). |
| B4 / S4 / B9 | A real pathway gives itself away by lifting an **un-selected co-effect**, surfacing even among travelers who demonstrably never met, and leaves **no roster**. | `demarcation-principle` (co-effect + casualty tests); `filter-vs-pathway`; `pathway-mixture-model` Results 5–6 | axiom ◆ / axiom ◆ / provisional ◐ | **Yes as a *definition*.** The instrument is defined at axiom strength. But the premise must not be read as "the co-effect has been *found* in the wild" — its only empirical instance is provisional and may be unrunnable. See finding (b-ii). |
| B5 | The premise "asserts the pathway, at both scales"; the demarcation earns it, and only one direction (co-effect present confirms; absence acquits nothing). | `derivation-non-independence-signature` (inter-entity license + guard); `demarcation-principle` (Honest asymmetry) | derived ● / axiom ◆ | **Partly.** The inter-entity half is licensed *only as a class/mechanism claim, never a per-case verdict* — the derivation says so in terms. The wording "asserts the pathway, at both scales" is safe **if** read as mechanism; dangerous read as per-case. See finding (b-i). |
| B6 | One image: a single source emitting a whole bundle, arrows *out*, into the traits of one person **or** many people who never meet. | `axiom-pathways-bundle`; `filter-vs-pathway` (the fork); `pathway-mixture-model`; `derivation-non-independence-signature` (inter half) | axiom ◆ / derived ● | **Yes.** |
| B7 | A single extreme alone tells you almost nothing — most things reaching a tail got there the ordinary way; the *conjunction* reaching the extreme together is the confession a lone extreme can never be. | `axiom-pathways-not-coincidence`; `pathway-mixture-model` Result 2 ("the bulk reaches the tail too, just uncorrelated") | axiom ◆ / provisional ◐ | **Yes — now.** This is the *fixed* paragraph (commit `8c78564`, today). It now agrees with Axiom 1 and PMM Result 2. See "Honesty defect 1" below. |
| B8 | A filter is the same diagram, arrows reversed: a gate admits, keeps only what cleared it, leaves a roster. | `filter-vs-pathway`; `demarcation-principle` (casualty test) | axiom ◆ | **Yes.** |
| B10 / S3 | The correlation was never in the bulk and isn't merely "at the top"; it lives in the **direction of the arrows** — out of a source, or into a gate. | `filter-vs-pathway` (epigram); `axiom-tail-localized-dependence`; `pathway-mixture-model` Result 3 | axiom ◆ / provisional ◐ | **Yes.** "Colliders share their inputs; pathways share their outputs" is carried verbatim. |

## Findings

### (a) UNSUPPORTED — currently none outstanding (the main instance was fixed today)

The principal type-(a) defect the brief seeded — the body welding the assertive register to a
*single* extreme — **was already remediated** in commit `8c78564` ("fix Central Premise
single-extreme over-reach"), which landed earlier on the audit date. Verified against the file:
the offending phrases the brief quotes —

- *"only a narrow, loaded source can throw anything all the way to the tail"*
- *"a single extreme is very nearly a signed confession that the rest of the bundle is present"*
- *"you have not caught a lone rarity that happened to land high"*

— are **gone** from `content/axioms/00-central-premise.md`. The replacement (B7 above) pins the
confession to the *conjunction* and explicitly concedes "most things that reach a tail got there
the ordinary way," which is exactly Axiom 1 and PMM Result 2. **No further softening of the body's
single-extreme register is required this session.** This is a deviation from the brief, which was
written against the pre-`8c78564` text; reported in full to the human (see the session report).

No other body assertion is presently unsupported.

### (b) MIS-STATUSED — two live soft spots, both about how the premise is *read*

**(b-i) Inter-entity reach: derived as a *mechanism*, dangerous read as a *verdict*.**
The premise's "asserts the pathway, at both scales" rests, for the inter-entity half, *entirely* on
`derivation-non-independence-signature`. That file is `derived` ● — but it is scrupulously a theorem
about the **space of explanations and the shared mechanism**, never a verdict on any case. Its own
gate (drawn 2026-05-31) states the premise "may assert that the upstream fork is real and is the
same mechanism as the intra-entity manifold... it may **not** crown any particular collision a
pathway by the collision alone." So the support is correctly ● *for a class/mechanism claim* and
**absent** for a per-case inter-entity claim.

The current wording is on the right side of this line but not unambiguously: "asserts the pathway,
at both scales; the demarcation is the instrument that earns it" — the "earns it" clause does signal
case-by-case earning, but "asserts the pathway at both scales" can still be read as a blanket
per-case assertion. **Verdict: marginal.** Not a status error in the file; a *reading* risk in the
premise. The later terse rewrite must keep the inter-entity verb at the mechanism level ("the same
fork operates at both scales") and route every actual collision through the demarcation, never
crown one. (This is also the through-line with no home — see (c).)

**(b-ii) Empirical earning is the soft spot.** B4/S4 present the co-effect as the instrument that
"gives the pathway away." The instrument is *defined* at axiom strength (`demarcation-principle`)
and *derived* in the model (`pathway-mixture-model` Results 5–6, provisional). But its only
empirical instance, `prediction-positive-manifold`, is `provisional` ◐ **and the file itself admits
the clean conjunction (non-cognitive ∧ tail-localized) may be "rare in nature," so "the search is
the finding" is an admissible result.** The co-effect has therefore been **DEFINED, not FOUND.**
The premise mostly stays honest here (it phrases the co-effect definitionally and keeps the
"absence acquits nothing" asymmetry from `demarcation-principle`). **Verdict: the premise must never
imply empirical vindication.** No wording presently does, but a terser rewrite could easily slip —
the guard is: the co-effect is the *test*, not a *result*.

### (c) SCATTERED — the clearest gap: "one mechanism, two scales" has no home

The unification — intra-entity (concordant *traits* within one person) and inter-entity (concordant
*individuals* from one source) are the **same fork, different substrate** — is:
- **asserted** in the premise (B5/B6: "the many traits of a single person, or many separate people");
- **re-derived** inside `derivation-non-independence-signature` ("The unification is exact... Same
  fork, different substrate"), where it is a *by-product* of the inversion proof, not the subject;
- **gestured at** in `research-program` (§Two levels: intra- vs inter-entity).

It has **no expository file whose job is to state it.** The Framework › **Connections** subheading —
the natural home — is an unwired stub (`SidebarNav.astro` had `items: []`; no content layer routed
to it). Because the claim has no home, the premise re-argues it inline every time it reaches for
"both scales." **This is the single clearest scaffolding gap, and the one stub this session creates**
(`content/connections/one-mechanism-two-scales.md`, `status: stub`). Note a framing tension to hand
to the human: the existing Connections framing note is scoped to *bridges to established statistics*
("where the framework meets established statistics, and where it departs"), whereas this is an
*internal* cross-scale unification. The human should decide whether to broaden the Connection
framing or carve a separate expository slot; the stub is parked under `connection` per the brief.

## The two honesty defects (status after verification)

1. **Single-extreme overclaim — RESOLVED.** Fixed in `8c78564` (today), verified above. The body's
   assertive register is now pinned to the conjunction. *No proposed diff needed; it is already
   correct.* (The brief's Task-3 fix #1 is moot.)
2. **Summary drops contact-entanglement — LIVE.** The committed summary contrasts only "a generative
   pathway **or** a mere selecting filter" — two machines. The *body* and
   `derivation-non-independence-signature` both carry **three** (filter, entanglement, pathway). A
   thesis one-liner that invokes the inter-entity scale ("the same rare combination recurring across
   people who never met") while naming only two rivals understates the demarcation burden exactly
   where entanglement becomes live. **Any** summary edit must keep all three machines visible. This
   is proposed (not committed) in the session report, and is deliberately *minimal* — the
   lean-summary directive (`8c78564`'s own note: "Summary kept as-is... richer wording deferred")
   and the standing "premise stays lean" guidance both say the summary should not be enriched, only
   corrected for the dropped third structure.

## Minor: stale `updated` metadata

`content/axioms/00-central-premise.md` frontmatter reads `updated: 2026-05-24`, but the body was
edited 2026-05-31 (commit `8c78564`). The field is stale. Flagged, not fixed — the brief forbids
committing *any* change to the premise file this session, and a metadata bump is still a change to
that file. The human may bump it when next touching the premise.

## What the audit says must become solid (feeds the roadmap)

Ordered by how much premise-weight each would relieve:

1. **The "one mechanism, two scales" Connection** — relieves the most. While it is a homeless
   through-line, the premise must carry the entire intra/inter unification in its own sentences.
   Give it an expository home (the stub is now parked) and the premise can point instead of argue.
2. **The inter-entity reach's mechanism/verdict line** — already ● in the derivation, but the
   *premise wording* must be tightened (later) to assert only the mechanism. The derivation already
   supports the safe reading; the premise has not yet been cut to use it.
3. **The empirical co-effect** — `prediction-positive-manifold` is ◐ and may stay there (or fail)
   by its own admission. The premise should never lean on it as a result. This won't "solidify" to
   ● by argument — it is gated on data — so the premise's job is to keep pointing at the *test*, not
   wait for a *result*.
