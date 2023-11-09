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
import { useEffect, useLayoutEffect } from "react";
import { redirect } from "next/navigation";

type CartItem = {
  id: number
  name: string
  price: number
  quantity: number
}

export default function page() {
  const { cartItems, cartSubtotal, cartQuantity, contactInfo } = useShoppingCart()

  useLayoutEffect(() => {
    if(cartQuantity === 0 || contactInfo.nombre === '' || contactInfo.email === '' || contactInfo.whatsapp === ''){
      redirect("/")
    }
  }, [])

  return (
    <div className='relative h-auto mb-10'>
      <button className='absolute top-2 left-7'>
        <Link href={'/contact'}>
          <FaArrowLeft className=' text-white w-6 h-6' />
        </Link>
      </button>
      <h1 className="text-white font-black text-3xl text-center mt-4 mb-6">Checkout</h1>
      <div className="flex flex-col items-center gap-5 mt-10 mx-auto max-w-[90%] md:max-w-[50%]">
          <h3 className="text-2xl font-extrabold mb-1 text-center text-transparent bg-clip-text bg-gradient-to-t from-rose-400 to-rose-600">Productos</h3>
          <Table className="text-white">
            <TableHeader>
              <TableRow>
                <TableHead className="font-semibold text-white">Cantidad</TableHead>
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
          <h3 className="text-2xl font-extrabold mb-1 mt-2 text-center  text-transparent bg-clip-text bg-gradient-to-t from-rose-400 to-rose-600">Resumen</h3>
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