import { defineConfig } from 'astro/config';
import wikiLink from 'remark-wiki-link';
import pagefind from 'astro-pagefind';
import react from '@astrojs/react';
import { visit } from 'unist-util-visit';

const pageUrlPathPrefix = 'markdowns/';

function replaceArrows() {
  return (tree) => {
    visit(tree, 'text', (node) => {
      if (node.value) {
        node.value = node.value.replace(/->/g, '→');
      }
    });
  };
}

export default defineConfig({
  site: "https://www.solmee.xyz/",
  outDir: 'dist',
  markdown: {
    remarkPlugins: [
      [
        wikiLink,
        {
          hrefTemplate: (permalink) => `/${pageUrlPathPrefix}${permalink}`,
          pageResolver: (name) => [name.replace(/ /g, '-').toLowerCase()],
          aliasDivider: '|',
        },
      ],
      replaceArrows,
    ],
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark-dimmed',
      },
      defaultColor: false,
    },
  },
  integrations: [react(), pagefind()],
});