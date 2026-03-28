'use client';

// ESTE ARCHIVO VA EN: app/(site)/recursos/page.tsx
// No lo editás para cambiar contenido — todo va en content.ts

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { recursos, categories } from './content';
import type { Resource, Category } from './content';

type FilterValue = Category | 'todos';

export default function RecursosPage() {
  const [activeFilter, setActiveFilter] = useState<FilterValue>('todos');

  const pinned = recursos.filter(r => r.pinned);
  const rest   = recursos
    .filter(r => !r.pinned)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const allSorted = [...pinned, ...rest];

  const filtered = activeFilter === 'todos'
    ? allSorted
    : allSorted.filter(r => r.category === activeFilter);

  return (
    <main style={{ minHeight: '100vh', background: 'var(--bg-dark)' }}>

      {/* ── Header ──────────────────────────────────────────────────────── */}
      <section style={{ borderBottom: '1px solid #2a2a2a', padding: '4rem 0 3rem' }}>
        <div className="container">
          <span style={{
            display: 'block',
            fontSize: '0.7rem',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: 'var(--gold)',
            marginBottom: '1rem',
          }}>
            Recursos
          </span>
          <h1 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 700,
            color: 'var(--text-white)',
            marginBottom: '0.75rem',
            letterSpacing: '-0.02em',
          }}>
            Lo que recomiendo
          </h1>
          <p style={{ fontSize: '1rem', color: 'var(--text-light)', maxWidth: '520px' }}>
            Cursos, eBooks y herramientas que uso o he usado. Solo recomiendo lo que conozco.
          </p>
        </div>
      </section>

      {/* ── Filtros ─────────────────────────────────────────────────────── */}
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

      {/* ── Grilla ──────────────────────────────────────────────────────── */}
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
                <ResourceCard key={recurso.id} recurso={recurso} />
              ))}
            </div>
          )}
        </div>
      </section>

    </main>
  );
}

// ── Tarjeta individual ────────────────────────────────────────────────────────
function ResourceCard({ recurso }: { recurso: Resource }) {
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
        {recurso.image ? (
          <Image
            src={recurso.image}
            alt={recurso.title}
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
              {recurso.category === 'ebook'       ? '📖'
                : recurso.category === 'curso'    ? '🎓'
                : recurso.category === 'herramienta' ? '🛠'
                : recurso.category === 'coaching' ? '🎯'
                : '✍️'}
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
          {recurso.category}
        </div>

        {/* Badge pinned */}
        {recurso.pinned && (
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
          {recurso.title}
        </h2>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-light)', lineHeight: 1.6, flex: 1 }}>
          {recurso.description}
        </p>
        <div style={{
          marginTop: '1.25rem', fontSize: '0.75rem',
          color: 'var(--gold)', fontWeight: 600, letterSpacing: '0.05em',
        }}>
          Ver recurso {recurso.external ? '↗' : '→'}
        </div>
      </div>
    </article>
  );

  if (recurso.external) {
    return (
      <a href={recurso.url} target="_blank" rel="noopener noreferrer"
        style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
        {inner}
      </a>
    );
  }

  return (
    <Link href={recurso.url} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
      {inner}
    </Link>
  );
}