// ESTE ARCHIVO VA EN: app/(landing)/afiliados-mi-pastorcito/content.ts
//
// ─── INSTRUCCIONES ───────────────────────────────────────────────────────────
// Este es el ÚNICO archivo que editás para cada landing de afiliados.
// El diseño está en page.tsx — no lo tocás.
//
// WHATSAPP: reemplazá el número con tu número real (formato internacional sin +)
// MATERIALES: cada item del array es una línea del listado
// ─────────────────────────────────────────────────────────────────────────────

export const programa = {

  // ── SEO ────────────────────────────────────────────────────────────────────
  // Solo para el título de la pestaña — afiliados no viene de Google orgánico
  name: 'Programa de Afiliados — El Método del Pastor Alemán Feliz',
  description: 'Promové un producto de nicho con alta conversión y comisiones del 50%. Materiales listos para usar.',

  // ── Hero ───────────────────────────────────────────────────────────────────
  productName: 'Gana Dinero en remoto sin experiencia previa con un producto de alto valor para un nicho apasionado',
  tagline: 'Un nicho apasionado con muchos clientes potenciales, un producto que resuelve un problema real, y comisiones del 70%. Producto con alta demanda en un mercado de nicho que no para de crecer.',

  // ── Números clave (aparecen destacados arriba) ─────────────────────────────
  stats: [
    { value: '70%',     label: 'Comisión por venta' },
    { value: 'USD 6',   label: 'Ganancias estimadas por venta' },
    { value: 'ETERNA', label: 'Cookie duration' },
    { value: 'USD 9.99', label: 'Ticket del producto' },
  ],

  // ── Por qué convierte ──────────────────────────────────────────────────────
  // Cada string es un párrafo separado
  whyConverts: [
    'El nicho de mascotas es uno de los más rentables y apasionados del mercado hispano. Los dueños de Pastores Alemanes gastan sin dudar en el bienestar de sus perros.',
    'El precio de entrada es bajo (USD 9.99) — lo que elimina la fricción de compra y dispara la tasa de conversión. Es un producto fácil de vender.',
    'La landing page está construida con estándares profesionales de CRO: copy directo, countdown de urgencia, garantía visible y diseño que genera confianza desde el primer scroll.',
  ],

  // ── Comisiones ─────────────────────────────────────────────────────────────
  commission: {
    percentage: '70%',
    perSale: 'USD 6',
    cookieDays: 'ETERNA',
    platform: 'Hotmart',
    notes: 'El pago se procesa automáticamente por Hotmart. Sin intermediarios, sin demoras.',
  },

  // ── Materiales disponibles ─────────────────────────────────────────────────
  // Cada string es un ítem del listado — editá según lo que realmente tengas
  materials: [
    'Copy de anuncio listo para Facebook e Instagram Ads',
    'Copies para historias de Instagram (formato corto)',
    'Imágenes optimizadas para ads (tres variantes)',
    'Imagen de portada del producto en alta resolución',
  ],

  // ── CTA — Hotmart Afiliados ─────────────────────────────────────────────────────────
  affiliateUrl: 'https://affiliate.hotmart.com/affiliate-recruiting/view/7762M104821479',
  ctaText: 'Quiero ser afiliado →',

  // ── Sobre el productor ─────────────────────────────────────────────────────
  // bio es un array — cada string es un párrafo
  producer: {
    name: 'Nico Bernaola',
    role: 'Productor — Nico Digitals',
    bio: [
      'Soy el productor de este eBook y el creador de Nico Digitals. Trabajo con afiliados seleccionados — prefiero calidad sobre cantidad.',
      'Si eres serio con el marketing de afiliados y quieres un producto de nicho con conversión probada, hablemos.',
    ],
  },

  // ── Imagen del producto ────────────────────────────────────────────────────
  // Misma ruta que usás en la landing de clientes — reutilizás la misma imagen
  productImage: '/products/mi-pastorcito/cover.png',

};