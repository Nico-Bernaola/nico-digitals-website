// ESTE ARCHIVO VA EN: app/(site)/blog/[slug]/page.tsx

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

  if (!post) return { title: 'Post no encontrado' };

  const url = `https://www.nicodigitals.site/blog/${slug}`;

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      title: `${post.title} | Nico Digitals`,
      description: post.description,
      url,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author ?? 'Nico Bernaola'],
      tags: post.tags ?? [],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.title} | Nico Digitals`,
      description: post.description,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await client.fetch<SanityPost | null>(POST_BY_SLUG_QUERY, { slug });

  if (!post) notFound();

  return (
    <main style={{ minHeight: '100vh', background: 'var(--bg-dark)' }}>
      <div className="container-sm" style={{ padding: '4rem 1.5rem 6rem' }}>

        {/* Back link */}
        <Link
          href="/blog"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontSize: '0.75rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'var(--text-white)',
            textDecoration: 'none',
            marginBottom: '3rem',
            transition: 'color 0.2s',
          }}
        >
          ← Todos los artículos
        </Link>

        {/* Post header */}
        <header style={{ marginBottom: '3rem' }}>
          {post.tags && post.tags.length > 0 && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
              {post.tags.map((tag) => (
                <span key={tag} style={{
                  fontSize: '0.65rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'var(--gold)',
                  background: 'rgba(191,161,89,0.08)',
                  border: '1px solid rgba(191,161,89,0.2)',
                  padding: '0.2rem 0.6rem',
                  borderRadius: '2px',
                }}>
                  {tag}
                </span>
              ))}
            </div>
          )}

          <h1 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
            fontWeight: 700,
            color: 'var(--text-white)',
            lineHeight: 1.2,
            letterSpacing: '-0.02em',
            marginBottom: '1rem',
          }}>
            {post.title}
          </h1>

          {post.description && (
            <p style={{
              fontSize: '1.1rem',
              color: 'var(--text-light)',
              lineHeight: 1.7,
              marginBottom: '1.5rem',
            }}>
              {post.description}
            </p>
          )}

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <time style={{ fontSize: '0.8rem', color: '#9ca3af', fontFamily: 'monospace' }}>
              {new Date(post.publishedAt).toLocaleDateString('es-AR', {
                year: 'numeric', month: 'long', day: 'numeric',
              })}
            </time>
            {post.author && (
              <>
                <span style={{ color: '#333' }}>·</span>
                <span style={{ fontSize: '0.8rem', color: '#9ca3af' }}>{post.author}</span>
              </>
            )}
          </div>

          <div style={{
            marginTop: '2rem',
            height: '1px',
            background: 'linear-gradient(to right, var(--gold), #2a2a2a)',
          }} />
        </header>

        {/* Post body */}
        <article className="prose">
          <PortableText value={post.body} components={portableTextComponents} />
        </article>

        {/* Back link bottom */}
        <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid #2a2a2a' }}>
          <Link
            href="/blog"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.75rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--text-white)',
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}
          >
            ← Volver al blog
          </Link>
        </div>
      </div>
    </main>
  );
}
