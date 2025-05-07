import Parser from 'rss-parser';

const parser = new Parser();

const FEEDS = [
  'https://rsnkrxz.hashnode.dev/rss.xml',
  'https://medium.com/feed/@roshni_k06',
  'https://rsnkrzx.substack.com/feed',
];

type BlogItem = {
  title: string;
  link: string;
  pubDate: string;
  summary: string;
  source: string;
};

export async function fetchAllBlogs(): Promise<BlogItem[]> {
  const allItems: BlogItem[] = [];
  for (const url of FEEDS) {
    try {
      const feed = await parser.parseURL(url);
      feed.items.forEach(item => {
        allItems.push({
          title: item.title || '',
          link: item.link || '',
          pubDate: item.pubDate || '',
          summary: item.contentSnippet || item.summary || '',
          source: url.includes('hashnode') ? 'Hashnode' : url.includes('medium') ? 'Medium' : 'Substack',
        });
      });
    } catch (e) {
      // Ignore errors for now
    }
  }
  // Sort by date, newest first
  return allItems.sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime()).reverse();
} 