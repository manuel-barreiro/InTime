'use client'

import { MercadoPagoButton } from "@/components/MercadoPagoButton";
import { useShoppingCart } from "@/context/ShoppingCartContext";
import { formatCurrency } from "@/utilities/formatCurrency";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";

type CartItem = {
  id: number
  name: string
  price: number
  quantity: number
}

export default function page() {
  const { cartItems, cartSubtotal, cartQuantity } = useShoppingCart()

  // console.log('nasshe: ', cartMp)

  return (
    <div className='relative'>
      <button className='absolute top-2 left-7'>
        <Link href={'/cart'}>
          <FaArrowLeft className=' text-white w-6 h-6' />
        </Link>
      </button>
      <h1 className="text-white font-black text-3xl text-center mt-4 mb-6">Realizar Pedido</h1>
      <div className="flex flex-col items-center gap-5 mt-10">
        <div>
          <h3 className="text-xl font-bold text-white mb-5 text-center">Productos</h3>
          {cartItems.map((item: CartItem) => (
            <p className="text-white font-semibold text-lg">x{item.quantity} <span className="font-normal">{item.name}</span> {formatCurrency(item.quantity * item.price)}</p>
            ))}
            <h3 className="text-xl font-bold text-white mb-5 mt-7 text-center">Resumen pedido</h3>
          <p className="text-white font-semibold text-lg">Cantidad de productos: <span className='font-light'>{cartQuantity}</span></p>
          <p className="text-white font-semibold text-lg">Total: <span className='font-light'>{formatCurrency(cartSubtotal)}</span></p>
        </div>
        
        <div>
        
        </div>
        
        <MercadoPagoButton envioCarrito={cartItems}></MercadoPagoButton>
      </div>
    </div>
  )
}