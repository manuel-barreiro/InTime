// import {
//   Table,
//   TableBody,
//   TableCaption,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table"
// import { Badge } from "@/components/ui/badge"
// import { formatCurrency } from "@/utilities/formatCurrency";
// import { formatDate, formatHour } from "@/utilities/dateFunctions";

// async function getOrders() {
//   try {
//     const res = await fetch('https://www.shortcut.com.ar/api/getOrders', {
//         next: {revalidate: 30},
//         method: "POST",
//     })

//     if (!res.ok) {
//         throw new Error("Failed to fetch orders.")
//     }
//     const data = await res.json()
//     return data
// } catch (error) {
//     console.log("Error loading orders:", error)
// }
// }

export default async function page () {

  // const pedidos = await getOrders()

  return (
    // <div className="text-white flex flex-col gap-6 mt-5 items-center justify-center">
    //   <h3 className="text-white text-4xl font-bold">Pagos - Nigeria</h3>
    //   <Table className="text-white max-w-[80%] mx-auto">
    //         <TableHeader>
    //           <TableRow>
    //             <TableHead className="font-bold text-center text-white text-md">#</TableHead>
    //             <TableHead className=" font-bold text-center text-white text-md">Fecha</TableHead>
    //             <TableHead className="font-bold text-center text-white text-md">Productos</TableHead>
    //             <TableHead className="font-bold text-center text-white text-md">$</TableHead>
    //             <TableHead className="font-bold text-center text-white text-md">Pago</TableHead>
    //             <TableHead className="font-bold text-center text-white text-md">Nombre</TableHead>
    //             <TableHead className=" font-bold text-center text-white text-md">WhatsApp</TableHead>
    //             <TableHead className="font-bold text-center text-white text-md">Correo</TableHead>
    //           </TableRow>
    //         </TableHeader>
    //         <TableBody>
    //           {pedidos?.map((pedido: any) => (
    //             <TableRow key={pedido.id}>
    //               <TableCell className="font-medium text-sm text-center">{pedido.id.toString().slice(-4)}</TableCell>
    //               <TableCell className="font-medium text-sm text-center">
    //                 {<div key={pedido.id}>
    //                   <p>{formatDate(pedido.date_created)}</p>
    //                   <p>{formatHour(pedido.date_created)}</p>
    //                 </div>}
    //               </TableCell>
    //               <TableCell className="font-medium text-sm">{pedido.items.map((i: any) => <p key={i.id}>x{i.quantity} {i.title}</p>)}</TableCell>
    //               <TableCell className="font-medium text-sm text-center">{formatCurrency(pedido.total)}</TableCell>
    //               <TableCell className="font-medium text-sm text-center">
    //                 {pedido.status === 'approved' ?
    //                   <Badge variant={'default'} className="bg-green-600">{pedido.status}</Badge>
    //                   :
    //                   <Badge variant={'destructive'}>{pedido.status}</Badge>
    //                 }
    //               </TableCell>
    //               <TableCell className="font-medium text-sm text-center">{pedido.nombre}</TableCell>
    //               <TableCell className="font-medium text-sm text-center">{pedido.whatsapp}</TableCell>
    //               <TableCell className="font-medium text-sm text-center">{pedido.email}</TableCell>
    //             </TableRow>
    //           ))}
    //         </TableBody>
    //       </Table>
    // </div>

    <h1>No</h1>
  )
}