// ESTE ARCHIVO VA EN: app/blog/page.tsx
// Muestra la lista de todos los posts en /blog

import Link from 'next/link';
import { client } from '@/sanity/lib/client';
import { ALL_POSTS_QUERY } from '@/sanity/queries';
import type { SanityPostMeta } from '@/types/blog';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Articles, insights and ideas.',
};

export const revalidate = 60;

export default async function BlogPage() {
  const posts = await client.fetch<SanityPostMeta[]>(ALL_POSTS_QUERY);

  return (
    <main className="min-h-screen bg-stone-950 text-stone-100">
      <div className="max-w-2xl mx-auto px-6 py-20">
        <div className="mb-16">
          <span className="text-xs tracking-[0.3em] uppercase text-amber-400 font-medium">
            Writing
          </span>
          <h1 className="mt-3 text-4xl font-light tracking-tight text-stone-100">
            Blog
          </h1>
          <p className="mt-3 text-stone-400 text-base leading-relaxed">
            Thoughts on design, development, and the digital craft.
          </p>
        </div>

        {posts.length === 0 ? (
          <p className="text-stone-500 text-sm">No posts yet. Check back soon.</p>
        ) : (
          <ul className="divide-y divide-stone-800/60">
            {posts.map((post) => (
              <li key={post._id}>
                <Link
                  href={`/blog/${post.slug.current}`}
                  className="group flex items-start justify-between py-6 gap-6 hover:text-amber-400 transition-colors duration-200"
                >
                  <div className="flex-1 min-w-0">
                    <h2 className="text-base font-medium text-stone-100 group-hover:text-amber-400 transition-colors duration-200 truncate">
                      {post.title}
                    </h2>
                    {post.description && (
                      <p className="mt-1 text-sm text-stone-500 line-clamp-2 leading-relaxed">
                        {post.description}
                      </p>
                    )}
                    {post.tags && post.tags.length > 0 && (
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] tracking-wider uppercase px-2 py-0.5 rounded-full bg-stone-800 text-stone-400"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  <time
                    dateTime={post.publishedAt}
                    className="shrink-0 text-xs text-stone-600 pt-0.5 font-mono"
                  >
                    {formatDate(post.publishedAt)}
                  </time>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}
