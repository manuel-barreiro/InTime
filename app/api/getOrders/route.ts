import Order from "@/models/order";
import connectMongoDB from "@/utilities/mongodb";
import { NextResponse } from "next/server";

// Endponint que simula un GET (para evitar el cache de NextJS)
export async function POST(request: Request) {
  const req = request
  try {
    await connectMongoDB();
    console.log('getOrders POST (que es un get)')
    const orders = await Order.find().sort( { createdAt: -1 } )
    return Response.json(orders)

  } catch(error) {
    return Response.json(error)
  }
}

// Endpoint para actualizar el estado de un pedido (entregado: false || true)
export async function PUT(request: Request) {
  const { id } = await request.json();
  try {
    await connectMongoDB();
    console.log('getOrders PUT')
    const order = await Order.findOne({_id: id})
    const { entregado } = order
    await Order.findByIdAndUpdate(id, { entregado: !entregado });
    return NextResponse.json({message: "Order Updated"}, { status: 200 });
  } catch (error) {
    console.log(error)
  }
  
}