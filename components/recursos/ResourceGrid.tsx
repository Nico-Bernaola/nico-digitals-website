'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

type FilterValue = 'todos' | 'ebook' | 'curso' | 'herramienta' | 'coaching' | 'blog';

export interface Resource {
  _id: string;
  title: string;
  slug: string;
  description: string;
  imageUrl: string | null;
  category: string;
  url: string;
  external: boolean;
  pinned: boolean;
  publishedAt: string;
}

const categories: { value: FilterValue; label: string }[] = [
  { value: 'todos',       label: 'Todos' },
  { value: 'ebook',       label: 'eBooks' },
  { value: 'curso',       label: 'Cursos' },
  { value: 'herramienta', label: 'Herramientas' },
  { value: 'coaching',    label: 'Coaching' },
  { value: 'blog',        label: 'Blog' },
];

export function ResourceGrid({ resources }: { resources: Resource[] }) {
  const [activeFilter, setActiveFilter] = useState<FilterValue>('todos');

  const pinned = resources.filter(r => r.pinned);
  const rest   = resources
    .filter(r => !r.pinned)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

  const allSorted = [...pinned, ...rest];

  const filtered = activeFilter === 'todos'
    ? allSorted
    : allSorted.filter(r => r.category === activeFilter);

  return (
    <>
      {/* Filtros */}
      <section style={{ borderBottom: '1px solid #2a2a2a', padding: '1.25rem 0' }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {categories.map(({ value, label }) => (
              <button
                key={value}
                onClick={() => setActiveFilter(value)}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.75rem',
                  fontWeight: 500,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  padding: '0.45rem 1rem',
                  border: '1px solid',
                  borderColor: activeFilter === value ? 'var(--gold)' : '#2e2e2e',
                  background: activeFilter === value ? 'var(--gold)' : 'transparent',
                  color: activeFilter === value ? 'var(--bg-dark)' : 'var(--text-light)',
                  cursor: 'pointer',
                  borderRadius: '2px',
                }}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grilla */}
      <section style={{ padding: '3rem 0 6rem' }}>
        <div className="container">
          {filtered.length === 0 ? (
            <p style={{ color: '#555', fontSize: '0.9rem', paddingTop: '2rem' }}>
              No hay recursos en esta categoría todavía.
            </p>
          ) : (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
              gap: '1.5rem',
            }}>
              {filtered.map(recurso => (
                <ResourceCard key={recurso._id} resource={recurso} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

function getCategoryEmoji(category: string) {
  switch (category) {
    case 'ebook': return '📖';
    case 'curso': return '🎓';
    case 'herramienta': return '🛠';
    case 'coaching': return '🎯';
    default: return '✍️';
  }
}

function ResourceCard({ resource }: { resource: Resource }) {
  const inner = (
    <article className="card-dark" style={{
      borderRadius: '2px',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      cursor: 'pointer',
    }}>
      {/* Imagen */}
      <div style={{
        width: '100%',
        aspectRatio: '16/9',
        background: '#1e1e1e',
        position: 'relative',
        overflow: 'hidden',
        flexShrink: 0,
      }}>
        {resource.imageUrl ? (
          <Image
            src={resource.imageUrl}
            alt={resource.title}
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div style={{
            width: '100%', height: '100%',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: '#1a1a1a',
          }}>
            <span style={{ fontSize: '2rem', opacity: 0.3 }}>
              {getCategoryEmoji(resource.category)}
            </span>
          </div>
        )}

        {/* Badge categoría */}
        <div style={{
          position: 'absolute', top: '0.75rem', left: '0.75rem',
          fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase',
          color: 'var(--bg-dark)', background: 'var(--gold)',
          padding: '0.2rem 0.5rem', fontWeight: 600, fontFamily: 'var(--font-body)',
        }}>
          {resource.category}
        </div>

        {/* Badge pinned */}
        {resource.pinned && (
          <div style={{
            position: 'absolute', top: '0.75rem', right: '0.75rem',
            fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase',
            color: 'var(--gold)', background: 'rgba(27,27,27,0.9)',
            border: '1px solid var(--gold)',
            padding: '0.2rem 0.5rem', fontWeight: 600, fontFamily: 'var(--font-body)',
          }}>
            ★ Destacado
          </div>
        )}
      </div>

      {/* Contenido */}
      <div style={{ padding: '1.25rem 1.5rem 1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <h2 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '1rem', fontWeight: 600,
          color: 'var(--text-white)', lineHeight: 1.3,
          marginBottom: '0.6rem', letterSpacing: '-0.01em',
        }}>
          {resource.title}
        </h2>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-light)', lineHeight: 1.6, flex: 1 }}>
          {resource.description}
        </p>
        <div style={{
          marginTop: '1.25rem', fontSize: '0.75rem',
          color: 'var(--gold)', fontWeight: 600, letterSpacing: '0.05em',
        }}>
          Ver recurso {resource.external ? '↗' : '→'}
        </div>
      </div>
    </article>
  );

  if (resource.external) {
    return (
      <a href={resource.url} target="_blank" rel="noopener noreferrer"
        style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
        {inner}
      </a>
    );
  }

  return (
    <Link href={resource.url} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
      {inner}
    </Link>
  );
}