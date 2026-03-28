'use client';

// ESTE ARCHIVO VA EN: app/(landing)/calculadora/page.tsx

import { useState, useCallback } from 'react';
import type { Metadata } from 'next';

// ── Tipos ──────────────────────────────────────────────────────────────────
interface SliderGroupProps {
  label: string;
  id: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (val: number) => void;
  inputWidth?: string;
}

// ── Helpers ────────────────────────────────────────────────────────────────
function fmt(n: number) {
  return Math.round(n).toLocaleString('es-AR');
}

function fmtMoney(n: number) {
  if (n >= 1_000_000) return '$' + (n / 1_000_000).toFixed(1).replace('.', ',') + 'M';
  if (n >= 1_000)     return '$' + Math.round(n / 1_000).toLocaleString('es-AR') + 'k';
  return '$' + Math.round(n).toLocaleString('es-AR');
}

// ── Componente SliderGroup ─────────────────────────────────────────────────
function SliderGroup({ label, id, value, min, max, step, onChange, inputWidth = '72px' }: SliderGroupProps) {
  return (
    <div style={{ marginBottom: '1.25rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '6px' }}>
        <label htmlFor={id} style={{ fontSize: '0.8rem', color: '#666' }}>{label}</label>
        <input
          type="number"
          value={value}
          min={min}
          max={max}
          step={step}
          onChange={e => {
            const v = parseFloat(e.target.value);
            if (!isNaN(v)) onChange(Math.min(Math.max(v, min), max));
          }}
          style={{
            width: inputWidth,
            fontSize: '0.875rem',
            fontWeight: 600,
            fontFamily: 'var(--font-body)',
            color: 'var(--text-dark)',
            background: 'transparent',
            border: 'none',
            borderBottom: '1px solid #ccc',
            padding: '0 0 1px',
            textAlign: 'right',
            outline: 'none',
            MozAppearance: 'textfield',
          } as React.CSSProperties}
        />
      </div>
      <input
        type="range"
        id={id}
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={e => onChange(parseFloat(e.target.value))}
        style={{ width: '100%', accentColor: 'var(--gold)', cursor: 'pointer' }}
      />
    </div>
  );
}

// ── Componente principal ───────────────────────────────────────────────────
export default function CalculadoraTikTokPage() {
  const [email, setEmail]       = useState('');
  const [unlocked, setUnlocked] = useState(false);
  const [emailError, setEmailError] = useState(false);

  // Sliders — TikTok
  const [vd,    setVd]    = useState(1.5);
  const [vmin,  setVmin]  = useState(200);
  const [vgood, setVgood] = useState(1000);
  const [ctr,   setCtr]   = useState(3);
  // Sliders — Negocio
  const [ticket, setTicket] = useState(10000);
  const [conv,   setConv]   = useState(2);

  // Cálculos derivados
  const vids        = Math.round(vd * 30);
  const ojosMin     = vids * vmin;
  const ojosGood    = vids * vgood;
  const clicksMin   = Math.round(ojosMin  * ctr / 100);
  const clicksGood  = Math.round(ojosGood * ctr / 100);
  const clientesMin  = Math.round(clicksMin  * conv / 100);
  const clientesGood = Math.round(clicksGood * conv / 100);
  const moneyMin    = clientesMin  * ticket;
  const moneyGood   = clientesGood * ticket;

  const unlock = useCallback(() => {
    if (!email || !email.includes('@')) {
      setEmailError(true);
      return;
    }
    setEmailError(false);
    // Acá conectás tu lógica de backend / lista de correos
    // fetch('/api/subscribe', { method: 'POST', body: JSON.stringify({ email }) })
    setUnlocked(true);
  }, [email]);

  return (
    <div style={{
      background: 'var(--bg-light)',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '3rem 1.25rem',
      fontFamily: 'var(--font-body)',
    }}>
      <main style={{ width: '100%', maxWidth: '520px' }}>

        {/* ── Eyebrow ─────────────────────────────────────────────────── */}
        <span style={{
          display: 'inline-block',
          fontSize: '0.65rem',
          fontWeight: 600,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'var(--text-dark)',
          border: '1px solid rgba(191,161,89,0.4)',
          padding: '0.3rem 0.875rem',
          marginBottom: '1.25rem',
        }}>
          Costo de inacción
        </span>

        {/* ── H1 ──────────────────────────────────────────────────────── */}
        <h1 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(1.75rem, 6vw, 2.5rem)',
          fontWeight: 800,
          lineHeight: 1.1,
          letterSpacing: '-0.02em',
          color: 'var(--text-dark)',
          marginBottom: '1rem',
        }}>
          ¿Cuántos ojos estás{' '}
          <span style={{ color: '#c0392b' }}>perdiendo</span>{' '}
          cada mes?
        </h1>

        <p style={{
          fontSize: '1rem',
          color: '#666',
          lineHeight: 1.65,
          marginBottom: '2rem',
        }}>
          Calculá en 30 segundos lo que tu negocio deja pasar por no tener contenido en TikTok. Gratis.
        </p>

        {/* ── Gate ────────────────────────────────────────────────────── */}
        {!unlocked && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <input
              type="email"
              placeholder="tu@email.com"
              value={email}
              onChange={e => { setEmail(e.target.value); setEmailError(false); }}
              onKeyDown={e => e.key === 'Enter' && unlock()}
              style={{
                width: '100%',
                padding: '0.875rem 1rem',
                fontSize: '0.95rem',
                fontFamily: 'var(--font-body)',
                border: `1px solid ${emailError ? '#c0392b' : 'rgba(0,0,0,0.15)'}`,
                borderRadius: '4px',
                background: '#fff',
                color: 'var(--text-dark)',
                outline: 'none',
              }}
            />
            {emailError && (
              <p style={{ fontSize: '0.75rem', color: '#c0392b', marginTop: '-4px' }}>
                Ingresá un email válido para continuar.
              </p>
            )}
            <button
              onClick={unlock}
              className="btn-primary"
              style={{ width: '100%', fontSize: '0.95rem', padding: '0.875rem', justifyContent: 'center' }}
            >
              Ver mi calculadora →
            </button>
            <p style={{ fontSize: '0.75rem', color: '#999', textAlign: 'center' }}>
              Sin spam. Solo la calculadora.
            </p>
          </div>
        )}

        {/* ── Calculadora ─────────────────────────────────────────────── */}
        {unlocked && (
          <div style={{ animation: 'fadeUp 0.4s ease both' }}>
            <style>{`
              @keyframes fadeUp {
                from { opacity: 0; transform: translateY(12px); }
                to   { opacity: 1; transform: translateY(0); }
              }
              input[type=range] { height: 4px; }
            `}</style>

            <p style={{
              fontSize: '0.8rem',
              color: '#888',
              marginBottom: '1.75rem',
              paddingBottom: '1.25rem',
              borderBottom: '1px solid rgba(0,0,0,0.1)',
              lineHeight: 1.6,
            }}>
              Mové los sliders o escribí tus propios números. Todos los valores empiezan en el{' '}
              <strong style={{ color: 'var(--text-dark)', fontWeight: 600 }}>piso mínimo garantizado</strong>{' '}
              de TikTok.
            </p>

            {/* Sliders TikTok */}
            <SliderGroup label="Videos por día"           id="vd"    value={vd}    min={0.5}  max={5}     step={0.5}  onChange={setVd}    inputWidth="60px" />
            <SliderGroup label="Vistas mínimas por video" id="vmin"  value={vmin}  min={200}  max={5000}  step={100}  onChange={setVmin}  />
            <SliderGroup label="Vistas con buen contenido"id="vgood" value={vgood} min={500}  max={50000} step={500}  onChange={setVgood} />
            <SliderGroup label="% que visita tu perfil / web" id="ctr" value={ctr} min={1}    max={20}    step={1}    onChange={setCtr}   inputWidth="52px" />

            {/* Métricas TikTok */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '10px',
              margin: '1.75rem 0',
            }}>
              {[
                { label: 'Videos al mes',                    value: fmt(vids),                          highlight: false, danger: false },
                { label: 'Ojos mínimos perdidos / mes',      value: fmt(ojosMin),                       highlight: false, danger: true  },
                { label: 'Ojos con contenido trabajado',     value: fmt(ojosGood),                      highlight: true,  danger: false },
                { label: 'Visitas perdidas al perfil / web', value: `${fmt(clicksMin)}–${fmt(clicksGood)}`, highlight: false, danger: false },
              ].map(({ label, value, highlight, danger }) => (
                <div key={label} style={{
                  background: highlight ? 'rgba(191,161,89,0.1)' : '#ede8e2',
                  borderRadius: '6px',
                  padding: '14px',
                  border: highlight ? '1px solid rgba(191,161,89,0.3)' : '1px solid transparent',
                }}>
                  <div style={{ fontSize: '0.65rem', color: highlight ? 'var(--gold)' : '#888', marginBottom: '4px', lineHeight: 1.3 }}>{label}</div>
                  <div style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.6rem',
                    fontWeight: 700,
                    color: danger ? '#c0392b' : highlight ? 'var(--gold)' : 'var(--text-dark)',
                    lineHeight: 1,
                  }}>{value}</div>
                </div>
              ))}
            </div>

            {/* Separador */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', margin: '1.75rem 0 1.5rem' }}>
              <div style={{ flex: 1, height: '1px', background: 'rgba(0,0,0,0.1)' }} />
              <span style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#999', whiteSpace: 'nowrap' }}>Tu negocio</span>
              <div style={{ flex: 1, height: '1px', background: 'rgba(0,0,0,0.1)' }} />
            </div>

            {/* Sliders negocio */}
            <SliderGroup label="Ticket promedio ($)"        id="ticket" value={ticket} min={0}   max={500000} step={1000} onChange={setTicket} inputWidth="100px" />
            <SliderGroup label="% de conversión a cliente"  id="conv"   value={conv}   min={0.1} max={20}     step={0.5}  onChange={setConv}   inputWidth="52px"  />

            {/* Separador */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', margin: '1.75rem 0 1.5rem' }}>
              <div style={{ flex: 1, height: '1px', background: 'rgba(0,0,0,0.1)' }} />
              <span style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#999', whiteSpace: 'nowrap' }}>Lo que estás perdiendo</span>
              <div style={{ flex: 1, height: '1px', background: 'rgba(0,0,0,0.1)' }} />
            </div>

            {/* Money card principal */}
            <div style={{
              background: 'var(--text-dark)',
              borderRadius: '8px',
              padding: '1.25rem 1.5rem',
              marginBottom: '1rem',
            }}>
              <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4px' }}>
                Ingresos potenciales perdidos / mes
              </div>
              <div style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '2.25rem',
                fontWeight: 800,
                color: 'var(--gold)',
                lineHeight: 1,
                marginBottom: '4px',
              }}>
                {fmtMoney(moneyGood)}
              </div>
              <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.35)' }}>
                Con contenido trabajado (escenario realista)
              </div>
            </div>

            {/* Money grid secundaria */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '1.5rem' }}>
              {[
                { label: 'Escenario mínimo / mes', value: fmtMoney(moneyMin) },
                { label: 'Clientes perdidos / mes', value: `${fmt(clientesMin)}–${fmt(clientesGood)}` },
              ].map(({ label, value }) => (
                <div key={label} style={{ background: '#ede8e2', borderRadius: '6px', padding: '12px 14px' }}>
                  <div style={{ fontSize: '0.65rem', color: '#888', marginBottom: '3px', lineHeight: 1.3 }}>{label}</div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#c0392b' }}>{value}</div>
                </div>
              ))}
            </div>

            <p style={{
              fontSize: '0.75rem',
              color: '#999',
              textAlign: 'center',
              lineHeight: 1.6,
              paddingTop: '1rem',
              borderTop: '1px solid rgba(0,0,0,0.1)',
            }}>
              Números conservadores. Sin viralización, sin acumulación de seguidores,<br />
              sin efecto compuesto. Solo el piso.
            </p>
          </div>
        )}

      </main>
    </div>
  );
}
