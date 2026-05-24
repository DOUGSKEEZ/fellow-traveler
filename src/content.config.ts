import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/*
 * THE SINGLE SOURCE OF TRUTH.
 *
 * Every claim of the Fellow Traveler Hypothesis lives as one Markdown file under the repo-root
 * `content/` directory (NOT under src/). This collection loads all of them recursively. The
 * site's index, dependency map, open-gaps page, and per-claim pages are all *derived* from this
 * frontmatter — nothing about the theory is typed into a component or page.
 *
 * The schema mirrors CLAUDE.md exactly. Do not loosen it to make a malformed file build; fix the
 * file. Do not silently promote a `status`.
 */

const LAYERS = [
  'axiom',
  'demarcation',
  'derived',
  'provisional',
  'prediction',
  'open-gap',
  'application',
  'perspective',
  'reference',
  'exploration',
] as const;

// Five-status rigor vocabulary for claims (plus `axiom` for the frozen commitments, and
// `reference` for background prior art that is not a claim at all). The status carries an entry's
// rigor independent of which Framework subheading it sits under.
//   ◆ axiom · ● derived · ◐ provisional · ○ draft · · stub · ✗ non-viable      (◇ reference = background)
const STATUSES = ['axiom', 'derived', 'provisional', 'draft', 'stub', 'non-viable', 'reference'] as const;

const claims = defineCollection({
  // Recursive: each subfolder of content/ is a layer; files at the root are allowed too
  // (e.g. content/research-program.md). Routing/linking uses `slug`, never the file path.
  loader: glob({ pattern: '**/*.md', base: './content' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    layer: z.enum(LAYERS),
    status: z.enum(STATUSES),
    summary: z.string(),
    depends_on: z.array(z.string()).default([]),
    order: z.number().default(0),
    updated: z.coerce.date(),
    // Optional: path(s) into transcripts/ recording the reasoning behind a claim. Surfaced on
    // claim pages as a "reasoning behind this" link. See transcripts/README.md.
    provenance: z.union([z.string(), z.array(z.string())]).optional(),
  }),
});

export const collections = { claims };
