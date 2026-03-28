// ESTE ARCHIVO VA EN: app/(landing)/sistema-edicion-videos/content.ts

export const leadMagnet = {

  // ── SEO ────────────────────────────────────────────────────────────────────
  name: 'Sistema de Edición de Videos — Checklist Gratuita',
  description: 'La checklist para arrancar a editar un video con un sistema claro. Descargá gratis.',

  // ── Hero ───────────────────────────────────────────────────────────────────
  title: 'Sistema de Edición de Videos',
  subtitle: 'La checklist para editar con un sistema, no a los golpes.',
  description_body: [
    'Arrancar a editar sin un sistema es la forma más rápida de perder horas y terminar con un video que no convence a nadie.',
    'Esta checklist te da el orden exacto: qué hacer primero, qué herramienta usar en cada paso, y cómo no perderte en el proceso.',
  ],

  // ── Specs ──────────────────────────────────────────────────────────────────
  format: 'Checklist - Formato HTML',
  items: '4 Secciones con pasos concretos',
  level: 'Principiante',

  // ── CTA de descarga ────────────────────────────────────────────────────────
  downloadUrl: 'https://www.mediafire.com/file/1vky1pvtyijukxl/Sistema_de_edicion_de_videos.html/file',
  ctaText: 'Descargar checklist gratis →',

  // ── Suscripción voluntaria (al final) ──────────────────────────────────────
  subscribeHeading: 'Recibí más recursos gratuitos',
  subscribeSubtext: 'Guías, checklists y herramientas para creadores de contenido. Sin spam, sin relleno.',
  subscribeCta: 'Quiero más recursos →',

  // ── Para la tarjeta en /recursos ───────────────────────────────────────────
  // (recordá agregarlo en app/(site)/recursos/content.ts)
  recursos: {
    id: 'checklist-edicion',
    title: 'Sistema de Edición de Videos',
    description: 'La checklist para editar con un sistema claro. Herramientas, orden y pasos concretos para no perderte en el proceso.',
    image: null,
    category: 'herramienta' as const,
    url: '/sistema-edicion-videos',
    external: false,
    pinned: false,
    date: '2026-03-28',
  },
};