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
import { formatCurrency } from "@/utilities/formatCurrency";
import { formatDate, formatHour } from "@/utilities/dateFunctions";
import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import Auth from "@/components/Auth";
import { Button } from "@/components/ui/button";
import { LuLogOut } from "react-icons/lu";

export default function page () {
  const [pedidos, setPedidos] = useState<any>([]);
  // TODO: Add loading skeleton
  const [loading, setLoading] = useState<boolean>(true);

  const { auth, setAuth } = useAuth()

  useEffect(() => {
    const fetchPedidos = async () => {
      setLoading(true);
      try {
        const res = await fetch('/api/getOrders', {
          cache: 'no-store',
          method: 'POST',
        })
        const data = await res.json()
        setPedidos(data)
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    }
    fetchPedidos()
  }, [])

  return (
    <>
    {!auth ? <Auth /> :

    <>
      <div className="w-full bg-bgblue sticky top-0 z-50 p-4 flex justify-center items-center gap-7 border-b-[1px] mb-3">
        <h3 className="text-white text-2xl px-5 md:p-0 md:text-3xl font-bold">Pagos - Nigeria</h3>
        <Button onClick={() => setAuth(false)} className="bg-cartPink">
          <LuLogOut className="w-5 h-5 md:w-6 md:h-6" />
        </Button>
      </div>
      <div className="text-white flex flex-col gap-6 mt-5 items-center justify-center relative">
      <Table className="text-white max-w-[80%] mx-auto">
            <TableHeader>
              <TableRow>
                <TableHead className="font-bold text-center text-white text-md">#</TableHead>
                <TableHead className=" font-bold text-center text-white text-md">Fecha</TableHead>
                <TableHead className="font-bold text-center text-white text-md">Productos</TableHead>
                <TableHead className="font-bold text-center text-white text-md">$</TableHead>
                <TableHead className="font-bold text-center text-white text-md">Pago</TableHead>
                <TableHead className="font-bold text-center text-white text-md">Método</TableHead>
                <TableHead className="font-bold text-center text-white text-md">Nombre</TableHead>
                <TableHead className=" font-bold text-center text-white text-md">WhatsApp</TableHead>
                <TableHead className="font-bold text-center text-white text-md">Correo</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {pedidos?.map((pedido: any) => (
                <TableRow key={pedido._id}>
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
                      : pedido.status === 'refunded' ?
                      <Badge variant={'default'} className="bg-sky-500">{pedido.status}</Badge>
                      : <Badge variant={'destructive'}>{pedido.status}</Badge>
                    }
                  </TableCell>
                  <TableCell className="font-medium text-sm text-center">{pedido.payment_method_id}</TableCell>
                  <TableCell className="font-medium text-sm text-center">{pedido.nombre}</TableCell>
                  <TableCell className="font-medium text-sm text-center">{pedido.whatsapp}</TableCell>
                  <TableCell className="font-medium text-sm text-center">{pedido.email}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
      </div>
      </>}
    </>
  )
}