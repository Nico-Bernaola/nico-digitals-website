// ESTE ARCHIVO VA EN: components/landing/SocialProof.tsx
//
// Sección de autoridad para lanzamientos sin reviews aún.
// Basada en: quote/promesa del autor + garantía visual destacada.
// Editá las props desde content.ts — no toques este archivo.

interface SocialProofProps {
  quote: string;
  quoteAuthor: string;
  guaranteeTitle: string;
  guaranteeText: string[];
}

export default function SocialProof({
  quote,
  quoteAuthor,
  guaranteeTitle,
  guaranteeText,
}: SocialProofProps) {
  return (
    <section style={{ padding: 'clamp(3rem, 6vw, 5rem) 1.5rem', background: '#161616' }}>
      <div style={{ maxWidth: '760px', margin: '0 auto' }}>

        {/* Quote */}
        <div style={{
          borderLeft: '3px solid var(--gold)',
          paddingLeft: '2rem',
          marginBottom: '3.5rem',
          position: 'relative',
        }}>
          <span style={{
            position: 'absolute',
            top: '-1rem',
            left: '1.5rem',
            fontFamily: 'Georgia, serif',
            fontSize: '4rem',
            color: 'var(--gold)',
            opacity: 0.3,
            lineHeight: 1,
            userSelect: 'none',
          }}>
            "
          </span>
          <blockquote style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
            fontWeight: 600,
            color: 'var(--text-white)',
            lineHeight: 1.5,
            fontStyle: 'italic',
            margin: '0 0 1rem',
          }}>
            {quote}
          </blockquote>
          <cite style={{
            fontSize: '0.8rem',
            color: 'var(--gold)',
            fontStyle: 'normal',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            fontWeight: 600,
          }}>
            — {quoteAuthor}
          </cite>
        </div>

        {/* Garantía */}
        <div style={{
          border: '1px solid rgba(191,161,89,0.3)',
          background: 'rgba(191,161,89,0.04)',
          padding: 'clamp(1.5rem, 4vw, 2.5rem)',
          display: 'flex',
          gap: '1.5rem',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
        }}>
          <div style={{
            fontSize: '2.5rem',
            flexShrink: 0,
            lineHeight: 1,
          }}>
            🛡️
          </div>
          <div style={{ flex: 1, minWidth: '200px' }}>
            <h3 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.1rem',
              fontWeight: 700,
              color: 'var(--gold)',
              marginBottom: '0.75rem',
              letterSpacing: '-0.01em',
            }}>
              {guaranteeTitle}
            </h3>
            {guaranteeText.map((paragraph, i) => (
              <p key={i} style={{
                fontSize: '0.9rem',
                color: 'var(--text-light)',
                lineHeight: 1.7,
                marginBottom: i < guaranteeText.length - 1 ? '0.75rem' : '0',
              }}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
