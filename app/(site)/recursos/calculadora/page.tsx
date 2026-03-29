'use client';

// ESTE ARCHIVO VA EN: app/(landing)/calculadora-tiktok/page.tsx
// Para cambiar textos → editá content.ts
// Para cambiar la sección de suscripción → editá components/landing/SubscribeSection.tsx

import { useState } from 'react';
import { calculadora } from './content';
import SubscribeSection from '@/components/landing/SubscribeSection';
import type { Metadata } from 'next';

// ── Helpers ────────────────────────────────────────────────────────────────
function fmt(n: number) {
  return Math.round(n).toLocaleString('es-AR');
}

function fmtMoney(n: number) {
  if (n >= 1_000_000) return '$' + (n / 1_000_000).toFixed(1).replace('.', ',') + 'M';
  if (n >= 1_000)     return '$' + Math.round(n / 1_000).toLocaleString('es-AR') + 'k';
  return '$' + Math.round(n).toLocaleString('es-AR');
}

// ── SliderGroup ────────────────────────────────────────────────────────────
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
            width: inputWidth, fontSize: '0.875rem', fontWeight: 600,
            fontFamily: 'var(--font-body)', color: 'var(--text-dark)',
            background: 'transparent', border: 'none',
            borderBottom: '1px solid #ccc', padding: '0 0 1px',
            textAlign: 'right', outline: 'none', MozAppearance: 'textfield',
          } as React.CSSProperties}
        />
      </div>
      <input
        type="range" id={id} min={min} max={max} step={step} value={value}
        onChange={e => onChange(parseFloat(e.target.value))}
        style={{ width: '100%', accentColor: 'var(--gold)', cursor: 'pointer' }}
      />
    </div>
  );
}

