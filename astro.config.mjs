// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

/**
 * Every content file leads with a `# Title` matching its frontmatter `title`. The site renders the
 * title itself (from frontmatter) in each page's header, so the body's leading H1 would duplicate
 * it. Strip that one leading H1 — and only if it is genuinely the first element — leaving all other
 * headings untouched. This is a render concern, not theory text.
 */
function rehypeStripLeadingH1() {
  return (tree) => {
    const i = tree.children.findIndex((n) => n.type === 'element');
    if (i !== -1 && tree.children[i].tagName === 'h1') tree.children.splice(i, 1);
  };
}

/**
 * Anti-cavernous: every claim page opens with a plain-language Overview the reader can finish
 * without descending into math. The content files already lead with prose before their first
 * sub-heading; this lifts that opening into a labelled <section.claim-overview> and wraps the
 * rest in <section.claim-detail>. Generic and content-sourced — no theory text is invented and
 * no content/*.md changes.
 *
 * The split runs on every entry (frontmatter is not reliably reachable from a content-collection
 * rehype plugin). Pages that should NOT show the Overview treatment — reference primers, the
 * research program, and the central premise (which IS the overview) — render with the `prose-flat`
 * class, which neutralises the label and separator in CSS. See src/styles/global.css.
 */
function rehypeOverviewSplit() {
  return (tree) => {
    const kids = tree.children;
    let cut = kids.findIndex((n) => n.type === 'element' && n.tagName === 'h2');
    if (cut === -1) cut = kids.length;
    const lead = kids.slice(0, cut);
    const rest = kids.slice(cut);
    // Need real (non-whitespace) lead content to call it an Overview.
    if (!lead.some((n) => n.type === 'element')) return;

    const overview = {
      type: 'element',
      tagName: 'section',
      properties: { className: ['claim-overview'] },
      children: [
        { type: 'element', tagName: 'p', properties: { className: ['overview-label'] }, children: [{ type: 'text', value: 'Overview' }] },
        ...lead,
      ],
    };
    tree.children = rest.length
      ? [overview, { type: 'element', tagName: 'section', properties: { className: ['claim-detail'] }, children: rest }]
      : [overview];
  };
}

// https://astro.build/config
//
// HOSTING NOTES (read before deploying):
//   This site is LOCAL-FIRST. `astro dev` / `astro build` / `astro preview` all run on the
//   homelab. GitHub Pages config below is present but DORMANT (see .github/workflows/deploy.yml).
//
//   `site` + `base` are set for a GitHub Pages *project* page served at
//       https://<user>.github.io/fellow-traveler/
//   If you publish to a user/org *root* site (https://<user>.github.io/) instead, set
//   base: '/'. Every internal link/asset path already routes through `import.meta.env.BASE_URL`
//   (see src/lib/site.ts → href()), so changing `base` here is the only edit required.
//
//   We deliberately run dev *under* the base path so what you see locally matches production
//   exactly and base-path bugs surface immediately. Local URL: http://<host>:4327/fellow-traveler/
export default defineConfig({
  site: 'https://dougskeezz.github.io',
  base: '/fellow-traveler',

  // Distinct port so we never collide with the other Astro site on this host (default 4321).
  server: { host: true, port: 4327 },
  preview: { host: true, port: 4327 },

  // The content uses LaTeX (e.g. content/derived/pathway-mixture-model.md). KaTeX CSS is
  // imported in src/layouts/BaseLayout.astro; without it equations render unstyled.
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex, rehypeStripLeadingH1, rehypeOverviewSplit],
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
