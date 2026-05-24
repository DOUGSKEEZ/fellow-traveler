# transcripts/ — provenance for the reasoning, not just the conclusions

This folder keeps the **reasoning that produced a claim**, so that revisiting a result in six
months does not mean excavating old chat logs. It sits deliberately *outside* `content/`: claims
are the polished output; transcripts are the rough work behind them.

## The convention

1. When a non-trivial `derived` or `provisional` claim is authored, drop the reasoning that earned
   it into a file here. A dated, slug-named Markdown file is the default:

   ```
   transcripts/2026-05-23_pathway-mixture-model.md
   ```

2. Link it from the claim's frontmatter with the optional `provenance:` field, which takes a path
   or a list of paths relative to the repo root:

   ```yaml
   provenance: transcripts/2026-05-23_pathway-mixture-model.md
   # or several:
   provenance:
     - transcripts/2026-05-23_pmm-derivation.md
     - transcripts/2026-05-24_pmm-simulation-notes.md
   ```

   The site surfaces this on the claim page as a **"reasoning behind this"** link.

## What belongs here

- Derivations in long form, including the false starts and the dead ends.
- Decision records: *why this model and not that one*; why a status is `provisional` and what
  argument would promote it to `derived`.
- Notes from a working session that a future reader would otherwise have to reconstruct.

## What does **not** belong here

- The claim itself — that lives in `content/`.
- Fabricated or back-filled reasoning. A transcript is a record of what actually happened. If the
  reasoning for a claim was not captured, leave the `provenance` field off rather than inventing one.

Nothing here is auto-generated. The structure is ready; the human (and Claude, in a working
session) fills it as claims are earned.
