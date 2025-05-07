import Link from "next/link";
import { fetchAllBlogs } from "app/lib/fetchBlogs";

export const metadata = {
  title: "Blog",
  description: "rsnkyx Blog",
};

export default async function BlogPosts() {
  const allBlogs = await fetchAllBlogs();

  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium">My Articles & Blogs</h1>
      <div>
        {allBlogs.length === 0 && (
          <div className="text-neutral-500">No articles found. Please check back later!</div>
        )}
        {allBlogs.map((post, idx) => (
          <a
            key={post.link + idx}
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block mb-7 p-4 rounded-lg bg-neutral-900/60 border border-neutral-800 hover:bg-neutral-800 transition-colors"
          >
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-1">
              <h2 className="text-lg font-semibold text-green-200 mb-1 sm:mb-0">{post.title}</h2>
              <span className="text-xs text-neutral-400 ml-2">{post.source} &middot; {post.pubDate ? new Date(post.pubDate).toLocaleDateString() : ''}</span>
            </div>
            <p className="text-neutral-300 text-sm mt-1 line-clamp-3">{post.summary}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
