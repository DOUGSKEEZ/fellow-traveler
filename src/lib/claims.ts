import { getCollection, type CollectionEntry } from 'astro:content';
import { href } from './site';

export type Claim = CollectionEntry<'claims'>;
export type Status = Claim['data']['status'];
export type Layer = Claim['data']['layer'];

/* ------------------------------------------------------------------ status ----- */
// Glyphs are rendered verbatim from frontmatter and NEVER silently promoted. The honesty of the
// status system is the whole credibility of the project (see CLAUDE-CODE-BUILD-BRIEF.md §0).
//
// `reference` is deliberately glyph-less: background prior art must never borrow the authority of
// a claim glyph. Reference-LAYER entries are rendered glyph-free regardless of their `status`
// (the existing glossary.md is status:axiom, research-program.md is status:provisional) — see
// `showsGlyph()`. That boundary between "textbook" and "this theory" is itself a credibility signal.
export const STATUS_META: Record<
  Status,
  { glyph: string; label: string; blurb: string; key: string }
> = {
  axiom: { glyph: '◆', label: 'Axiom', key: 'axiom', blurb: 'Assumed; not derived; load-bearing.' },
  derived: { glyph: '●', label: 'Derived', key: 'derived', blurb: 'Follows from the axioms by an explicit argument.' },
  provisional: { glyph: '◐', label: 'Provisional', key: 'provisional', blurb: 'Plausible and motivated, not yet rigorous.' },
  draft: { glyph: '○', label: 'Draft', key: 'draft', blurb: 'Sketched, but not yet worked through.' },
  stub: { glyph: '·', label: 'Stub', key: 'stub', blurb: 'A placeholder — intended, not yet written.' },
  'non-viable': { glyph: '✗', label: 'Non-viable', key: 'nonviable', blurb: 'Explored and set aside; it does not hold up.' },
  // Reference is background, not a claim. It never wears a claim glyph: cards show a dashed
  // "Background" tag, and where a single marker is needed (the chain spine, footers) it uses ◇ —
  // deliberately distinct from the · stub glyph so the two are never confused.
  reference: { glyph: '◇', label: 'Reference', key: 'reference', blurb: 'Background prior art — not a claim of this framework.' },
};

// The claim-status rigor vocabulary, in epistemic order, for legends (reference is shown separately).
export const CLAIM_STATUS_ORDER: Status[] = ['axiom', 'derived', 'provisional', 'draft', 'stub', 'non-viable'];

/* ------------------------------------------------------------------- layers ---- */
export const LAYER_META: Record<Layer, { label: string; blurb: string; order: number }> = {
  axiom: { label: 'Axioms', order: 0, blurb: 'The frozen commitments. The foundation everything else rests on.' },
  demarcation: { label: 'Demarcation', order: 1, blurb: 'What separates a real Fellow Traveler collision from a Berkson selection artifact.' },
  derived: { label: 'Derived', order: 2, blurb: 'Propositions that follow from the axioms by an explicit argument.' },
  provisional: { label: 'Provisional', order: 3, blurb: 'Plausible and motivated results not yet made rigorous.' },
  prediction: { label: 'Predictions', order: 4, blurb: 'Empirical tests the framework must pass — falsifiable, checked against data, never proven.' },
  'open-gap': { label: 'Open Gaps', order: 5, blurb: 'Acknowledged unknowns, parked honestly.' },
  application: { label: 'Applications', order: 6, blurb: 'Hiring, matchmaking, VC, logistics, medical diagnosis.' },
  perspective: { label: 'Perspectives', order: 7, blurb: 'Essays and wider applications.' },
  exploration: { label: 'Explorations', order: 8, blurb: 'Parallel, aggressive reframings that run alongside the main chain. Never load-bearing.' },
  reference: { label: 'Reference', order: 9, blurb: 'Background prior art FTH borrows. Subordinate to the claims, never a peer of them.' },
};

