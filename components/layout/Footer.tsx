'use client';
import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{
      borderTop: '1px solid #2a2a2a',
      background: '#161616',
      padding: '4rem 0 2rem',
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '3rem',
          marginBottom: '3rem',
        }}>
          {/* Brand col */}
          <div>
            <span style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 800,
              fontSize: '1.1rem',
              color: 'var(--gold)',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '0.75rem',
            }}>
              Nico Digitals
            </span>
            <p style={{ fontSize: '0.85rem', lineHeight: 1.7, maxWidth: '240px' }}>
              Herramientas, estrategias y recursos para construir tu libertad financiera digital.
            </p>
          </div>

          {/* Nav col */}
          <div>
            <h2 style={{ fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1rem' }}>
              Navegación
            </h2>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {[
                { href: '/', label: 'Inicio' },
                { href: '/blog', label: 'Blog' },
                { href: '/recursos', label: 'Recursos' },
              ].map(({ href, label }) => (
                <Link key={href} href={href} style={{ fontSize: '0.875rem', color: 'var(--text-light)', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-light)')}>
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social col */}
          <div>
            <h3 style={{ fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1rem' }}>
              Seguime
            </h3>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {[
                { href: 'https://instagram.com', label: 'Instagram' },
                { href: 'https://www.facebook.com/profile.php?id=61588267451722', label: 'Facebook' },
                { href: 'https://www.linkedin.com/in/nico-bernaola/?locale=es_ES', label: 'Linkedin' },
              ].map(({ href, label }) => (
                <a key={href} href={href} target="_blank" rel="noopener noreferrer"
                  style={{ fontSize: '0.875rem', color: 'var(--text-light)', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-light)')}>
                  {label} ↗
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid #2a2a2a',
          paddingTop: '1.5rem',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '1rem',
        }}>
          <p style={{ fontSize: '0.75rem', color: '#9ca3af' }}>
            © {year} Nico Digitals · Nico Bernaola. Todos los derechos reservados.
          </p>
          <p style={{ fontSize: '0.75rem', color: '#6b7280' }}>
            Este sitio puede contener enlaces de afiliado.
          </p>
        </div>
      </div>
    </footer>
  );
}
