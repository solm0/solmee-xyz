import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
  const markdownFiles = import.meta.glob('./**/*.md');
  const items = await pagesGlobToRssItems(markdownFiles, {
    mapFrontmatter(frontmatter, filePath) {
      const filename = filePath.split('/').pop().replace('.md', '');
      return {
        title: frontmatter.alias ? frontmatter.alias : 'Untitled',
        description: frontmatter.description || 'No description available.',
        pubDate: frontmatter.date || new Date().toISOString(),
        link: `/markdowns/${filename}`,
      };
    },
  });

  // Debug the items
  console.log('RSS items:', items);

  return rss({
    title: 'solmee.xyz',
    description: 'Digital garden of Solmee',
    site: context.site,
    items,
    customData: `<language>ko</language>`,
  });
}