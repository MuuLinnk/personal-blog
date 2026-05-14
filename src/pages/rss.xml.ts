import rss from '@astrojs/rss';
import { SITE } from '../consts';
import { getCollection } from 'astro:content';

export async function GET(context: any) {
  const allPosts = await getCollection('posts');
  const sortedPosts = allPosts
    .map((post) => ({
      title: post.data.title,
      description: post.data.description || '',
      link: `/posts/${post.data.slug || post.id}`,
      pubDate: new Date(post.data.date),
    }))
    .sort((a, b) => b.pubDate.getTime() - a.pubDate.getTime());

  return rss({
    title: SITE.title,
    description: SITE.description,
    site: context.site,
    items: sortedPosts,
    customData: `<language>zh-CN</language>`,
  });
}
