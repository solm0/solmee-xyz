import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const blog = await getCollection('blog');
  return rss({
    title: 'solmee-xyz',
    description: 'solmee-xyz',
    site: context.site,
    items: blog.map((post) => ({
      title: post.data.alias,
      pubDate: post.data.date,
      link: `/markdowns/${post.slug}/`,
    })),
  });
}