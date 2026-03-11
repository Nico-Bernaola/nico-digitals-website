// ESTE ARCHIVO VA EN: app/(landing)/mi-pastorcito-feliz/page.tsx
//
// ─── INSTRUCCIONES ───────────────────────────────────────────────────────────
// Este archivo es el TEMPLATE de diseño. No lo editás para cambiar contenido.
// Para cambiar textos, imágenes o links → editá content.ts
//
// Para crear una nueva landing:
// 1. Copiá esta carpeta completa con otro nombre
// 2. Editá content.ts con el nuevo producto
// 3. No tocás page.tsx
// ─────────────────────────────────────────────────────────────────────────────

import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { product } from './content';
import CountdownBar from '@/components/landing/CountdownBar';
import SocialProof from '@/components/landing/SocialProof';

export const metadata: Metadata = {
  title: product.name,
  description: product.description,
  robots: { index: true, follow: true },
};

export default function LandingPage() {
  const hasMockup = !!product.images.mockup;
  const hasCover  = !!product.images.cover;

  return (
    <div style={{ background: 'var(--bg-dark)', minHeight: '100vh', fontFamily: 'var(--font-body)' }}>
      <CountdownBar offerText={product.countdownText} />

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
        padding: 'clamp(4rem, 8vw, 7rem) 1.5rem clamp(3rem, 6vw, 5rem)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: '-10%', left: '30%',
          width: '700px', height: '500px',
          background: 'radial-gradient(ellipse, rgba(191,161,89,0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{
          maxWidth: '1100px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 1,
          display: 'grid',
          gridTemplateColumns: hasMockup ? 'repeat(auto-fit, minmax(280px, 1fr))' : '1fr',
          gap: '4rem',
          alignItems: 'center',
        }}>
          {/* Texto */}
          <div style={{
            maxWidth: hasMockup ? 'none' : '680px',
            margin: hasMockup ? '0' : '0 auto',
            textAlign: hasMockup ? 'left' : 'center',
          }}>
            <span style={{
              display: 'inline-block',
              fontSize: '0.7rem',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              marginBottom: '1.5rem',
              padding: '0.4rem 1rem',
              border: '1px solid rgba(191,161,89,0.3)',
            }}>
              📖 {product.format} — {product.pages}
            </span>

            <h1 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.75rem, 4vw, 3rem)',
              fontWeight: 800,
              color: 'var(--text-white)',
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              marginBottom: '1.25rem',
            }}>
              {product.name}
            </h1>

            <p style={{
              fontSize: 'clamp(1rem, 2vw, 1.15rem)',
              color: 'var(--text-light)',
              lineHeight: 1.7,
              marginBottom: '2rem',
              maxWidth: '520px',
            }}>
              {product.tagline}
            </p>

            {/* Specs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '2rem' }}>
              {[
                { label: 'Formato',   value: product.format },
                { label: 'Idioma',    value: product.language },
                { label: 'Extensión', value: product.pages },
              ].map(({ label, value }) => (
                <div key={label}>
                  <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#555', marginBottom: '0.2rem' }}>{label}</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-white)', fontWeight: 500 }}>{value}</div>
                </div>
              ))}
            </div>

            {/* Precio */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
              <span style={{ fontSize: '0.9rem', color: '#555', textDecoration: 'line-through' }}>
                {product.priceOld}
              </span>
              <span style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 800, color: 'var(--gold)' }}>
                {product.price}
              </span>
            </div>

            <a href={product.ctaUrl} target="_blank" rel="noopener noreferrer"
              className="btn-primary"
              style={{ fontSize: '1rem', padding: '1.1rem 2.5rem', display: 'inline-flex' }}>
              {product.cta}
            </a>

            <p style={{ fontSize: '0.75rem', color: '#555', marginTop: '0.75rem' }}>
              🔒 {product.guarantee}
            </p>
          </div>

          {/* Mockup */}
          {hasMockup && (
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Image
                src={product.images.mockup!}
                alt={`Mockup de ${product.name}`}
                width={420}
                height={480}
                priority
                style={{
                  width: '100%',
                  maxWidth: '420px',
                  height: 'auto',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 24px 48px rgba(191,161,89,0.15))',
                }}
              />
            </div>
          )}
        </div>
      </section>

      {/* ── Problema ────────────────────────────────────────────────────── */}
      <section style={{ padding: 'clamp(3rem, 6vw, 5rem) 1.5rem', background: '#161616' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(1.4rem, 3vw, 2rem)',
            fontWeight: 700,
            color: 'var(--text-white)',
            marginBottom: '1.5rem',
            letterSpacing: '-0.02em',
          }}>
            {product.problem}
          </h2>
          {product.problemBody.map((paragraph, i) => (
            <p key={i} style={{
              fontSize: '1rem',
              color: 'var(--text-light)',
              lineHeight: 1.8,
              marginBottom: i < product.problemBody.length - 1 ? '1rem' : '0',
            }}>
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* ── Beneficios ──────────────────────────────────────────────────── */}
      <section style={{ padding: 'clamp(3rem, 6vw, 5rem) 1.5rem' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span style={{
              fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase',
              color: 'var(--gold)', display: 'block', marginBottom: '0.75rem',
            }}>
              Qué vas a aprender
            </span>
            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.4rem, 3vw, 2rem)',
              fontWeight: 700,
              color: 'var(--text-white)',
              letterSpacing: '-0.02em',
            }}>
              Cómo este ebook transformará la vida de tu Pastor Alemán
            </h2>
          </div>

          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
            {product.benefits.map((benefit) => (
              <li key={benefit} style={{
                display: 'flex', gap: '1rem',
                padding: '1.1rem 1.5rem',
                border: '1px solid #2a2a2a',
                background: '#1e1e1e',
                alignItems: 'flex-start',
              }}>
                <span style={{ color: 'var(--gold)', fontWeight: 700, flexShrink: 0, marginTop: '1px' }}>✓</span>
                <span style={{ fontSize: '0.95rem', color: 'var(--text-light)', lineHeight: 1.5 }}>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Autor ───────────────────────────────────────────────────────── */}
      <section style={{ padding: 'clamp(3rem, 6vw, 5rem) 1.5rem', background: '#161616' }}>
        <div style={{ maxWidth: '540px', margin: '0 auto', textAlign: 'center' }}>
          <span style={{
            fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase',
            color: 'var(--gold)', display: 'block', marginBottom: '1rem',
          }}>
            Sobre el autor
          </span>
          <h3 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '1.4rem', fontWeight: 700,
            color: 'var(--text-white)', marginBottom: '1rem',
          }}>
            {product.author.name}
          </h3>
          {product.author.bio.map((paragraph, i) => (
            <p key={i} style={{
              fontSize: '0.95rem',
              color: 'var(--text-light)',
              lineHeight: 1.8,
              marginBottom: i < product.author.bio.length - 1 ? '0.875rem' : '0',
            }}>
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <SocialProof
        quote={product.quote}
        quoteAuthor={product.quoteAuthor}
        guaranteeTitle={product.guaranteeTitle}
        guaranteeText={product.guaranteeText}
      />

      {/* ── CTA Final ───────────────────────────────────────────────────── */}
      <section style={{
        padding: 'clamp(4rem, 8vw, 6rem) 1.5rem',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', bottom: '-20%', left: '50%', transform: 'translateX(-50%)',
          width: '800px', height: '400px',
          background: 'radial-gradient(ellipse, rgba(191,161,89,0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{ maxWidth: '480px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

          {hasCover && (
            <div style={{ marginBottom: '2.5rem', display: 'flex', justifyContent: 'center' }}>
              <Image
                src={product.images.cover!}
                alt={`Portada de ${product.name}`}
                width={220}
                height={300}
                style={{
                  width: 'clamp(140px, 30vw, 220px)',
                  height: 'auto',
                  objectFit: 'cover',
                  boxShadow: '0 20px 60px rgba(191,161,89,0.2)',
                  border: '1px solid rgba(191,161,89,0.2)',
                }}
              />
            </div>
          )}

          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
            fontWeight: 700,
            color: 'var(--text-white)',
            marginBottom: '1rem',
            letterSpacing: '-0.02em',
          }}>
            Dale a tu Pastor Alemán la vida feliz que merece.
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--text-light)', marginBottom: '2rem', lineHeight: 1.7 }}>
            Por solo <strong style={{ color: 'var(--gold)' }}>{product.price}</strong> tienes acceso inmediato.
            Además recibes gratis un mini libro de ilustraciones de pastorcitos para imprimir.
          </p>
          <a href={product.ctaUrl} target="_blank" rel="noopener noreferrer"
            className="btn-primary"
            style={{ fontSize: '1rem', padding: '1.1rem 3rem' }}>
            {product.cta}
          </a>
          <p style={{ marginTop: '1.25rem', fontSize: '0.75rem', color: '#555', lineHeight: 1.6 }}>
            🔒 {product.guarantee}<br />
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