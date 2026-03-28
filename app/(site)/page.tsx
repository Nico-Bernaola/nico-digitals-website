import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nico Digitals — Aprende a trabajar en el mundo digital',
  description: 'Herramientas, estrategias y recursos recomendados para construir ingresos digitales y crecer. Por Nico Bernaola.',
};

// ─── Section: Hero ──────────────────────────────────────────────────────────
function Hero() {
  return (
    <section style={{
      minHeight: '92vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--bg-dark)',
    }}>
      {/* Subtle grid bg */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        backgroundImage: 'linear-gradient(#2a2a2a 1px, transparent 1px), linear-gradient(90deg, #2a2a2a 1px, transparent 1px)',
        backgroundSize: '60px 60px',
        opacity: 0.18,
      }} />
      {/* Gold glow */}
      <div style={{
        position: 'absolute', top: '-10%', right: '-5%', zIndex: 0,
        width: '600px', height: '600px',
        background: 'radial-gradient(circle, rgba(191,161,89,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1, padding: '6rem 1.5rem' }}>
        <div style={{ maxWidth: '760px' }}>
          <span className="fade-up fade-up-1" style={{
            display: 'inline-block',
            fontFamily: 'var(--font-body)',
            fontSize: '0.7rem',
            fontWeight: 500,
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: 'var(--gold)',
            marginBottom: '1.5rem',
            borderLeft: '2px solid var(--gold)',
            paddingLeft: '0.75rem',
          }}>
            Nico Bernaola · Nico Digitals
          </span>

          <h1 className="fade-up fade-up-2" style={{ marginBottom: '1.5rem' }}>
            Construí tus<br />
            <span style={{ color: 'var(--gold)' }}>sistemas</span><br />
            para trabajar en el mundo digital.
          </h1>

          <p className="fade-up fade-up-3" style={{
            fontSize: '1.1rem',
            lineHeight: 1.8,
            maxWidth: '560px',
            marginBottom: '2.5rem',
            color: 'var(--text-light)',
          }}>
            Recursos, cursos y herramientas que yo mismo uso y recomiendo para trabajar de forma online.
          </p>

          <div className="fade-up fade-up-4" style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            <Link href="/recursos" className="btn-primary">
              Ver recursos →
            </Link>
            <Link href="/blog" className="btn-outline">
              Leer el blog
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Section: About ──────────────────────────────────────────────────────────
function About() {
  return (
    <section className="section bg-mid-section">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          <div>
            <span className="gold-line" style={{ background: 'var(--gold)' }} />
            <span style={{ fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold)', display: 'block', marginBottom: '1rem' }}>
              Quién soy
            </span>
            <h2 style={{ color: 'var(--text-white)', marginBottom: '1.25rem' }}>
              No soy un gurú.<br /> Soy alguien que divulga herramientas para construir tu carrera de freelancing.
            </h2>
            <p style={{ marginBottom: '1rem' }}>
              Empecé desde cero, sin contactos y sin inversión inicial. Aprendí qué funciona y qué no — y acá comparto solo lo que vale la pena.
            </p>
            <p>
              Nico Digitals es mi espacio para documentar mi camino y ayudarte a recorrer el tuyo más rápido.
            </p>
          </div>

          {/* Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            {[
              { num: '100%', label: 'Recursos probados por mí' },
              { num: 'ES / EN', label: 'Contenido bilingüe' },
              { num: 'Hotmart', label: 'Plataforma de confianza' },
              { num: '0→1', label: 'El método que enseño' },
            ].map(({ num, label }) => (
              <div key={label} style={{
                padding: '1.5rem',
                border: '1px solid #2e2e2e',
                background: '#2a2a2a',
              }}>
                <div style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 800,
                  fontSize: '1.6rem',
                  color: 'var(--gold)',
                  marginBottom: '0.35rem',
                }}>
                  {num}
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-light)', lineHeight: 1.4 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Section: What you'll find ────────────────────────────────────────────────
function WhatYoullFind() {
  const items = [
    {
      icon: '🛠',
      title: 'Herramientas Digitales',
      desc: 'Las herramientas que uso en mi negocio digital, ordenadas por categoría y con mi opinión honesta.',
    },
    {
      icon: '📖',
      title: 'Blog & Estrategias',
      desc: 'Artículos prácticos sobre cómo construir ingresos online, productividad y mentalidad de éxito.',
    },
    {
      icon: '🎯',
      title: 'Mentoría & Coaching',
      desc: 'Recursos de mentores que me ayudaron a acelerar mis resultados. Probados, no inventados.',
    },
  ];

  return (
    <section className="section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span style={{ fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold)', display: 'block', marginBottom: '1rem' }}>
            Qué encontrás acá
          </span>
          <h2>Todo lo que necesitás<br />para empezar a escalar.</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
          {items.map(({ icon, title, desc }) => (
            <div key={title} className="card-dark" style={{ padding: '2rem' }}>
              <div style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>{icon}</div>
              <h4 style={{ marginBottom: '0.6rem', color: 'var(--text-white)' }}>{title}</h4>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7 }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Section: Latest posts ───────────────────────────────────────────────────
async function LatestPosts() {
  // Dynamic import to avoid errors if Sanity isn't configured yet
  let posts: Array<{ _id: string; title: string; slug: { current: string }; description: string; publishedAt: string }> = [];
  try {
    const { client } = await import('@/sanity/lib/client');
    const { ALL_POSTS_QUERY } = await import('@/sanity/queries');
    const all = await client.fetch(ALL_POSTS_QUERY);
    posts = all.slice(0, 3);
  } catch {
    // Sanity not configured or no posts yet
  }

  if (posts.length === 0) return null;

  return (
    <section className="section bg-mid-section">
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <span style={{ fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--light)', display: 'block', marginBottom: '0.75rem' }}>
              Blog
            </span>
            <h2 style={{ color: 'var(--text-white)' }}>Últimos artículos</h2>
          </div>
          <Link href="/blog" className="btn-outline" style={{ color: 'var(--text-light)', borderColor: 'var(--text-light)' }}>
            Ver todos →
          </Link>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {posts.map((post) => (
            <Link key={post._id} href={`/blog/${post.slug.current}`} style={{ textDecoration: 'none' }}>
              <article className="post-card" style={{
                padding: '1.75rem',
                border: '1px solid #e0d6cc',
                background: '#fff',
                transition: 'border-color 0.2s, transform 0.2s',
                height: '100%',
              }}
              >
                <time style={{ fontSize: '0.7rem', letterSpacing: '0.1em', color: 'var(--gold)', textTransform: 'uppercase' }}>
                  {new Date(post.publishedAt).toLocaleDateString('es-AR', { year: 'numeric', month: 'short', day: 'numeric' })}
                </time>
                <h3 style={{ fontSize: '1.05rem', margin: '0.6rem 0', color: 'var(--text-dark)', lineHeight: 1.3 }}>{post.title}</h3>
                <p style={{ fontSize: '0.85rem', color: '#666', lineHeight: 1.6 }}>{post.description}</p>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Section: CTA ────────────────────────────────────────────────────────────
function CTA() {
  return (
    <section style={{
      padding: '6rem 0',
      background: 'var(--bg-dark)',
      position: 'relative',
      overflow: 'hidden',
      textAlign: 'center',
    }}>
      <div style={{
        position: 'absolute', bottom: '-20%', left: '50%', transform: 'translateX(-50%)',
        width: '800px', height: '400px',
        background: 'radial-gradient(ellipse, rgba(191,161,89,0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <span style={{ fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold)', display: 'block', marginBottom: '1.25rem' }}>
          Empezá hoy
        </span>
        <h2 style={{ maxWidth: '600px', margin: '0 auto 1.25rem' }}>
          Tu próximo paso hacia tu trabajo remoto.
        </h2>
        <p style={{ maxWidth: '480px', margin: '0 auto 2.5rem', fontSize: '1rem' }}>
          Explorá los recursos que recomiendo y encontrá el que mejor se adapta a tu momento actual.
        </p>
        <Link href="/recursos" className="btn-primary" style={{ fontSize: '0.9rem', padding: '1rem 2.5rem' }}>
          Explorar recursos →
        </Link>
      </div>
    </section>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────
export default async function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <WhatYoullFind />
      <LatestPosts />
      <CTA />
    </>
  );
}
