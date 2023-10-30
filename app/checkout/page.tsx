'use client'

import { MercadoPagoButton } from "@/components/MercadoPagoButton";
import { useShoppingCart } from "@/context/ShoppingCartContext";
import { formatCurrency } from "@/utilities/formatCurrency";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

type CartItem = {
  id: number
  name: string
  price: number
  quantity: number
}

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
]

export default function page() {
  const { cartItems, cartSubtotal, cartQuantity } = useShoppingCart()

  // console.log('nasshe: ', cartMp)

  return (
    <div className='relative h-auto'>
      
      <button className='absolute top-2 left-7'>
        <Link href={'/cart'}>
          <FaArrowLeft className=' text-white w-6 h-6' />
        </Link>
      </button>
      <h1 className="text-white font-black text-3xl text-center mt-4 mb-6">Tu Pedido</h1>
      <div className="flex flex-col items-center gap-5 mt-10 mx-auto max-w-[90%] md:max-w-[50%]">
          <h3 className="text-2xl font-extrabold mb-1 text-center text-transparent bg-clip-text bg-gradient-to-t from-rose-400 to-rose-600">Productos</h3>
          <Table className="text-white">
            <TableHeader>
              <TableRow>
                <TableHead className="w-3 font-semibold text-white">Cantidad</TableHead>
                <TableHead className=" font-semibold text-white">Producto</TableHead>
                <TableHead className="text-start font-semibold text-white">$</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {cartItems.map((item: CartItem) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">x{item.quantity}</TableCell>
                  <TableCell className="">{item.name}</TableCell>
                  <TableCell className="text-start">{formatCurrency(item.quantity * item.price)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <h3 className="text-2xl font-extrabold text-white mb-1 mt-2 text-center  text-transparent bg-clip-text bg-gradient-to-t from-rose-400 to-rose-600">Resumen</h3>
          <Table className="text-white">
            <TableHeader>
              <TableRow>
                <TableHead className="text-center w-[50%] font-semibold text-white">N° de productos</TableHead>
                <TableHead className="text-center w-[50%] font-semibold text-white">Monto Final</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="text-center text-xl font-bold">{cartQuantity}</TableCell>
                <TableCell className="text-center text-xl font-bold">{formatCurrency(cartSubtotal)}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
      
        <div>
        
        </div>
        
        <MercadoPagoButton envioCarrito={cartItems}></MercadoPagoButton>
      </div>
    </div>
  )
}