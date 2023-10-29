import { CreatePreferencePayload } from "mercadopago/models/preferences/create-payload.model";
import { NextResponse } from 'next/server';
import { IProduct } from "@/constants/product";
import mercadopago from "mercadopago";

export async function POST(request: Request){
  const url = "http://localhost:3000";

  mercadopago.configure({
    access_token: process.env.ACCESS_TOKEN!,
  });

  // Recibo el cartItems
  const recepcionCarrito = await request.json();
  // Lo mapeo para que tenga el formato que requiere la API de MELI
  const cartMp = recepcionCarrito.map((item: any) => {
    return {
      title: item.name,
      unit_price: item.price,
      quantity: item.quantity
    };
  });

  console.log(cartMp)

  try {
    const preference: CreatePreferencePayload = {
      items: cartMp,
      auto_return: "approved",
      back_urls: {
        success: `${url}`,
        failure: `${url}`,
      },
      notification_url: `${url}/api/notify`,
    };

    const responseMp = await mercadopago.preferences.create(preference);

    return NextResponse.json({ url: responseMp.body.init_point })

  } catch (error) {
    return NextResponse.json(error)
  }
    
}