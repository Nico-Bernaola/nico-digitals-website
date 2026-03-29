'use client';

// ESTE ARCHIVO VA EN: app/(landing)/sistema-edicion-videos/page.tsx

import Link from 'next/link';
import { leadMagnet } from './content';
import SubscribeSection from '@/components/landing/SubscribeSection';

export default function ChecklistLandingPage() {
  return (
    <div style={{ background: 'var(--bg-light)', minHeight: '100vh', fontFamily: 'var(--font-body)' }}>

      {/* ── Header mínimo ───────────────────────────────────────────── */}
      <header style={{
        borderBottom: '1px solid rgba(0,0,0,0.08)',
        padding: '1.25rem 1.5rem',
        display: 'flex',
        justifyContent: 'center',
      }}>
        <Link href="/" style={{ textDecoration: 'none' }}>
          <span style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 800, fontSize: '1rem',
            color: 'var(--gold)', letterSpacing: '0.06em',
            textTransform: 'uppercase',
          }}>
            Nico Digitals
          </span>
        </Link>
      </header>

      {/* ── Contenido ───────────────────────────────────────────────── */}
      <section style={{ padding: 'clamp(3.5rem, 7vw, 6rem) 1.5rem clamp(3rem, 6vw, 5rem)' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>

          <span style={{
            display: 'inline-block',
            fontSize: '0.65rem', fontWeight: 600,
            letterSpacing: '0.2em', textTransform: 'uppercase',
            color: 'var(--gold)', border: '1px solid rgba(191,161,89,0.4)',
            padding: '0.3rem 0.875rem', marginBottom: '1.5rem',
          }}>
            📋 {leadMagnet.format} — Gratis
          </span>

          <h1 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800,
            color: 'var(--text-dark)', lineHeight: 1.1,
            letterSpacing: '-0.02em', marginBottom: '1.25rem',
          }}>
            {leadMagnet.title}
          </h1>

          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.15rem)', color: '#555',
            lineHeight: 1.7, marginBottom: '1.5rem', fontWeight: 500,
          }}>
            {leadMagnet.subtitle}
          </p>

          {leadMagnet.description_body.map((p, i) => (
            <p key={i} style={{
              fontSize: '1rem', color: '#666', lineHeight: 1.8,
              marginBottom: i < leadMagnet.description_body.length - 1 ? '1rem' : '2.5rem',
            }}>
              {p}
            </p>
          ))}

          {/* Specs */}
          <div style={{
            display: 'flex', flexWrap: 'wrap', gap: '2rem',
            marginBottom: '2.5rem', paddingBottom: '2.5rem',
            borderBottom: '1px solid rgba(0,0,0,0.08)',
          }}>
            {[
              { label: 'Formato',   value: leadMagnet.format },
              { label: 'Contenido', value: leadMagnet.items },
              { label: 'Nivel',     value: leadMagnet.level },
            ].map(({ label, value }) => (
              <div key={label}>
                <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#aaa', marginBottom: '0.25rem' }}>{label}</div>
                <div style={{ fontSize: '0.875rem', color: 'var(--text-dark)', fontWeight: 600 }}>{value}</div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <a
            href={leadMagnet.downloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ fontSize: '1rem', padding: '1.1rem 2.5rem', display: 'inline-flex' }}
          >
            {leadMagnet.ctaText}
          </a>
          <p style={{ fontSize: '0.75rem', color: '#bbb', marginTop: '0.75rem' }}>
            Sin registro. Sin tarjeta. Descarga directa.
          </p>

        </div>
      </section>

      {/* ── Suscripción voluntaria (modular) ────────────────────────── */}
      <SubscribeSection
        heading={leadMagnet.subscribeHeading}
        subtext={leadMagnet.subscribeSubtext}
        ctaText={leadMagnet.subscribeCta}
      />

      {/* ── Footer mínimo ───────────────────────────────────────────── */}
      <footer style={{ borderTop: '1px solid rgba(0,0,0,0.08)', padding: '1.5rem', textAlign: 'center' }}>
        <p style={{ fontSize: '0.75rem', color: '#bbb' }}>
          © {new Date().getFullYear()} Nico Digitals ·{' '}
          <Link href="/" style={{ color: 'var(--gold)', textDecoration: 'none' }}>
            nicodigitals.site
          </Link>
          {' · '}
          <Link href="/recursos" style={{ color: '#aaa', textDecoration: 'none' }}>
            Ver todos los recursos
          </Link>
        </p>
      </footer>

    </div>
  );
}