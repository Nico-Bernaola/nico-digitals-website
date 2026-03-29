// ESTE ARCHIVO VA EN: app/api/subscribe/route.ts

import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { email, firstName, lastName } = await request.json();

  if (!email || !email.includes('@')) {
    return NextResponse.json({ error: 'Email inválido' }, { status: 400 });
  }

  if (!firstName?.trim()) {
    return NextResponse.json({ error: 'Nombre obligatorio' }, { status: 400 });
  }

  const API_KEY  = process.env.MAILCHIMP_API_KEY;
  const AUDIENCE = process.env.MAILCHIMP_AUDIENCE_ID;
  const SERVER   = process.env.MAILCHIMP_SERVER;

  if (!API_KEY || !AUDIENCE || !SERVER) {
    return NextResponse.json({ error: 'Configuración incompleta' }, { status: 500 });
  }

  const url = `https://${SERVER}.api.mailchimp.com/3.0/lists/${AUDIENCE}/members`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email_address: email,
      status: 'subscribed',
      merge_fields: {
        FNAME: firstName.trim(),
        LNAME: lastName?.trim() ?? '',
      },
    }),
  });

  const data = await response.json();

  if (!response.ok && data.title !== 'Member Exists') {
    return NextResponse.json({ error: data.detail || 'Error al suscribir' }, { status: 400 });
  }

  return NextResponse.json({ success: true });
}