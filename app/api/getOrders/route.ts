import Order from "@/models/order";
import connectMongoDB from "@/utilities/mongodb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const req = request
  try {
    await connectMongoDB();
    const orders = await Order.find().sort( { updatedAt: -1 } )
    console.log('api endpoint getOrders')
    return Response.json(orders)

  } catch(error) {
    return Response.json(error)
  }
}

export async function PUT(request: Request) {
  const { id } = await request.json();
  try {
    await connectMongoDB();
    console.log(id)
    await Order.findByIdAndUpdate(id, { entregado: true });
    return NextResponse.json({message: "Order Updated"}, { status: 200 });
  } catch (error) {
    console.log(error)
  }
  
}