import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Order from "@/models/order";
import { formatDate } from "@/utilities/formatDate"
import connectMongoDB from "@/utilities/mongodb";

export default async function page () {

  const pedidosResponse = await fetch('https://www.shortcut.com.ar/api/getOrders', {
    method: 'GET',
    cache: 'no-store',
  })

  const pedidos = await pedidosResponse.json()
  
  
  return (
    <div className="text-white flex flex-col gap-6 mt-5 items-center justify-center">
      <h3 className="text-white text-4xl font-bold">Pedidos - Nigeria</h3>
      <Table className="text-white max-w-[80%] mx-auto">
            <TableHeader>
              <TableRow>
                <TableHead className="font-semibold text-white">id</TableHead>
                <TableHead className=" font-semibold text-white">date_created</TableHead>
                <TableHead className="font-semibold text-white">items</TableHead>
                <TableHead className="font-semibold text-white">total</TableHead>
                <TableHead className="font-semibold text-white">status</TableHead>
                {/* <TableHead className=" font-semibold text-white">status_detail</TableHead> */}
                <TableHead className="font-semibold text-white">payment_method_type</TableHead>
                {/* <TableHead className="font-semibold text-white">payment_method_id</TableHead> */}
                <TableHead className="font-semibold text-white">nombre</TableHead>
                <TableHead className=" font-semibold text-white">whatsapp</TableHead>
                <TableHead className="font-semibold text-white">email</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {pedidos?.map((pedido: any) => (
                <TableRow key={pedido.id}>
                  <TableCell className="font-medium">{pedido.id}</TableCell>
                  <TableCell className="font-medium">{pedido.date_created}</TableCell>
                  <TableCell className="font-medium">{pedido.items.map((i: any) => i.title)}</TableCell>
                  <TableCell className="font-medium">{pedido.total}</TableCell>
                  <TableCell className="font-medium">{pedido.status}</TableCell>
                  <TableCell className="font-medium">{pedido.payment_method_type}</TableCell>
                  <TableCell className="font-medium">{pedido.nombre}</TableCell>
                  <TableCell className="font-medium">{pedido.whatsapp}</TableCell>
                  <TableCell className="font-medium">{pedido.email}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
    </div>
  )
}