import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { PERSONAL_INFO } from '../data';
import { SHORT_SITE_DESCRIPTION } from '../data';

const { name } = PERSONAL_INFO;

export async function GET(context) {
  const blog = await getCollection('blog');
  return rss({
    // The RSS feed title, description and customData
    title: name,
    description: SHORT_SITE_DESCRIPTION,
    site: context.site,
    
    // The list of blog posts
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/blog/${post.slug}/`,
      // Optional: Add custom fields
      author: post.data.author,
      categories: post.data.categories,
    })),
    
    // Optional: Customize the RSS feed
    customData: `<language>en-us</language>`,
  });
}