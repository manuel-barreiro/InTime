import { NextResponse } from 'next/server';

// Al navegar a /checkout, se hace un POST a este endpoint, que recibe el cartItems y contactInfo, y genera y devuelve el url de la preferencia que se creo en MP para realizar el pago. Ese link es el href del boton de MP que se renderiza en el componente MercadoPagoButton.
export async function POST(request: Request){

  // Recibo el cartItems
  const { envioCarrito, contactInfo } = await request.json();
  // Lo mapeo para que tenga el formato que requiere la API de MELI
  const cartMp = envioCarrito.map((item: any) => {
    return {
      id: item.id,
      title: item.name,
      unit_price: item.price,
      quantity: item.quantity,
    };
  });

  const url = "https://www.shortcut.com.ar";

  try {

    const preference = {
      items: cartMp,
      auto_return: "approved",
      back_urls: {
        success: `${url}/success`,
        failure: `${url}/failed`,
        pending: `${url}/failed`
      },
      notification_url: `${url}/api/notify`,
      currency_id: 'ARS',
      metadata: contactInfo
    };

    const resPreferenceAPI = await fetch('https://api.mercadopago.com/checkout/preferences', {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.ACCESS_TOKEN!}`
      },
      body: JSON.stringify(preference)
      })

    // console.log(resPreferenceAPI)

    const responseMp = await resPreferenceAPI.json()

    // console.log(responseMp)

    return NextResponse.json({ url: responseMp.init_point })

  } catch (error) {
    return NextResponse.json(error)
  }
    
}