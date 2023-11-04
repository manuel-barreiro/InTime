import { NextResponse } from 'next/server';
import Order from '@/models/order';
import connectMongoDB from '@/utilities/mongodb';

export async function POST(request: Request){
  const notification = await request.json();
  console.log(notification)

  if (notification.type === 'payment') {
    const paymentId = notification.data.id
    console.log('ID del pago: ', paymentId)
    
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
        email: infoPago.metadata.email
      } 

      console.log(JSON.stringify(paymentData))

      await connectMongoDB();
      await Order.create( paymentData );
      return NextResponse.json( { status: 200 } )
  }

  return NextResponse.json( { status: 200 } )

}