/* ----------------------------------------------------------- type framing ----- */
// How each page announces its *epistemic type* — what kind of thing it is and therefore how to
// read it. This is scaffolding about the type, not theory text. The format each page follows
// (proof apparatus or not) is keyed to this: only `derivation` carries the proof apparatus,
// because only derivations genuinely follow from the axioms by argument.
export const TYPE_FRAMING: Record<string, { kind: string; note: string }> = {
  axiom: {
    kind: 'Axiom',
    note: 'Posited, not derived — there is nothing to prove here. An axiom you can prove isn’t an axiom; it is stated, and what it commits you to follows.',
  },
  demarcation: {
    kind: 'Criterion',
    note: 'A definition and decision rule, not a theorem. Structured and precise, but not a proof — it draws a line, it does not prove one from prior claims.',
  },
  derivation: {
    kind: 'Derivation',
    note: 'This genuinely follows from the axioms by argument. Its dependencies are listed first; the numbered steps below carry the proof.',
  },
  prediction: {
    kind: 'Prediction',
    note: 'Empirical — stated to be tested against data, not derived. A prediction is confirmed or disconfirmed, never proven.',
  },
  connection: {
    kind: 'Connection',
    note: 'Expository — where the framework meets established statistics, and where it departs.',
  },
  reference: {
    kind: 'Background',
    note: 'Background prior art — established elsewhere, not a contribution of this framework.',
  },
  thesis: {
    kind: 'Thesis',
    note: 'The claim the whole framework exists to support. The axioms sharpen it, the demarcation defends it, the model makes it precise — it is not itself derived or proven.',
  },
};

/** The framing key for a claim. The central premise is the thesis, not an axiom. */
export function framingKey(claim: Claim): keyof typeof TYPE_FRAMING {
  if (claim.data.slug === 'central-premise') return 'thesis';
  switch (claim.data.layer) {
    case 'axiom': return 'axiom';
    case 'demarcation': return 'demarcation';
    case 'derived':
    case 'provisional': return 'derivation';
    case 'prediction': return 'prediction';
    case 'application': return 'connection';
    case 'reference': return 'reference';
    default: return 'reference';
  }
}

/* ----------------------------------------------------------- framework sections -- */
// A section is a Framework subheading that acts as an index over its own per-claim pages
// (Foundation → the axioms, Demarcation → the two demarcation pages, Derivations → the units).
// Each claim of those layers gets its OWN page at `${path}/${slug}` — not an anchor on a
// composed page. The central premise is the thesis and lives at its own /central-premise.
export const SECTION_META = {
  foundation: { label: 'Foundation', path: '/foundation' },
  demarcation: { label: 'Demarcation', path: '/demarcation' },
  derivations: { label: 'Derivations', path: '/derivations' },
  predictions: { label: 'Predictions', path: '/predictions' },
} as const;
export type SectionId = keyof typeof SECTION_META;
export type Section = (typeof SECTION_META)[SectionId];

/** Which Framework section a claim belongs to (its page lives under that section), or null. */
export function sectionOf(claim: Claim): Section | null {
  if (claim.data.slug === 'central-premise') return null; // the thesis, in Orientation
  switch (claim.data.layer) {
    case 'axiom': return SECTION_META.foundation;
    case 'demarcation': return SECTION_META.demarcation;
    case 'derived':
    case 'provisional': return SECTION_META.derivations;
    case 'prediction': return SECTION_META.predictions;
    default: return null;
  }
}

/* --------------------------------------------------------------- predicates ---- */
/** Reference-layer entries are background material and carry no claim glyph. */
export function isReference(claim: Claim): boolean {
  return claim.data.layer === 'reference';
}
/** The central premise is the overall thesis, not an axiom — rendered with its own marker. */
export function isThesis(claim: Claim): boolean {
  return claim.data.slug === 'central-premise';
}
export function showsGlyph(claim: Claim): boolean {
  return !isReference(claim);
}

/**
 * The single marker character + color key for a claim, used wherever one glyph is needed inline
 * (chain spine, "rests on / supports" rows). The thesis returns ◎ (it is not an axiom); reference
 * returns ◇ regardless of its frontmatter status, so background material never borrows a claim
 * glyph. (Cards use ClaimMarker, which renders the dashed "Background" tag instead.)
 */
export function glyphFor(claim: Claim): { ch: string; key: string } {
  if (isThesis(claim)) return { ch: '◎', key: 'thesis' };
  if (isReference(claim)) return { ch: '◇', key: 'reference' };
  const m = STATUS_META[claim.data.status];
  return { ch: m.glyph, key: m.key };
}

