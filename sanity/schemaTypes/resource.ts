import { defineType, defineField } from 'sanity';

export const categoryTypes = [
  { value: 'ebook', title: 'eBook' },
  { value: 'curso', title: 'Curso' },
  { value: 'herramienta', title: 'Herramienta' },
  { value: 'coaching', title: 'Coaching' },
  { value: 'blog', title: 'Blog' },
];

export const resourceSchema = defineType({
  name: 'resource',
  title: 'Recurso',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Descripción',
      type: 'text',
      rows: 3,
      description: 'Descripción corta para la tarjeta del recurso.',
      validation: (Rule) => Rule.required().max(160),
    }),
    defineField({
      name: 'image',
      title: 'Imagen',
      type: 'image',
      description: 'Imagen de portada (opcional).',
      options: { hotspot: true },
    }),
    defineField({
      name: 'category',
      title: 'Categoría',
      type: 'string',
      options: {
        list: categoryTypes,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url',
      description: 'Landing propia (/recursos/tu-slug), link externo, o /blog/slug.',
      validation: (Rule) => Rule.required().uri({
        allowRelative: true,
        scheme: ['https', 'http'],
      }),
    }),
    defineField({
      name: 'external',
      title: 'Externo',
      type: 'boolean',
      initialValue: false,
      description: 'Si es true, el link se abre en nueva pestaña.',
    }),
    defineField({
      name: 'pinned',
      title: 'Destacado',
      type: 'boolean',
      initialValue: false,
      description: 'Si es true, aparece siempre primero.',
    }),
    defineField({
      name: 'published',
      title: 'Publicado',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'publishedAt',
      title: 'Fecha de publicación',
      type: 'datetime',
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'category' },
  },
});