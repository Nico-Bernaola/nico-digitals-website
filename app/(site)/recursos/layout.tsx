// ESTE ARCHIVO VA EN: app/(site)/recursos/layout.tsx
//
// El page.tsx usa 'use client' para los filtros interactivos,
// por eso el metadata SEO va acá separado.

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Recursos | Nico Digitals',
  description: 'Cursos, eBooks y herramientas recomendados por Nico Bernaola para generar ingresos digitales.',
};

export default function RecursosLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}