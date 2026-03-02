'use client';

import type { PortableTextComponents } from '@portabletext/react';

export const portableTextComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="mb-5 text-[15px] leading-relaxed text-stone-300">{children}</p>
    ),
    h2: ({ children }) => (
      <h2 className="mt-10 mb-4 text-2xl font-light tracking-tight text-stone-100">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-8 mb-3 text-lg font-normal tracking-tight text-stone-100">
        {children}
      </h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-6 border-l-2 border-amber-400 pl-5 text-stone-400 italic">
        {children}
      </blockquote>
    ),
  },

  list: {
    bullet: ({ children }) => (
      <ul className="mb-5 list-disc pl-6 space-y-1.5 text-[15px] text-stone-300">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="mb-5 list-decimal pl-6 space-y-1.5 text-[15px] text-stone-300">
        {children}
      </ol>
    ),
  },

  listItem: {
    bullet: ({ children }) => <li>{children}</li>,
    number: ({ children }) => <li>{children}</li>,
  },

  marks: {
    strong: ({ children }) => (
      <strong className="font-medium text-stone-100">{children}</strong>
    ),
    em: ({ children }) => <em className="italic text-stone-300">{children}</em>,
    code: ({ children }) => (
      <code className="rounded bg-stone-900 px-1.5 py-0.5 font-mono text-sm text-amber-300">
        {children}
      </code>
    ),
    link: ({ children, value }) => (
      <a
        href={value?.href}
        target={value?.href?.startsWith('http') ? '_blank' : undefined}
        rel={value?.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
        className="text-amber-400 no-underline hover:underline"
      >
        {children}
      </a>
    ),
  },

  types: {
    // Code block (requires @sanity/code-input in Studio)
    code: ({ value }) => (
      <pre className="my-6 overflow-x-auto rounded-lg border border-stone-800 bg-stone-900 px-6 py-5">
        <code className="font-mono text-sm text-stone-200">{value.code}</code>
      </pre>
    ),
    // Image block (requires @sanity/image-url for full URLs)
    image: ({ value }) => {
      if (!value?.asset?._ref) return null;
      return (
        <figure className="my-8">
          {/* Replace src with urlFor(value).url() if you install @sanity/image-url */}
          <img
            src={`https://cdn.sanity.io/images/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/production/${value.asset._ref
              .replace('image-', '')
              .replace(/-(\w+)$/, '.$1')}`}
            alt={value.alt ?? ''}
            className="w-full rounded-lg"
          />
          {value.caption && (
            <figcaption className="mt-2 text-center text-xs text-stone-500">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
  },
};
