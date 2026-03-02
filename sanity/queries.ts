import { groq } from 'next-sanity';

// All published posts — for /blog index and generateStaticParams
export const ALL_POSTS_QUERY = groq`
  *[_type == "post" && published == true] | order(publishedAt desc) {
    _id,
    title,
    slug,
    description,
    publishedAt,
    "tags": tags[]->title,
    author
  }
`;

// Single post by slug — for /blog/[slug]
export const POST_BY_SLUG_QUERY = groq`
  *[_type == "post" && slug.current == $slug && published == true][0] {
    _id,
    title,
    slug,
    description,
    publishedAt,
    "tags": tags[]->title,
    author,
    body
  }
`;

// Just slugs — lightweight query for generateStaticParams
export const ALL_POST_SLUGS_QUERY = groq`
  *[_type == "post" && published == true] {
    "slug": slug.current
  }
`;