/* ----------------------------------------------------------------- loaders ----- */
/** All claims, sorted by layer order then in-layer `order` then title. */
export async function getClaims(): Promise<Claim[]> {
  const all = await getCollection('claims');
  return all.sort((a, b) => {
    const la = LAYER_META[a.data.layer].order;
    const lb = LAYER_META[b.data.layer].order;
    if (la !== lb) return la - lb;
    if (a.data.order !== b.data.order) return a.data.order - b.data.order;
    return a.data.title.localeCompare(b.data.title);
  });
}

/** Map slug -> claim, for resolving depends_on references. */
export async function getClaimMap(): Promise<Map<string, Claim>> {
  const all = await getClaims();
  return new Map(all.map((c) => [c.data.slug, c]));
}

/** Claims grouped by layer, in display order, skipping empty layers. */
export async function getClaimsByLayer(): Promise<{ layer: Layer; claims: Claim[] }[]> {
  const all = await getClaims();
  const groups = new Map<Layer, Claim[]>();
  for (const c of all) {
    const arr = groups.get(c.data.layer) ?? [];
    arr.push(c);
    groups.set(c.data.layer, arr);
  }
  return [...groups.entries()]
    .sort((a, b) => LAYER_META[a[0]].order - LAYER_META[b[0]].order)
    .map(([layer, claims]) => ({ layer, claims }));
}

/** Slugs of claims that depend on `slug` (back-links). */
export function dependentsOf(slug: string, all: Claim[]): Claim[] {
  return all.filter((c) => c.data.depends_on.includes(slug));
}

/* ------------------------------------------------------------ page routing ---- */
// Where a claim is *rendered*. Several claims are composed onto shared pages (the axioms onto the
// Axioms page, the demarcation pair onto the Demarcation page, the primers onto the Reference
// page) rather than each getting its own one-claim page. Only derivation units and the research
// program get standalone pages. This is the single source of truth for "where does this claim
// live", so every link in the site routes through it.
export function claimUrl(claim: Claim): string {
  const { slug, layer } = claim.data;
  // The central premise is the thesis: its own page in Orientation, not under any section.
  if (slug === 'central-premise') return href('/central-premise');
  // Every axiom / demarcation / derivation claim has its own page under its section index.
  const section = sectionOf(claim);
  if (section) return href(`${section.path}/${slug}`);
  switch (layer) {
    case 'open-gap':
      return href(`/open-gaps#${slug}`);
    case 'reference':
      return slug === 'research-program' ? href('/research-program') : href(`/reference#${slug}`);
    case 'application':
      return href(`/domains#${slug}`);
    default:
      return href(`/derivations/${slug}`);
  }
}

/** Resolve a claim's depends_on slugs to the actual claims (dropping any unresolved). */
export function resolveDeps(claim: Claim, all: Claim[]): Claim[] {
  const m = new Map(all.map((c) => [c.data.slug, c]));
  return claim.data.depends_on.map((s) => m.get(s)).filter((c): c is Claim => !!c);
}

/**
 * The derivation chain: every claim that participates in the argument (depends on something, or is
 * depended upon), ordered top-to-bottom by dependency depth. This is the linear spine
 * premise → axioms → demarcation → model → program — and the replacement for the old force graph.
 * Background primers and the glossary (no edges) are intentionally excluded.
 */
export function getChainClaims(all: Claim[]): Claim[] {
  const connected = new Set<string>();
  for (const c of all) {
    if (c.data.depends_on.length) {
      connected.add(c.data.slug);
      for (const s of c.data.depends_on) connected.add(s);
    }
  }
  const depth = computeDepths(all);
  return all
    .filter((c) => connected.has(c.data.slug))
    .sort(
      (a, b) =>
        (depth.get(a.data.slug) ?? 0) - (depth.get(b.data.slug) ?? 0) ||
        LAYER_META[a.data.layer].order - LAYER_META[b.data.layer].order ||
        a.data.order - b.data.order ||
        a.data.title.localeCompare(b.data.title),
    );
}

/**
 * The workbench: every `derived`/`provisional`-LAYER claim, each a self-contained research target
 * that can be handed off as a discrete task. Dependency-ordered. (The research program is
 * reference-layer and lives under Program & Frontiers, so it is not a workbench unit.)
 */
