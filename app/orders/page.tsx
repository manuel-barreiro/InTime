'use client'

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

// import { useEffect, useState } from "react";

import { formatCurrency } from "@/utilities/formatCurrency";
import { useRouter } from "next/navigation";
import connectMongoDB from "@/utilities/mongodb";
import Order from "@/models/order";

function formatDate(inputDate: string) {
  const originalDate = new Date(inputDate);

  const day = originalDate.getDate().toString().padStart(2, '0');
  const month = (originalDate.getMonth() + 1).toString().padStart(2, '0'); // Month is zero-based
  const year = originalDate.getFullYear().toString().slice(2);
  const hours = originalDate.getHours().toString().padStart(2, '0');
  const minutes = originalDate.getMinutes().toString().padStart(2, '0');

  const formattedDate = `${day}/${month}/${year}`;
  
  return formattedDate;
}

function formatHour(inputDate: string) {
  const originalDate = new Date(inputDate);
  const hours = originalDate.getHours().toString().padStart(2, '0');
  const minutes = originalDate.getMinutes().toString().padStart(2, '0');
  const formattedDate = `${hours}:${minutes}`;
  return formattedDate;
}

  // async function getOrders() {
  //   await connectMongoDB();
  //   const orders: any = await Order.find().sort( { updatedAt: -1 } )
  //   return orders
  // }

  

export default async function page () {

  const router = useRouter();

  async function getOrders() {

    try {
      const res = await fetch('https://www.shortcut.com.ar/api/getOrders', {
          cache: "no-store"
      })

      if (res.ok) {
        router.refresh()
      } else {
        throw new Error("Failed to fetch orders.")
      }

      return res.json()
  } catch (error) {
      console.log("Error loading orders:", error)
  }
  }

  const pedidos = await getOrders()

  // console.log('PEDIDOS PAGE RENDER', pedidos[0])

  // const [pedidos, setPedidos] = useState<any>([]);
  // const [loading, setLoading] = useState<boolean>(true);

  // useEffect(() => {
  //   const fetchPedidos = async () => {
  //     setLoading(true);
  //     try {
  //       const res = await fetch('/api/getOrders', {
  //         cache: 'no-store'
  //       })
  //       const data = await res.json()
  //       setPedidos(data)
  //     } catch (error) {
  //       console.error(error);
  //     }
  //     setLoading(false);
  //   }
  //   fetchPedidos()
  // }, [])

  // useEffect(() => {
  //   const fetchPedidos = async () => {
  //     setLoading(true);
  //     try {
  //       await connectMongoDB();
  //       const orders: any = await Order.find().sort( { updatedAt: -1 } )
  //       console.log(orders)
  //       setPedidos(orders)
    
  //     } catch(error) {
  //       console.log(error)
  //     }
  //     setLoading(false);
  //   }
  //   fetchPedidos()
  // }, [])

  // const pedidosResponse = await fetch('https://www.shortcut.com.ar/api/getOrders', { cache: 'no-store' })

  // const pedidos = await pedidosResponse.json()

  // console.log('PEDIDOS PAGE RENDER', pedidos)
  
  
  return (
    <div className="text-white flex flex-col gap-6 mt-5 items-center justify-center">
      <h3 className="text-white text-4xl font-bold">Pedidos - Nigeria</h3>
      <Table className="text-white max-w-[80%] mx-auto">
            <TableHeader>
              <TableRow>
                <TableHead className="font-bold text-center text-white text-md">#</TableHead>
                <TableHead className=" font-bold text-center text-white text-md">Fecha</TableHead>
                <TableHead className="font-bold text-center text-white text-md">Productos</TableHead>
                <TableHead className="font-bold text-center text-white text-md">$</TableHead>
                <TableHead className="font-bold text-center text-white text-md">Estado</TableHead>
                {/* <TableHead className=" font-bold text-center text-white text-md">status_detail</TableHead> */}
                {/* <TableHead className="font-bold text-center text-white text-md">payment_method_type</TableHead> */}
                {/* <TableHead className="font-bold text-center text-white text-md">payment_method_id</TableHead> */}
                <TableHead className="font-bold text-center text-white text-md">Nombre</TableHead>
                <TableHead className=" font-bold text-center text-white text-md">WhatsApp</TableHead>
                <TableHead className="font-bold text-center text-white text-md">Correo</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {pedidos?.map((pedido: any) => (
                <TableRow key={pedido.id}>
                  <TableCell className="font-medium text-sm text-center">{pedido.id.toString().slice(-4)}</TableCell>
                  <TableCell className="font-medium text-sm text-center">
                    {<div key={pedido.id}>
                      <p>{formatDate(pedido.date_created)}</p>
                      <p>{formatHour(pedido.date_created)}</p>
                    </div>}
                  </TableCell>
                  <TableCell className="font-medium text-sm">{pedido.items.map((i: any) => <p key={i.id}>x{i.quantity} {i.title}</p>)}</TableCell>
                  <TableCell className="font-medium text-sm text-center">{formatCurrency(pedido.total)}</TableCell>
                  <TableCell className="font-medium text-sm text-center">
                    {pedido.status === 'approved' ?
                      <Badge variant={'default'} className="bg-green-600">{pedido.status}</Badge>
                      :
                      <Badge variant={'destructive'}>{pedido.status}</Badge>
                    }
                  </TableCell>
                  <TableCell className="font-medium text-sm text-center">{pedido.nombre}</TableCell>
                  <TableCell className="font-medium text-sm text-center">{pedido.whatsapp}</TableCell>
                  <TableCell className="font-medium text-sm text-center">{pedido.email}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
    </div>
  )
}