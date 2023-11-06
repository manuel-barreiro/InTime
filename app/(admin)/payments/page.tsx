import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { formatDate } from "@/utilities/formatDate"

async function getPagos() {
  try {
    const infoPagosAPIResponse = await fetch('https://api.mercadopago.com/v1/payments/search?sort=date_created&criteria=desc', {
    method: 'GET',
    headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
    },
    })
    const infoPagosJSON = await infoPagosAPIResponse.json()
    const pagos = infoPagosJSON.results
    const pagosMappeados = pagos.map((pago: any) => {return {
      id: pago.id,
      date_created: formatDate(new Date(Date.parse(pago.date_created))),
      items: pago.additional_info.items,
      total: pago.transaction_amount,
      status: pago.status,
      status_detail: pago.status_detail,
      payment_method_type: pago.payment_method.type,
      payment_method_id: pago.payment_method.id,
      nombre: pago.payer.first_name,
      apellido: pago.payer.last_name,
      phone: pago.payer.phone,
      email: pago.payer.email
    }}) 

    return pagosMappeados

  } catch {
    console.log(Error)
  }
}


export default async function page () {

  const pagos = await getPagos()

  return (
    <div className="flex flex-col gap-3 items-center mt-3">

    <h3 className="text-white text-3xl font-bold">Pagos - Nigeria</h3>
    <div className="text-white text-center">
      <Table className="text-white text-center">
            <TableHeader className="text-center">
              <TableRow>
                <TableHead className="font-semibold text-white text-center">id</TableHead>
                <TableHead className=" font-semibold text-white text-center">date_created</TableHead>
                <TableHead className="font-semibold text-white text-center">total</TableHead>
                <TableHead className="font-semibold text-white text-center">status</TableHead>
                <TableHead className=" font-semibold text-white text-center">status_detail</TableHead>
                {/* <TableHead className="font-semibold text-white text-center">payment_method_type</TableHead> */}
                <TableHead className="font-semibold text-white text-center">payment_method_id</TableHead>
                {/* <TableHead className="font-semibold text-white text-center">nombre</TableHead>
                <TableHead className="font-semibold text-white text-center">apellido</TableHead>
                <TableHead className=" font-semibold text-white text-center">phone</TableHead> */}
                <TableHead className="font-semibold text-white text-center">email</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {pagos.map((pago: any) => (
                <TableRow key={pago.id}>
                  <TableCell className="font-medium">{pago.id}</TableCell>
                  <TableCell className="font-medium">{pago.date_created}</TableCell>
                  <TableCell className="font-medium">{pago.total}</TableCell>
                  <TableCell className="font-medium">{pago.status}</TableCell>
                  <TableCell className="font-medium">{pago.status_detail}</TableCell>
                  {/* <TableCell className="font-medium">{pago.payment_method_type}</TableCell> */}
                  <TableCell className="font-medium">{pago.payment_method_id}</TableCell>
                  {/* <TableCell className="font-medium">{pago.nombre}</TableCell>
                  <TableCell className="font-medium">{pago.apellido}</TableCell>
                  <TableCell className="font-medium">{pago.phone.number}</TableCell> */}
                  <TableCell className="font-medium">{pago.email}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
    </div>
    </div>
  )
}