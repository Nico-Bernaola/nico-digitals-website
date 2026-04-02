import { revalidatePath } from 'next/cache';
import { type NextRequest, NextResponse } from 'next/server';

// POST /api/revalidate?secret=<SANITY_REVALIDATE_SECRET>
// Configure this URL as a webhook in Sanity Studio:
// sanity.io/manage → API → Webhooks → on publish/unpublish
export async function POST(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get('secret');

  if (secret !== process.env.SANITY_REVALIDATE_SECRET) {
    return NextResponse.json({ message: 'Invalid secret' }, { status: 401 });
  }

  try {
    revalidatePath('/');
    revalidatePath('/blog');
    revalidatePath('/blog/[slug]', 'page');
    return NextResponse.json({ revalidated: true });
  } catch {
    return NextResponse.json({ message: 'Error revalidating' }, { status: 500 });
  }
}
