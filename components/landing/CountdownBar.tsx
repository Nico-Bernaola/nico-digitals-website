'use client';

// ESTE ARCHIVO VA EN: components/landing/CountdownBar.tsx
//
// Contador de 1 hora que empieza cuando el usuario entra.
// Se guarda en sessionStorage — si cierra y vuelve a abrir, reinicia.
// Si la hora se acaba, muestra un mensaje de urgencia máxima.

import { useEffect, useState } from 'react';

const DURATION = 60 * 60; // 1 hora en segundos

export default function CountdownBar({ offerText = 'Oferta por tiempo limitado' }: { offerText?: string }) {
  const [timeLeft, setTimeLeft] = useState<number | null>(null);
  const [expired, setExpired] = useState(false);

  useEffect(() => {
    const key = 'nd_countdown_end';
    const stored = sessionStorage.getItem(key);
    const now = Math.floor(Date.now() / 1000);

    let endTime: number;

    if (stored) {
      endTime = parseInt(stored, 10);
    } else {
      endTime = now + DURATION;
      sessionStorage.setItem(key, String(endTime));
    }

    const remaining = endTime - now;
    if (remaining <= 0) {
      setExpired(true);
      return;
    }

    setTimeLeft(remaining);

    const interval = setInterval(() => {
      const left = endTime - Math.floor(Date.now() / 1000);
      if (left <= 0) {
        clearInterval(interval);
        setExpired(true);
        setTimeLeft(0);
      } else {
        setTimeLeft(left);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const format = (seconds: number) => {
    const h = Math.floor(seconds / 3600).toString().padStart(2, '0');
    const m = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return { h, m, s };
  };

  if (timeLeft === null) return null;

  const { h, m, s } = format(timeLeft);

  return (
    <div style={{
      position: 'sticky',
      top: 0,
      zIndex: 200,
      background: expired ? '#7a1a1a' : 'var(--gold)',
      padding: '0.6rem 1.5rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '1rem',
      flexWrap: 'wrap',
    }}>
      {expired ? (
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.85rem',
          fontWeight: 600,
          color: '#fff',
          textAlign: 'center',
          margin: 0,
          letterSpacing: '0.02em',
        }}>
          ⚠️ Esta oferta ya expiró — el precio puede haber cambiado.
        </p>
      ) : (
        <>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.8rem',
            fontWeight: 600,
            color: 'var(--bg-dark)',
            margin: 0,
            letterSpacing: '0.02em',
          }}>
            🔥 {offerText}
          </p>

          {/* Timer */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            {[{ val: h, label: 'hs' }, { val: m, label: 'min' }, { val: s, label: 'seg' }].map(({ val, label }, i) => (
              <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <div style={{
                  background: 'var(--bg-dark)',
                  color: 'var(--gold)',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 800,
                  fontSize: '1rem',
                  padding: '0.2rem 0.5rem',
                  borderRadius: '3px',
                  minWidth: '2.2rem',
                  textAlign: 'center',
                  lineHeight: 1.3,
                }}>
                  {val}
                  <div style={{ fontSize: '0.45rem', color: '#888', fontWeight: 400, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    {label}
                  </div>
                </div>
                {i < 2 && (
                  <span style={{ color: 'var(--bg-dark)', fontWeight: 800, fontSize: '1rem' }}>:</span>
                )}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
