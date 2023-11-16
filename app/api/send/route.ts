import { EmailTemplate } from '../../../components/email-template';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import * as React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {

  const pedido = await request.json();

  const nombre = pedido.nombre;
  const numero_pedido = String(pedido.numero_pedido);
  const correo = pedido.correo;

  try {
    const { data, error } = await resend.emails.send({
      from: 'ShortCut <noreply@shortcut.com.ar>',
      to: [`${correo}`],
      subject: `Pedido ${numero_pedido}`,
      react: EmailTemplate({
        nombre,
        numero_pedido,
      }) as React.ReactElement,
    });

    if (error) {
      return NextResponse.json({ error, pedido });
    }

    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error });
  }
}