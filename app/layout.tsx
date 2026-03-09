import type { Metadata } from 'next';
import './globals.css';

const siteUrl = 'https://www.nicodigitals.site';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: 'Nico Digitals — Ingresos Digitales y Libertad Financiera',
    template: '%s | Nico Digitals',
  },

  description:
    'Nico Digitals es el espacio de Nico Bernaola para enseñarte a generar ingresos digitales desde cero. Cursos, herramientas y estrategias reales para alcanzar tu libertad financiera online.',

  keywords: [
    'ingresos digitales',
    'ganar dinero online',
    'libertad financiera',
    'cursos online',
    'emprender desde cero',
    'marketing de afiliados',
    'Nico Bernaola',
    'Nico Digitals',
    'negocio digital',
    'hotmart afiliados',
  ],

  authors: [{ name: 'Nico Bernaola', url: siteUrl }],
  creator: 'Nico Bernaola',
  publisher: 'Nico Digitals',

  alternates: {
    canonical: siteUrl,
    languages: {
      'es': siteUrl,
    },
  },

  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: siteUrl,
    siteName: 'Nico Digitals',
    title: 'Nico Digitals — Ingresos Digitales y Libertad Financiera',
    description:
      'Nico Digitals es el espacio de Nico Bernaola para enseñarte a generar ingresos digitales desde cero. Cursos, herramientas y estrategias reales para alcanzar tu libertad financiera online.',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Nico Digitals — Ingresos Digitales y Libertad Financiera',
    description:
      'Cursos, herramientas y estrategias reales para generar ingresos online y alcanzar tu libertad financiera. Por Nico Bernaola.',
    creator: '@nicodigitals',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
