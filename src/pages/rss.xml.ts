import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ site }) => rss({
  title: 'tide — personal archive',
  description: '随笔、计算机科学、大学生活与未来航线。',
  site: site!,
  items: (await getCollection('blog')).filter(post => !post.data.draft)
    .sort((a,b) => b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf())
    .map(post => ({title: post.data.title, description: post.data.description, pubDate: post.data.publishedAt, link: `/posts/${post.id}/`, categories: post.data.tags})),
  customData: '<language>zh-cn</language>',
});