export function getDerivationUnits(all: Claim[]): Claim[] {
  const depth = computeDepths(all);
  return all
    .filter((c) => c.data.layer === 'derived' || c.data.layer === 'provisional')
    .sort(
      (a, b) =>
        (depth.get(a.data.slug) ?? 0) - (depth.get(b.data.slug) ?? 0) || a.data.order - b.data.order,
    );
}

/**
 * The predictions: every `prediction`-LAYER claim. A distinct epistemic type from derivations —
 * a derivation follows from the axioms by argument; a prediction is checked against data and is
 * confirmed or disconfirmed, never proven. Dependency-ordered, same as the workbench.
 */
export function getPredictions(all: Claim[]): Claim[] {
  const depth = computeDepths(all);
  return all
    .filter((c) => c.data.layer === 'prediction')
    .sort(
      (a, b) =>
        (depth.get(a.data.slug) ?? 0) - (depth.get(b.data.slug) ?? 0) || a.data.order - b.data.order,
    );
}

/**
 * The epigram, sourced from content so no theory text is hardcoded into the site (brief §0).
 * It lives verbatim as a blockquote in content/demarcation/filter-vs-pathway.md. We extract it
 * rather than retype it; if it ever moves, this returns null and the home page omits it instead
 * of showing a stale copy.
 */
export async function getEpigram(): Promise<string | null> {
  const map = await getClaimMap();
  const body = map.get('filter-vs-pathway')?.body ?? '';
  const m = body.match(/^>\s*(.*share their inputs.*?share their outputs.*?)\s*$/im);
  return m ? m[1].trim() : null;
}

/* ------------------------------------------------------------ dependency graph -- */
export interface GraphNode {
  slug: string;
  claim: Claim;
  depth: number; // longest dependency chain to a root (drives the column it lands in)
}

/** Longest-path depth per node, so the graph lays out left→right as dependencies flow. */
export function computeDepths(all: Claim[]): Map<string, number> {
  const bySlug = new Map(all.map((c) => [c.data.slug, c]));
  const depth = new Map<string, number>();
  const visiting = new Set<string>();
  function d(slug: string): number {
    if (depth.has(slug)) return depth.get(slug)!;
    const c = bySlug.get(slug);
    if (!c || c.data.depends_on.length === 0) {
      depth.set(slug, 0);
      return 0;
    }
    if (visiting.has(slug)) return 0; // defensive: ignore any accidental cycle
    visiting.add(slug);
    const v = 1 + Math.max(...c.data.depends_on.map((dep) => d(dep)));
    visiting.delete(slug);
    depth.set(slug, v);
    return v;
  }
  for (const c of all) d(c.data.slug);
  return depth;
}

export interface GraphData {
  nodes: GraphNode[];
  edges: { from: string; to: string }[]; // from depends_on -> to (arrow points to dependent)
  columns: GraphNode[][]; // nodes grouped by depth
}

/** Build node/edge/column data for the dependency map. Pure — derived entirely from frontmatter. */
export function buildGraph(all: Claim[]): GraphData {
  const depthMap = computeDepths(all);
  const slugs = new Set(all.map((c) => c.data.slug));
  const nodes: GraphNode[] = all.map((c) => ({
    slug: c.data.slug,
    claim: c,
    depth: depthMap.get(c.data.slug) ?? 0,
  }));

  const edges: { from: string; to: string }[] = [];
  for (const c of all) {
    for (const dep of c.data.depends_on) {
      if (slugs.has(dep)) edges.push({ from: dep, to: c.data.slug });
    }
  }

  const maxDepth = Math.max(0, ...nodes.map((n) => n.depth));
  const columns: GraphNode[][] = [];
  for (let i = 0; i <= maxDepth; i++) {
    columns.push(
      nodes
        .filter((n) => n.depth === i)
        .sort(
          (a, b) =>
            LAYER_META[a.claim.data.layer].order - LAYER_META[b.claim.data.layer].order ||
            a.claim.data.order - b.claim.data.order ||
            a.claim.data.title.localeCompare(b.claim.data.title),
        ),
    );
  }
  return { nodes, edges, columns };
}
