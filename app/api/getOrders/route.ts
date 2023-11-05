import Order from "@/models/order";
import connectMongoDB from "@/utilities/mongodb";
import { NextResponse } from "next/server";


export async function GET (request: Request) {

  try {
    await connectMongoDB();
    const orders = await Order.find().sort( { updatedAt: -1 } );
    return NextResponse.json(orders)

  } catch(error) {
    console.log(error)
  }


  return NextResponse.json({ status: 200 })
}