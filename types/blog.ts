import type { PortableTextBlock } from '@portabletext/react';

export interface SanityPostMeta {
  _id: string;
  title: string;
  slug: { current: string };
  description: string;
  publishedAt: string;
  tags: string[] | null;
  author: string | null;
}

export interface SanityPost extends SanityPostMeta {
  body: PortableTextBlock[];
}
