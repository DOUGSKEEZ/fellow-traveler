/**
 * Base-aware URL builder. Every internal link and asset path in the site goes through this so
 * the site works identically at `base: '/'` (user/org root page) and `base: '/fellow-traveler'`
 * (project page) with no other edits. See astro.config.mjs.
 */
export function href(path = '/'): string {
  const base = import.meta.env.BASE_URL.replace(/\/+$/, '');
  const p = path === '/' ? '' : path.startsWith('/') ? path : `/${path}`;
  return `${base}${p}` || '/';
}

// Site-level metadata only. NOTE: no theory text lives here — the epigram and every claim come
// from content/*.md (see getEpigram() in lib/claims.ts). `description` describes the project, it
// does not assert a claim.
export const SITE = {
  title: 'The Fellow Traveler Hypothesis',
  description:
    'An indexed, status-honest library of claims for the Fellow Traveler Hypothesis — an original statistical framework on extremes, generative pathways, and tail dependence.',
};
