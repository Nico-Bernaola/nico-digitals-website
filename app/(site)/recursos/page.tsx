import { client } from '@/sanity/lib/client';
import { ALL_RESOURCES_QUERY } from '@/sanity/queries';
import { ResourceGrid } from '@/components/recursos/ResourceGrid';
import type { Metadata } from 'next';

interface SanityResource {
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

export const metadata: Metadata = {
  title: 'Recursos | Nico Digitals',
  description: 'Cursos, eBooks y herramientas recomendados por Nico Bernaola para generar ingresos digitales.',
};

async function getResources() {
  return client.fetch<SanityResource[]>(ALL_RESOURCES_QUERY);
}

export default async function RecursosPage() {
  const resources = await getResources();

  return (
    <main style={{ minHeight: '100vh', background: 'var(--bg-dark)' }}>

      {/* Header */}
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
            Cursos, eBooks y herramientas que cree yo y herramientas que han creado los mejores en la industria. 
            Solo recomiendo lo que conozco.
          </p>
        </div>
      </section>

      <ResourceGrid resources={resources} />

    </main>
  );
}