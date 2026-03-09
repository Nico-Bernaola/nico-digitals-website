// ESTE ARCHIVO VA EN: app/(landing)/ebook-libertad-digital/page.tsx
// URL: nicodigitals.site/ebook-libertad-digital
//
// IMÁGENES — copiá tus archivos en public/products/ebook-libertad-digital/
//   mockup.png   → mockup del producto (dispositivo o 3D render)
//   cover.png    → portada plana del eBook
//
// Si no tenés imágenes todavía, el componente las oculta automáticamente
// cuando la ruta no existe — no rompe nada.

import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

// ─── Editá solo este objeto para cada nuevo producto ────────────────────────
const product = {
  name: 'El Método para Tener un Pastor Alemán Feliz, Saludable y Bien Educado',
  tagline: 'Aprende paso a paso cómo criar un Pastor Alemán equilibrado, obediente y saludable incluso si eres dueño primerizo.',
  problem: 'La mayoría de los dueños de Pastores Alemanes cometen estos errores',
  problemBody: 'Los Pastores Alemanes son perros increíbles, pero también una de las razas más exigentes. Sin el cuidado, entrenamiento y estimulación correctos pueden desarrollar ansiedad, destructivos o problemas de salud.',
  description: 'Una guía práctica y directa para dueños de Pastores Alemanes.',
  cta: 'Quiero el eBook ahora →',
  ctaUrl: '#', // Reemplazá con tu link de Hotmart
  price: 'USD 9,99',
  priceOld: 'USD 20',
  guarantee: ' 7 días de garantía — si no te sirve, te devolvemos el dinero.',
  benefits: [
    'Cómo educar correctamente a tu Pastor Alemán desde cachorro',
    'Los errores más comunes que arruinan su comportamiento (y cómo evitarlos)',
    'Qué alimentación y cuidados necesita para vivir más y mejor',
    'Cómo reducir ansiedad, estrés y conductas destructivas',
    'Las rutinas de ejercicio y estimulación mental ideales',
    'Cómo crear un vínculo fuerte y saludable con tu perro',
  ],
  author: {
    name: 'Nico Bernaola',
    bio: 'Dueño de un Hermoso Pastor de 4 Años, sé lo cuesta mantener los cuidados de un Perro tan Especial como un Pastor Alemán. En esta guía de más de 90 páginas, puse todo mi amor y experiencia con mi Pastorcito para entregarte la Guía definitiva.',
  },
  pages: '90+ páginas',
  format: 'PDF descargable',
  language: 'Español',
  // Rutas relativas a /public — cambiá por null si no tenés la imagen todavía
  images: {
    mockup: '/products/mi-pastorcito/cover.png',
    cover:  '/products/mi-pastorcito/mockup.png',
  },
};
// ────────────────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: product.name,
  description: product.description,
  robots: { index: false, follow: false },
};

export default function EbookLandingPage() {
  const hasMockup = !!product.images.mockup;
  const hasCover  = !!product.images.cover;

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
        padding: 'clamp(4rem, 8vw, 7rem) 1.5rem clamp(3rem, 6vw, 5rem)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Glow */}
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
          {/* Text side */}
          <div style={{ maxWidth: hasMockup ? 'none' : '680px', margin: hasMockup ? '0' : '0 auto', textAlign: hasMockup ? 'left' : 'center' }}>
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
              📖 eBook Digital — {product.pages}
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
                { label: 'Formato', value: product.format },
                { label: 'Idioma', value: product.language },
                { label: 'Extensión', value: product.pages },
              ].map(({ label, value }) => (
                <div key={label}>
                  <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#555', marginBottom: '0.2rem' }}>{label}</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-white)', fontWeight: 500 }}>{value}</div>
                </div>
              ))}
            </div>

            {/* Price + CTA */}
            <div style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '0.9rem', color: '#555', textDecoration: 'line-through' }}>
                {product.priceOld}
              </span>
              <span style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '2rem',
                fontWeight: 800,
                color: 'var(--gold)',
              }}>
                {product.price}
              </span>
            </div>

            <a
              href={product.ctaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ fontSize: '1rem', padding: '1.1rem 2.5rem', display: 'inline-flex' }}
            >
              {product.cta}
            </a>

            <p style={{ fontSize: '0.75rem', color: '#555', marginTop: '0.75rem' }}>
              🔒 {product.guarantee}
            </p>
          </div>

          {/* Mockup image */}
          {hasMockup && (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <div style={{ position: 'relative', width: '100%', maxWidth: '420px' }}>
                <Image
                  src={product.images.mockup!}
                  alt={`Mockup de ${product.name}`}
                  width={420}
                  height={480}
                  style={{
                    width: '100%',
                    height: 'auto',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 24px 48px rgba(191,161,89,0.15))',
                  }}
                  priority
                />
              </div>
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
            marginBottom: '1.25rem',
            letterSpacing: '-0.02em',
          }}>
            {product.problem}
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--text-light)', lineHeight: 1.8 }}>
            {product.problemBody}
          </p>
        </div>
      </section>

      {/* ── Beneficios ──────────────────────────────────────────────────── */}
      <section style={{ padding: 'clamp(3rem, 6vw, 5rem) 1.5rem' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span style={{
              fontSize: '0.7rem',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              display: 'block',
              marginBottom: '0.75rem',
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
              Cómo este ebook transformará la vida de tu Pastor Alemán.
            </h2>
          </div>

          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
            {product.benefits.map((benefit) => (
              <li key={benefit} style={{
                display: 'flex',
                gap: '1rem',
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
            fontSize: '0.7rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--gold)',
            display: 'block',
            marginBottom: '1rem',
          }}>
            Sobre el autor
          </span>
          <h3 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '1.4rem',
            fontWeight: 700,
            color: 'var(--text-white)',
            marginBottom: '0.75rem',
          }}>
            {product.author.name}
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-light)', lineHeight: 1.8 }}>
            {product.author.bio}
          </p>
        </div>
      </section>

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

          {/* Cover image sobre el CTA */}
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
            Tu próximo paso empieza aquí.
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--text-light)', marginBottom: '2rem', lineHeight: 1.7 }}>
            Por solo <strong style={{ color: 'var(--gold)' }}>{product.price}</strong> tenés acceso inmediato al eBook completo.
          </p>
          <a
            href={product.ctaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ fontSize: '1rem', padding: '1.1rem 3rem' }}
          >
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