import Link from 'next/link';
import { client } from '@/sanity/lib/client';
import { ALL_POSTS_QUERY } from '@/sanity/queries';
import type { SanityPostMeta } from '@/types/blog';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog — Estrategias para Ganar Dinero Online',
  description:
    'Artículos prácticos sobre cómo ganar dinero online, emprender desde cero y construir ingresos digitales. Estrategias reales sin humo, por Nico Bernaola.',
  alternates: {
    canonical: 'https://www.nicodigitals.site/blog',
  },
  openGraph: {
    title: 'Blog de Nico Digitals — Estrategias para Ganar Dinero Online',
    description:
      'Artículos prácticos sobre cómo ganar dinero online, emprender desde cero y construir ingresos digitales. Estrategias reales sin humo, por Nico Bernaola.',
    url: 'https://www.nicodigitals.site/blog',
    type: 'website',
  },
};

export const revalidate = 60;

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('es-AR', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

export default async function BlogPage() {
  const posts = await client.fetch<SanityPostMeta[]>(ALL_POSTS_QUERY);

  return (
    <main style={{ minHeight: '100vh', background: 'var(--bg-dark)' }}>

      {/* Header */}
      <section style={{ borderBottom: '1px solid #2a2a2a', padding: '4rem 0 3rem' }}>
        <div className="container-sm">
          <h1 style={{
            display: 'block',
            fontSize: '0.7rem',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: '#d4af37',
            marginBottom: '1rem',
          }}>
            Writing
          </h1>
          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 700,
            color: 'var(--text-white)',
            marginBottom: '0.75rem',
            letterSpacing: '-0.02em',
          }}>
            Blog
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--text-light)', maxWidth: '480px' }}>
            Estrategias, herramientas y reflexiones para construir tu libertad financiera digital.
          </p>
        </div>
      </section>

      {/* Post list */}
      <section style={{ padding: '2rem 0 6rem' }}>
        <div className="container-sm">
          {posts.length === 0 ? (
            <p style={{ color: '#9ca3af', fontSize: '0.9rem', paddingTop: '3rem' }}>
              No hay artículos publicados todavía. Volvé pronto.
            </p>
          ) : (
            <ul style={{ listStyle: 'none' }}>
              {posts.map((post, i) => (
                <li key={post._id} style={{
                  borderBottom: '1px solid #3f3f46',
                }}>
                  <Link
                    href={`/blog/${post.slug.current}`}
                    style={{ textDecoration: 'none', display: 'block', padding: '2rem 0' }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '2rem', flexWrap: 'wrap' }}>
                      <div style={{ flex: 1, minWidth: '200px' }}>

                        {/* Tags */}
                        {post.tags && post.tags.length > 0 && (
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.6rem' }}>
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

                        {/* Title */}
                        <h2 style={{
                          fontFamily: 'var(--font-heading)',
                          fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
                          fontWeight: 600,
                          color: 'var(--text-white)',
                          marginBottom: '0.5rem',
                          lineHeight: 1.3,
                          transition: 'color 0.2s',
                        }}
                          className="post-title-hover"
                        >
                          {post.title}
                        </h2>

                        {/* Description */}
                        {post.description && (
                          <p style={{
                            fontSize: '0.875rem',
                            color: 'var(--text-light)',
                            lineHeight: 1.6,
                            maxWidth: '560px',
                          }}>
                            {post.description}
                          </p>
                        )}
                      </div>

                      {/* Date + arrow */}
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.5rem', flexShrink: 0 }}>
                        <time style={{
                          fontSize: '0.75rem',
                          color: '#d1d5db',
                          fontFamily: 'monospace',
                          whiteSpace: 'nowrap',
                        }}>
                          {formatDate(post.publishedAt)}
                        </time>
                        <span style={{ color: 'var(--gold)', fontSize: '1.1rem' }}>→</span>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      <style>{`
        a:hover .post-title-hover {
          color: #d4af37 !important;
        }
      `}</style>
    </main>
  );
}
