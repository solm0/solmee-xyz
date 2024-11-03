import { defineConfig } from 'astro/config';
import wikiLink from 'remark-wiki-link';

import react from '@astrojs/react';

const pageUrlPathPrefix = 'markdowns/';

export default defineConfig({
  site: "https://www.solmee.xyz/",

  markdown: {
    remarkPlugins: [
      [
        wikiLink,
        {
          hrefTemplate: (permalink) => `/${pageUrlPathPrefix}${permalink}`,
          pageResolver: (name) => [name.replace(/ /g, '-').toLowerCase()],
        },
      ],
    ],
  },

  integrations: [react()]
});