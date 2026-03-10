// ESTE ARCHIVO VA EN: app/(landing)/mi-pastorcito-feliz/content.ts
//
// ─── INSTRUCCIONES ───────────────────────────────────────────────────────────
// Este es el ÚNICO archivo que editás para cambiar el contenido de la landing.
// El diseño y la estructura están en page.tsx — no lo tocás.
//
// PÁRRAFOS: usá arrays de strings. Cada string es un párrafo separado.
// IMÁGENES: poné null si todavía no tenés la imagen. No rompe nada.
// ─────────────────────────────────────────────────────────────────────────────

export const product = {

  // ── SEO ────────────────────────────────────────────────────────────────────
  // name aparece en el <h1> y en el título de la pestaña del browser
  // description SOLO se usa para Google — el lector no lo ve en la página
  name: 'El Método para Tener un Pastor Alemán Feliz, Saludable y Bien Educado',
  description: 'Aprende paso a paso cómo criar un Pastor Alemán equilibrado, obediente y saludable incluso si eres dueño primerizo.',

  // ── Hero ───────────────────────────────────────────────────────────────────
  // tagline es la frase gancho debajo del título — la promesa principal
  tagline: 'Aprende paso a paso cómo criar un Pastor Alemán equilibrado, obediente y saludable incluso si eres dueño primerizo.',

  // ── Specs (datos visuales en el hero) ──────────────────────────────────────
  pages: '90+ páginas',
  format: 'eBook',
  language: 'Español',

  // ── Precio ─────────────────────────────────────────────────────────────────
  // priceOld aparece tachado para crear sensación de descuento
  price: 'USD 9.99',
  priceOld: 'USD 20',

  // ── CTA (botón de compra) ──────────────────────────────────────────────────
  // ctaUrl: reemplazá '#' por tu link real de Hotmart cuando lo tengas
  cta: 'Quiero el eBook ahora →',
  ctaUrl: 'https://pay.hotmart.com/R104821458N',

  // ── Garantía ───────────────────────────────────────────────────────────────
  guarantee: '7 días de garantía — si no te sirve, te devolvemos el dinero.',

  // ── Sección Problema ───────────────────────────────────────────────────────
  // problem es la pregunta que identifica al lector con su dolor
  // problemBody es un array — cada string es un párrafo separado
  problem: 'La mayoría de los dueños de Pastores Alemanes cometen estos errores',
  problemBody: [
    'Los Pastores Alemanes son perros increíbles, pero también una de las razas más exigentes. Sin el cuidado, entrenamiento y estimulación correctos pueden desarrollar ansiedad, comportamientos destructivos o problemas de salud.',
  ],

  // ── Beneficios ─────────────────────────────────────────────────────────────
  // Cada string del array es una línea del listado con ✓
  benefits: [
    'Cómo educar correctamente a tu Pastor Alemán desde cachorro',
    'Los errores más comunes que arruinan su comportamiento (y cómo evitarlos)',
    'Qué alimentación y cuidados necesita para vivir más y mejor',
    'Cómo reducir ansiedad, estrés y conductas destructivas',
    'Las rutinas de ejercicio y estimulación mental ideales',
    'Cómo crear un vínculo fuerte y saludable con tu perro',
  ],

  // ── Autor ──────────────────────────────────────────────────────────────────
  // bio es un array — cada string es un párrafo separado
  author: {
    name: 'Nico Bernaola',
    bio: [
      'Emprendedor digital y creador de Nico Digitals. Empecé desde cero, sin contactos ni inversión inicial, y construí un negocio online rentable.',
      'Este eBook es el resumen honesto de la crianza de un Pastor Alemán que ya tiene 4 años.',
      'Como todo Pastor Alemán, mi perro es exigente y me obligó a aprender a ser un mejor dueño. En este eBook comparto lo que aprendí para que tu experiencia sea más fácil y feliz.',
    ],
  },

  // ── Imágenes ───────────────────────────────────────────────────────────────
  // Rutas relativas a la carpeta /public de tu proyecto Next.js
  // Estructura recomendada: /public/products/nombre-del-producto/
  //
  // mockup → imagen 3D o en dispositivo (recomendado: 840x960px)
  // cover  → portada plana del eBook (recomendado: 440x600px)
  //
  // Cambiá a null si todavía no tenés la imagen — no rompe nada
  images: {
    mockup: '/products/mi-pastorcito/mockup.png',  // Ejemplo: '/products/ebook-libertad-digital/mockup.png'
    cover:  '/products/mi-pastorcito/cover.png',  // Ejemplo: '/products/ebook-libertad-digital/cover.png'
  },

};
