import Order from "@/models/order";
import connectMongoDB from "@/utilities/mongodb";
import { NextResponse } from "next/server";


export async function GET(request: Request) {
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