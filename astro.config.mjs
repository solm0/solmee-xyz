import { defineConfig } from 'astro/config';
import wikiLink from 'remark-wiki-link';

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
  });