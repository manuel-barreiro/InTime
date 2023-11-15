import { PlaidVerifyIdentityEmail } from '../../../components/email-template';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import * as React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function GET() {
  try {
    const { data, error } = await resend.emails.send({
      from: 'ShortCut <noreply@shortcut.com.ar>',
      to: ['manuel.barreiro@ing.austral.edu.ar'],
      subject: "Tu pedido esá siendo preparado.",
      react: PlaidVerifyIdentityEmail({ firstName: "Manuel" }) as React.ReactElement,
    });

    if (error) {
      return NextResponse.json({ error });
    }

    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error });
  }
}