// ── Página ─────────────────────────────────────────────────────────────────
export default function CalculadoraTikTokPage() {
  const [vd,     setVd]     = useState(1.5);
  const [vmin,   setVmin]   = useState(200);
  const [vgood,  setVgood]  = useState(1000);
  const [ctr,    setCtr]    = useState(3);
  const [ticket, setTicket] = useState(10000);
  const [conv,   setConv]   = useState(2);

  const vids         = Math.round(vd * 30);
  const ojosMin      = vids * vmin;
  const ojosGood     = vids * vgood;
  const clicksMin    = Math.round(ojosMin  * ctr / 100);
  const clicksGood   = Math.round(ojosGood * ctr / 100);
  const clientesMin  = Math.round(clicksMin  * conv / 100);
  const clientesGood = Math.round(clicksGood * conv / 100);
  const moneyMin     = clientesMin  * ticket;
  const moneyGood    = clientesGood * ticket;

  return (
    <div style={{ background: 'var(--bg-light)', minHeight: '100vh', fontFamily: 'var(--font-body)' }}>

      {/* ── Calculadora ─────────────────────────────────────────────── */}
      <section style={{ display: 'flex', justifyContent: 'center', padding: 'clamp(3rem, 6vw, 5rem) 1.25rem' }}>
        <div style={{ width: '100%', maxWidth: '520px' }}>

          <style>{`input[type=range] { height: 4px; }`}</style>

          <span style={{
            display: 'inline-block', fontSize: '0.65rem', fontWeight: 600,
            letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-dark)',
            border: '1px solid rgba(191,161,89,0.4)', padding: '0.3rem 0.875rem', marginBottom: '1.25rem',
          }}>
            {calculadora.eyebrow}
          </span>

          <h1 style={{
            fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.75rem, 6vw, 2.5rem)',
            fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.02em',
            color: 'var(--text-dark)', marginBottom: '1rem',
          }}>
            {calculadora.title.split(calculadora.titleAccent).map((part, i, arr) => (
              i < arr.length - 1
                ? <span key={i}>{part}<span style={{ color: '#c0392b' }}>{calculadora.titleAccent}</span></span>
                : <span key={i}>{part}</span>
            ))}
          </h1>

          <p style={{ fontSize: '1rem', color: '#666', lineHeight: 1.65, marginBottom: '2rem' }}>
            {calculadora.subtitle}
          </p>

          <p style={{
            fontSize: '0.8rem', color: '#888', lineHeight: 1.6,
            marginBottom: '1.75rem', paddingBottom: '1.25rem',
            borderBottom: '1px solid rgba(0,0,0,0.1)',
          }}>
            {calculadora.sliderIntro}
          </p>

          <SliderGroup label="Videos por día"               id="vd"    value={vd}    min={0.5} max={5}     step={0.5} onChange={setVd}    inputWidth="60px"  />
          <SliderGroup label="Vistas mínimas por video"     id="vmin"  value={vmin}  min={200} max={5000}  step={100} onChange={setVmin}  />
          <SliderGroup label="Vistas con buen contenido"    id="vgood" value={vgood} min={500} max={50000} step={500} onChange={setVgood} />
          <SliderGroup label="% que visita tu perfil / web" id="ctr"   value={ctr}   min={1}   max={20}    step={1}   onChange={setCtr}   inputWidth="52px"  />

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', margin: '1.75rem 0' }}>
            {[
              { label: 'Videos al mes',                    value: fmt(vids),                              highlight: false, danger: false },
              { label: 'Ojos mínimos perdidos / mes',      value: fmt(ojosMin),                           highlight: false, danger: true  },
              { label: 'Ojos con contenido trabajado',     value: fmt(ojosGood),                          highlight: true,  danger: false },
              { label: 'Visitas perdidas al perfil / web', value: `${fmt(clicksMin)}–${fmt(clicksGood)}`, highlight: false, danger: false },
            ].map(({ label, value, highlight, danger }) => (
              <div key={label} style={{
                background: highlight ? 'rgba(191,161,89,0.1)' : '#ede8e2',
                borderRadius: '6px', padding: '14px',
                border: highlight ? '1px solid rgba(191,161,89,0.3)' : '1px solid transparent',
              }}>
                <div style={{ fontSize: '0.65rem', color: highlight ? 'var(--gold)' : '#888', marginBottom: '4px', lineHeight: 1.3 }}>{label}</div>
                <div style={{
                  fontFamily: 'var(--font-heading)', fontSize: '1.6rem', fontWeight: 700, lineHeight: 1,
                  color: danger ? '#c0392b' : highlight ? 'var(--gold)' : 'var(--text-dark)',
                }}>{value}</div>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', margin: '1.75rem 0 1.5rem' }}>
            <div style={{ flex: 1, height: '1px', background: 'rgba(0,0,0,0.1)' }} />
            <span style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#999', whiteSpace: 'nowrap' }}>Tu negocio</span>
            <div style={{ flex: 1, height: '1px', background: 'rgba(0,0,0,0.1)' }} />
          </div>

          <SliderGroup label="Ticket promedio ($)"       id="ticket" value={ticket} min={0}   max={500000} step={1000} onChange={setTicket} inputWidth="100px" />
          <SliderGroup label="% de conversión a cliente" id="conv"   value={conv}   min={0.1} max={20}     step={0.5}  onChange={setConv}   inputWidth="52px"  />

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', margin: '1.75rem 0 1.5rem' }}>
            <div style={{ flex: 1, height: '1px', background: 'rgba(0,0,0,0.1)' }} />
            <span style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#999', whiteSpace: 'nowrap' }}>Lo que estás perdiendo</span>
            <div style={{ flex: 1, height: '1px', background: 'rgba(0,0,0,0.1)' }} />
          </div>

          <div style={{ background: 'var(--text-dark)', borderRadius: '8px', padding: '1.25rem 1.5rem', marginBottom: '1rem' }}>
            <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4px' }}>
              Ingresos potenciales perdidos / mes
            </div>
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2.25rem', fontWeight: 800, color: 'var(--gold)', lineHeight: 1, marginBottom: '4px' }}>
              {fmtMoney(moneyGood)}
            </div>
            <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.35)' }}>
              Con contenido trabajado (escenario realista)
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '1.5rem' }}>
            {[
              { label: 'Escenario mínimo / mes',  value: fmtMoney(moneyMin) },
              { label: 'Clientes perdidos / mes', value: `${fmt(clientesMin)}–${fmt(clientesGood)}` },
            ].map(({ label, value }) => (
              <div key={label} style={{ background: '#ede8e2', borderRadius: '6px', padding: '12px 14px' }}>
                <div style={{ fontSize: '0.65rem', color: '#888', marginBottom: '3px', lineHeight: 1.3 }}>{label}</div>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#c0392b' }}>{value}</div>
              </div>
            ))}
          </div>

          <p style={{
            fontSize: '0.75rem', color: '#999', textAlign: 'center',
            lineHeight: 1.6, paddingTop: '1rem', borderTop: '1px solid rgba(0,0,0,0.1)',
          }}>
            {calculadora.disclaimer}
          </p>

        </div>
      </section>

      {/* ── Suscripción voluntaria (modular) ────────────────────────── */}
      <SubscribeSection
        heading={calculadora.subscribe.heading}
        subtext={calculadora.subscribe.subtext}
        ctaText={calculadora.subscribe.ctaText}
      />

    </div>
  );
}