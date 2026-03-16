// ESTE ARCHIVO VA EN: app/(landing)/afiliados-mi-pastorcito/page.tsx
//
// Template de landing B2B para programa de afiliados.
// Para crear una landing de afiliados para otro producto:
// 1. Copiá esta carpeta completa con otro nombre
// 2. Editá content.ts con los datos del nuevo producto
// 3. No tocás page.tsx

import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { programa } from './content';

export const metadata: Metadata = {
  title: programa.name,
  description: programa.description,
  robots: { index: false, follow: false },
};

export default function AfiliadosLandingPage() {
  return (
    <div style={{ background: 'var(--bg-dark)', minHeight: '100vh', fontFamily: 'var(--font-body)' }}>

      {/* ── Header ──────────────────────────────────────────────────────── */}
      <header style={{
        borderBottom: '1px solid #2a2a2a',
        padding: '1.25rem 1.5rem',
        display: 'flex',
        justifyContent: 'center',
      }}>
        <Link href="/" style={{ textDecoration: 'none' }}>
          <span style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 800,
            fontSize: '1rem',
            color: 'var(--gold)',
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
          }}>
            Nico Digitals
          </span>
        </Link>
      </header>

      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <section style={{
        padding: 'clamp(4rem, 8vw, 6rem) 1.5rem clamp(3rem, 6vw, 5rem)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: '-10%', left: '30%',
          width: '700px', height: '500px',
          background: 'radial-gradient(ellipse, rgba(191,161,89,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{
          maxWidth: '1100px', margin: '0 auto',
          position: 'relative', zIndex: 1,
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '4rem', alignItems: 'center',
        }}>
          {/* Texto */}
          <div>
            <span style={{
              display: 'inline-block',
              fontSize: '0.7rem', letterSpacing: '0.25em',
              textTransform: 'uppercase', color: 'var(--gold)',
              marginBottom: '1.5rem', padding: '0.4rem 1rem',
              border: '1px solid rgba(191,161,89,0.3)',
            }}>
              Programa de Afiliados — {programa.commission.platform}
            </span>

            <h1 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.6rem, 4vw, 2.75rem)',
              fontWeight: 800, color: 'var(--text-white)',
              lineHeight: 1.15, letterSpacing: '-0.02em',
              marginBottom: '1.25rem',
            }}>
              {programa.productName}
            </h1>

            <p style={{
              fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
              color: 'var(--text-light)', lineHeight: 1.7,
              marginBottom: '2.5rem', maxWidth: '520px',
            }}>
              {programa.tagline}
            </p>

            <a
              href={programa.affiliateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ fontSize: '1rem', padding: '1.1rem 2.5rem', display: 'inline-flex' }}
            >
              {programa.ctaText}
            </a>
          </div>

          {/* Imagen del producto */}
          {programa.productImage && (
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Image
                src={programa.productImage}
                alt={programa.productName}
                width={280}
                height={380}
                priority
                style={{
                  width: '100%', maxWidth: '280px',
                  height: 'auto', objectFit: 'contain',
                  filter: 'drop-shadow(0 20px 40px rgba(191,161,89,0.15))',
                }}
              />
            </div>
          )}
        </div>
      </section>

      {/* ── Stats ───────────────────────────────────────────────────────── */}
      <section style={{ background: '#161616', borderTop: '1px solid #2a2a2a', borderBottom: '1px solid #2a2a2a' }}>
        <div style={{
          maxWidth: '1100px', margin: '0 auto',
          padding: 'clamp(2rem, 4vw, 3rem) 1.5rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: '0',
        }}>
          {programa.stats.map((stat, i) => (
            <div key={stat.label} style={{
              textAlign: 'center',
              padding: '1.5rem 1rem',
              borderRight: i < programa.stats.length - 1 ? '1px solid #2a2a2a' : 'none',
            }}>
              <div style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                fontWeight: 800, color: 'var(--gold)',
                lineHeight: 1, marginBottom: '0.5rem',
              }}>
                {stat.value}
              </div>
              <div style={{
                fontSize: '0.7rem', letterSpacing: '0.15em',
                textTransform: 'uppercase', color: '#555',
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Por qué convierte ───────────────────────────────────────────── */}
      <section style={{ padding: 'clamp(3rem, 6vw, 5rem) 1.5rem' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto' }}>
          <span style={{
            display: 'block', fontSize: '0.7rem',
            letterSpacing: '0.25em', textTransform: 'uppercase',
            color: 'var(--gold)', marginBottom: '0.75rem',
          }}>
            Por qué convierte
          </span>
          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(1.3rem, 3vw, 1.875rem)',
            fontWeight: 700, color: 'var(--text-white)',
            letterSpacing: '-0.02em', marginBottom: '2rem',
          }}>
            Un producto pensado para convertir desde el diseño.
          </h2>
          {programa.whyConverts.map((paragraph, i) => (
            <p key={i} style={{
              fontSize: '1rem', color: 'var(--text-light)',
              lineHeight: 1.8,
              marginBottom: i < programa.whyConverts.length - 1 ? '1rem' : '0',
            }}>
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* ── Materiales ──────────────────────────────────────────────────── */}
      <section style={{ padding: 'clamp(3rem, 6vw, 5rem) 1.5rem', background: '#161616' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto' }}>
          <span style={{
            display: 'block', fontSize: '0.7rem',
            letterSpacing: '0.25em', textTransform: 'uppercase',
            color: 'var(--gold)', marginBottom: '0.75rem',
          }}>
            Materiales de promoción
          </span>
          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(1.3rem, 3vw, 1.875rem)',
            fontWeight: 700, color: 'var(--text-white)',
            letterSpacing: '-0.02em', marginBottom: '2rem',
          }}>
            Todo listo para que empieces a promover hoy.
          </h2>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {programa.materials.map((item) => (
              <li key={item} style={{
                display: 'flex', gap: '1rem',
                padding: '1rem 1.5rem',
                border: '1px solid #2a2a2a',
                background: '#1e1e1e',
                alignItems: 'center',
              }}>
                <span style={{ color: 'var(--gold)', fontWeight: 700, flexShrink: 0 }}>✓</span>
                <span style={{ fontSize: '0.9rem', color: 'var(--text-light)', lineHeight: 1.5 }}>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Comisiones ──────────────────────────────────────────────────── */}
      <section style={{ padding: 'clamp(3rem, 6vw, 5rem) 1.5rem' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto' }}>
          <span style={{
            display: 'block', fontSize: '0.7rem',
            letterSpacing: '0.25em', textTransform: 'uppercase',
            color: 'var(--gold)', marginBottom: '0.75rem',
          }}>
            Condiciones
          </span>
          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(1.3rem, 3vw, 1.875rem)',
            fontWeight: 700, color: 'var(--text-white)',
            letterSpacing: '-0.02em', marginBottom: '2rem',
          }}>
            Transparente y sin letra chica.
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
            {[
              { label: 'Comisión', value: programa.commission.percentage },
              { label: 'Por venta', value: programa.commission.perSale },
              { label: 'Cookie', value: `${programa.commission.cookieDays}` },
              { label: 'Plataforma', value: programa.commission.platform },
            ].map(({ label, value }) => (
              <div key={label} style={{
                padding: '1.25rem 1.5rem',
                border: '1px solid #2a2a2a',
                background: '#1e1e1e',
              }}>
                <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#555', marginBottom: '0.4rem' }}>{label}</div>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--gold)' }}>{value}</div>
              </div>
            ))}
          </div>

          <p style={{ fontSize: '0.85rem', color: '#555', lineHeight: 1.7 }}>
            {programa.commission.notes}
          </p>
        </div>
      </section>

      {/* ── Productor ───────────────────────────────────────────────────── */}
      <section style={{ padding: 'clamp(3rem, 6vw, 5rem) 1.5rem', background: '#161616' }}>
        <div style={{ maxWidth: '540px', margin: '0 auto', textAlign: 'center' }}>
          <span style={{
            display: 'block', fontSize: '0.7rem',
            letterSpacing: '0.2em', textTransform: 'uppercase',
            color: 'var(--gold)', marginBottom: '1rem',
          }}>
            El productor
          </span>
          <h3 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '1.4rem', fontWeight: 700,
            color: 'var(--text-white)', marginBottom: '0.25rem',
          }}>
            {programa.producer.name}
          </h3>
          <p style={{ fontSize: '0.75rem', color: 'var(--gold)', marginBottom: '1.25rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            {programa.producer.role}
          </p>
          {programa.producer.bio.map((paragraph, i) => (
            <p key={i} style={{
              fontSize: '0.95rem', color: 'var(--text-light)',
              lineHeight: 1.8,
              marginBottom: i < programa.producer.bio.length - 1 ? '0.875rem' : '0',
            }}>
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* ── CTA Final ───────────────────────────────────────────────────── */}
      <section style={{
        padding: 'clamp(4rem, 8vw, 6rem) 1.5rem',
        textAlign: 'center',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', bottom: '-20%', left: '50%', transform: 'translateX(-50%)',
          width: '800px', height: '400px',
          background: 'radial-gradient(ellipse, rgba(191,161,89,0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{ maxWidth: '480px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
            fontWeight: 700, color: 'var(--text-white)',
            marginBottom: '1rem', letterSpacing: '-0.02em',
          }}>
            ¿Te interesa? Hablemos.
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--text-light)', marginBottom: '2rem', lineHeight: 1.7 }}>
            Escríbeme por WhatsApp y te paso todos los detalles del programa.
          </p>
          <a
            href={programa.affiliateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ fontSize: '1rem', padding: '1.1rem 3rem' }}
          >
            {programa.ctaText}
          </a>
          <p style={{ marginTop: '1.25rem', fontSize: '0.75rem', color: '#555' }}>
            Solo trabajamos con afiliados seleccionados.
          </p>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────────────────────── */}
      <footer style={{ borderTop: '1px solid #2a2a2a', padding: '1.5rem', textAlign: 'center' }}>
        <p style={{ fontSize: '0.75rem', color: '#444' }}>
          © {new Date().getFullYear()} Nico Digitals ·{' '}
          <Link href="/" style={{ color: 'var(--gold)', textDecoration: 'none' }}>
            nicodigitals.site
          </Link>
        </p>
      </footer>

    </div>
  );
}