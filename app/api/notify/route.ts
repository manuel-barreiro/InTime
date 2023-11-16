import { NextResponse } from 'next/server';
import Order from '@/models/order';
import connectMongoDB from '@/utilities/mongodb';
import { Resend } from 'resend';
import { EmailTemplate } from '../../../components/email-template';


// En este endpoint MP nos notifica via Webhook al recibir un pago. Tomamos esa post request y la procesamos guardandola en la db, quedandonos con los atruibutos que nos interesan.

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request){
  const notification = await request.json();
  console.log(notification)

  if (notification.type === 'payment') {
    const paymentId = notification.data.id
    console.log('ID del pago: ', paymentId)

    try {
      const infoPagoAPIResponse = await fetch(`https://api.mercadopago.com/v1/payments/${paymentId}`, {
      method: 'GET',
      headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.ACCESS_TOKEN!}`
      },
      })
    
      const infoPago = await infoPagoAPIResponse.json()

      const paymentData = {
        id: infoPago.id,
        date_created: infoPago.date_created,
        items: infoPago.additional_info.items,
        total: infoPago.transaction_amount,
        status: infoPago.status,
        status_detail: infoPago.status_detail,
        payment_method_type: infoPago.payment_method.type,
        payment_method_id: infoPago.payment_method.id,
        nombre: infoPago.metadata.nombre,
        whatsapp: infoPago.metadata.whatsapp,
        email: infoPago.metadata.email,
        entregado: false,
      } 

      console.log(JSON.stringify(paymentData))

      await connectMongoDB();
      await Order.create( paymentData );

      // await fetch(`https://www.shortcut.com.ar/api/send`, {
      // method: 'POST',
      // headers: {
      // 'Content-Type': 'application/json',
      // body: JSON.stringify({nombre: paymentData.nombre, correo: paymentData.email, numero_pedido: paymentData.id} )
      // },
      // })

      if (paymentData.status === 'approved') {

      const nombre = paymentData.nombre;
      const numero_pedido = String(paymentData.id).slice(-4);
      const correo = paymentData.email;

      try {
        const { data, error } = await resend.emails.send({
          from: 'ShortCut <noreply@shortcut.com.ar>',
          to: [`${correo}`],
          subject: `Tu pedido #${numero_pedido} está confirmado.`,
          react: EmailTemplate({
            nombre,
            numero_pedido,
          }) as React.ReactElement,
        });
    
        if (error) {
          return NextResponse.json({ error });
        }
    
        return NextResponse.json({ data });
      } catch (error) {
        return NextResponse.json({ error });
      }
      }

      return NextResponse.json( {message: 'Added order to DB and email sent'}, { status: 200 } )
      
    } catch (error) {
      return NextResponse.json( { error: error }, { status: 400 } )
    }
  }

  return NextResponse.json( { status: 200 } )

}