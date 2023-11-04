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

async function getOrders() {
  try {
    // const infoPagosAPIResponse = await fetch('https://api.mercadopago.com/v1/payments/search?sort=date_created&criteria=desc', {
    // method: 'GET',
    // headers: {
    // 'Content-Type': 'application/json',
    // Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
    // },
    // })
    // const infoPagosJSON = await infoPagosAPIResponse.json()
    // const pagos = infoPagosJSON.results

    await connectMongoDB();
    const orders = await Order.find().sort( { updatedAt: -1 } );
    // const ordersMappeadas = orders.map((order: any) => {return {
    //   id: order.id,
    //   date_created: formatDate(new Date(Date.parse(order.date_created))),
    //   items: order.additional_info.items,
    //   total: order.transaction_amount,
    //   status: order.status,
    //   status_detail: order.status_detail,
    //   payment_method_type: order.payment_method.type,
    //   payment_method_id: order.payment_method.id,
    //   nombre: order.payer.first_name,
    //   apellido: order.payer.last_name,
    //   whatsapp: order.whatsapp,
    //   email: order.payer.email
    // }}) 

    return orders

  } catch {
    console.log(Error)
  }
}


export default async function page () {

  const pedidos = await getOrders()
  console.log(pedidos)

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
                  <TableCell className="font-medium">{formatDate(pedido.date_created)}</TableCell>
                  <TableCell className="font-medium">{pedido.items.map((i: any) => i.title)}</TableCell>
                  <TableCell className="font-medium">{pedido.total}</TableCell>
                  <TableCell className="font-medium">{pedido.status}</TableCell>
                  {/* <TableCell className="font-medium">{pedido.status_detail}</TableCell> */}
                  <TableCell className="font-medium">{pedido.payment_method_type}</TableCell>
                  {/* <TableCell className="font-medium">{pedido.payment_method_id}</TableCell> */}
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