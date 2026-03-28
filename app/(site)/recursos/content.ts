// ESTE ARCHIVO VA EN: app/(site)/recursos/content.ts
//
// ─── INSTRUCCIONES ───────────────────────────────────────────────────────────
// Este es el ÚNICO archivo que editás para agregar o modificar recursos.
// El diseño y la grilla están en page.tsx — no lo tocás.
//
// CAMPOS:
//   id          → identificador único, sin espacios (ej: 'checklist-edicion')
//   title       → nombre del recurso
//   description → párrafo corto que aparece en la tarjeta
//   image       → ruta desde /public (ej: '/products/mi-producto/cover.png') o null
//   category    → 'ebook' | 'curso' | 'herramienta' | 'coaching' | 'blog'
//   url         → landing propia (/mi-landing), link externo, o /blog/slug
//   external    → true si el link sale del sitio (abre en nueva pestaña)
//   pinned      → true para los que aparecen primero (máx 3 recomendado)
//   date        → fecha de publicación 'YYYY-MM-DD' (para ordenar el resto)
// ─────────────────────────────────────────────────────────────────────────────

export type Category = 'ebook' | 'curso' | 'herramienta' | 'coaching' | 'blog';

export interface Resource {
  id: string;
  title: string;
  description: string;
  image: string | null;
  category: Category;
  url: string;
  external: boolean;
  pinned: boolean;
  date: string;
}

export const recursos: Resource[] = [

  // ── FIJADOS (pinned: true) — aparecen siempre primero ────────────────────
  {
    id: 'checklist-edicion',
    title: 'Sistema de Edición de Videos',
    description: 'La checklist para editar con un sistema claro. Herramientas, orden y pasos concretos para no perderte en el proceso.',
    image: null,
    category: 'herramienta',
    url: 'recursos/sistema-edicion',
    external: false,
    pinned: true,
    date: '2026-03-28',
  },

  // ── Ejemplos comentados — descomentá y completá cuando los tengas ─────────
  // {
  //   id: 'curso-marketing',
  //   title: 'Curso de Marketing Digital',
  //   description: 'El curso que usé para aprender las bases del marketing digital.',
  //   image: '/recursos/curso-marketing.png',
  //   category: 'curso',
  //   url: 'https://hotmart.com/tu-link',
  //   external: true,
  //   pinned: false,
  //   date: '2026-03-10',
  // },

];

// ── Categorías para el filtro ─────────────────────────────────────────────────
export const categories: { value: Category | 'todos'; label: string }[] = [
  { value: 'todos',       label: 'Todos' },
  { value: 'ebook',       label: 'eBooks' },
  { value: 'curso',       label: 'Cursos' },
  { value: 'herramienta', label: 'Herramientas' },
  { value: 'coaching',    label: 'Coaching' },
  { value: 'blog',        label: 'Blog' },
];