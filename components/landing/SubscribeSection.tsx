'use client';

// ESTE ARCHIVO VA EN: components/landing/SubscribeSection.tsx

import { useState } from 'react';

interface SubscribeSectionProps {
  heading?: string;
  subtext?: string;
  ctaText?: string;
}

interface FormErrors {
  firstName?: string;
  email?: string;
}

export default function SubscribeSection({
  heading = 'Suscribete para recibir más recursos gratuitos',
  subtext = 'Guías, checklists y herramientas para creadores de contenido. Sin spam, sin relleno.',
  ctaText = 'Quiero más recursos →',
}: SubscribeSectionProps) {
  const [firstName, setFirstName] = useState('');
  const [lastName,  setLastName]  = useState('');
  const [email,     setEmail]     = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errors,    setErrors]    = useState<FormErrors>({});

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!firstName.trim()) newErrors.firstName = 'El nombre es obligatorio.';
    if (!email || !email.includes('@')) newErrors.email = 'Ingresá un email válido.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubscribe = async () => {
    if (!validate()) return;

    const res = await fetch('/api/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        firstName: firstName.trim(),
        lastName: lastName.trim(),
      }),
    });

    if (!res.ok) return;
    setSubmitted(true);
  };

  return (
    <section className="section-sm bg-light-section" style={{ borderTop: '1px solid rgba(0,0,0,0.08)' }}>
      <div className="container-sm" style={{ textAlign: 'center' }}>

        <h2 style={{ fontSize: 'clamp(1.2rem, 3vw, 1.6rem)', marginBottom: '0.75rem' }}>
          {heading}
        </h2>
        <p style={{ fontSize: '0.925rem', marginBottom: '1.75rem' }}>
          {subtext}
        </p>

        {!submitted ? (
          <div style={{ maxWidth: '420px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '12px', textAlign: 'left' }}>

            {/* Nombre y Apellido */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <label style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#666' }}>
                  Nombre <span style={{ color: '#c0392b' }}>*</span>
                </label>
                <input
                  type="text"
                  placeholder="Juan"
                  value={firstName}
                  onChange={e => { setFirstName(e.target.value); setErrors(p => ({ ...p, firstName: undefined })); }}
                  style={{
                    width: '100%', padding: '0.75rem 1rem',
                    fontSize: '0.875rem', fontFamily: 'var(--font-body)',
                    border: `1px solid ${errors.firstName ? '#c0392b' : 'rgba(0,0,0,0.15)'}`,
                    borderRadius: '4px', background: '#fff',
                    color: 'var(--text-dark)', outline: 'none',
                  }}
                />
                {errors.firstName && (
                  <p style={{ fontSize: '0.7rem', color: '#c0392b', margin: 0 }}>{errors.firstName}</p>
                )}
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <label style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#666' }}>
                  Apellido <span style={{ fontSize: '0.65rem', fontWeight: 400, color: '#aaa', textTransform: 'none', letterSpacing: 0 }}>(opcional)</span>
                </label>
                <input
                  type="text"
                  placeholder="Pérez"
                  value={lastName}
                  onChange={e => setLastName(e.target.value)}
                  style={{
                    width: '100%', padding: '0.75rem 1rem',
                    fontSize: '0.875rem', fontFamily: 'var(--font-body)',
                    border: '1px solid rgba(0,0,0,0.15)',
                    borderRadius: '4px', background: '#fff',
                    color: 'var(--text-dark)', outline: 'none',
                  }}
                />
              </div>
            </div>

            {/* Email */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <label style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#666' }}>
                Email <span style={{ color: '#c0392b' }}>*</span>
              </label>
              <input
                type="email"
                placeholder="tu@email.com"
                value={email}
                onChange={e => { setEmail(e.target.value); setErrors(p => ({ ...p, email: undefined })); }}
                onKeyDown={e => e.key === 'Enter' && handleSubscribe()}
                style={{
                  width: '100%', padding: '0.75rem 1rem',
                  fontSize: '0.875rem', fontFamily: 'var(--font-body)',
                  border: `1px solid ${errors.email ? '#c0392b' : 'rgba(0,0,0,0.15)'}`,
                  borderRadius: '4px', background: '#fff',
                  color: 'var(--text-dark)', outline: 'none',
                }}
              />
              {errors.email && (
                <p style={{ fontSize: '0.7rem', color: '#c0392b', margin: 0 }}>{errors.email}</p>
              )}
            </div>

            <button onClick={handleSubscribe} className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
              {ctaText}
            </button>

            <p style={{ fontSize: '0.7rem', color: '#aaa', textAlign: 'center', margin: 0 }}>
              Sin spam. Te podés dar de baja cuando quieras.
            </p>
          </div>
        ) : (
          <div style={{
            maxWidth: '420px', margin: '0 auto',
            padding: '1.5rem',
            background: 'rgba(191,161,89,0.08)',
            border: '1px solid rgba(191,161,89,0.3)',
            borderRadius: '4px',
          }}>
            <p style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-dark)', marginBottom: '0.25rem' }}>
              ¡Listo, te agregué! 🎉
            </p>
            <p style={{ fontSize: '0.85rem', color: '#888', margin: 0 }}>
              Vas a recibir los próximos recursos directamente en tu email.
            </p>
          </div>
        )}

      </div>
    </section>
  );
}