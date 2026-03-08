'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navLinks = [
  { href: '/',       label: 'Home',    labelEs: 'Inicio' },
  { href: '/blog',   label: 'Blog',    labelEs: 'Blog'   },
  { href: '/recursos', label: 'Resources', labelEs: 'Recursos' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        borderBottom: '1px solid #2a2a2a',
        background: 'rgba(27,27,27,0.92)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '68px' }}>

        {/* Logo wordmark */}
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
          <span style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 800,
            fontSize: '1.1rem',
            color: 'var(--gold)',
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
          }}>
            Nico Digitals
          </span>
          <span style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 300,
            fontSize: '0.6rem',
            color: 'var(--text-light)',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
          }}>
            by Nico Bernaola
          </span>
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="desktop-nav">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.8rem',
                fontWeight: 500,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                color: pathname === href ? 'var(--gold)' : 'var(--text-light)',
                transition: 'color 0.2s',
                borderBottom: pathname === href ? '1px solid var(--gold)' : '1px solid transparent',
                paddingBottom: '2px',
              }}
            >
              {label}
            </Link>
          ))}
          <a
            href="https://hotmart.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ padding: '0.6rem 1.4rem', fontSize: '0.75rem' }}
          >
            Ver Recursos →
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0.5rem', display: 'none' }}
          className="mobile-menu-btn"
          aria-label="Toggle menu"
        >
          <span style={{ display: 'block', width: '22px', height: '2px', background: menuOpen ? 'var(--gold)' : 'var(--text-light)', marginBottom: '5px', transition: 'all 0.2s', transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
          <span style={{ display: 'block', width: '22px', height: '2px', background: 'var(--text-light)', marginBottom: '5px', opacity: menuOpen ? 0 : 1, transition: 'all 0.2s' }} />
          <span style={{ display: 'block', width: '22px', height: '2px', background: menuOpen ? 'var(--gold)' : 'var(--text-light)', transition: 'all 0.2s', transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          background: '#1e1e1e',
          borderTop: '1px solid #2a2a2a',
          padding: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.25rem',
        }}>
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.875rem',
                fontWeight: 500,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                color: pathname === href ? 'var(--gold)' : 'var(--text-light)',
              }}
            >
              {label}
            </Link>
          ))}
          <a href="https://hotmart.com" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ textAlign: 'center', justifyContent: 'center' }}>
            Ver Recursos →
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </header>
  );
}
