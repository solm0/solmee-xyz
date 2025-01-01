import rss from '@astrojs/rss';

export async function GET(context) {
  const posts = import.meta.glob('/src/pages/markdowns/*.md', { eager: true });

  const items = Object.entries(posts).map(([path, post]) => {
    const slug = path
      .replace('/src/pages/markdowns/', '')
      .replace('.md', '');

    const pubDate = new Date(post.frontmatter.date);
    if (isNaN(pubDate)) {
      throw new Error(`Invalid date for post at ${slug}`);
    }

    return {
      title: post.frontmatter.alias || post.frontmatter.aliases[0] || 'Untitled',
      pubDate: pubDate.toUTCString(),
      link: `/markdowns/${slug}/`,
    };
  });

  return rss({
    title: 'solmee-xyz',
    description: 'solmee-xyz',
    site: context.site,
    items,
  });
}