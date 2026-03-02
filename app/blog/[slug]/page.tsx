// ESTE ARCHIVO VA EN: app/blog/[slug]/page.tsx
// Muestra un post individual en /blog/nombre-del-post

import { notFound } from 'next/navigation';
import Link from 'next/link';
import { PortableText } from '@portabletext/react';
import { client } from '@/sanity/lib/client';
import { POST_BY_SLUG_QUERY, ALL_POST_SLUGS_QUERY } from '@/sanity/queries';
import { portableTextComponents } from '@/components/blog/PortableTextRenderer';
import type { SanityPost } from '@/types/blog';
import type { Metadata } from 'next';

interface Props {
  params: Promise<{ slug: string }>;
}

export const revalidate = 60;

export async function generateStaticParams() {
  const slugs = await client.fetch<{ slug: string }[]>(ALL_POST_SLUGS_QUERY);
  return slugs.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await client.fetch<SanityPost | null>(POST_BY_SLUG_QUERY, { slug });

  if (!post) return { title: 'Post Not Found' };

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.publishedAt,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await client.fetch<SanityPost | null>(POST_BY_SLUG_QUERY, { slug });

  if (!post) notFound();

  return (
    <main className="min-h-screen bg-stone-950 text-stone-100">
      <div className="max-w-2xl mx-auto px-6 py-20">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-stone-500 hover:text-amber-400 transition-colors duration-200 mb-12"
        >
          <span aria-hidden="true">←</span> All posts
        </Link>

        <header className="mb-12">
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-4">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] tracking-[0.2em] uppercase px-2 py-0.5 rounded-full bg-stone-800 text-amber-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <h1 className="text-3xl sm:text-4xl font-light tracking-tight leading-snug text-stone-100">
            {post.title}
          </h1>

          {post.description && (
            <p className="mt-4 text-lg text-stone-400 leading-relaxed font-light">
              {post.description}
            </p>
          )}

          <div className="mt-6 flex items-center gap-4 text-xs text-stone-600 font-mono">
            <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
            {post.author && (
              <>
                <span className="text-stone-800">·</span>
                <span>{post.author}</span>
              </>
            )}
          </div>

          <div className="mt-8 h-px bg-gradient-to-r from-amber-400/30 via-stone-700 to-transparent" />
        </header>

        <article>
          <PortableText value={post.body} components={portableTextComponents} />
        </article>

        <div className="mt-16 pt-8 border-t border-stone-800">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-stone-500 hover:text-amber-400 transition-colors duration-200"
          >
            <span aria-hidden="true">←</span> Back to blog
          </Link>
        </div>
      </div>
    </main>
  );
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
