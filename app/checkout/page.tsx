'use client'

import { MercadoPagoButton } from "@/components/MercadoPagoButton";
import { useShoppingCart } from "@/context/ShoppingCartContext";
import { formatCurrency } from "@/utilities/formatCurrency";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";
// import { MercadoPagoButton } from "@/components/MercadoPagoButton";

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
      <p className="text-white font-semibold text-lg">N° de productos: <span className='font-light'>{cartQuantity}</span></p>
      <p className="text-white font-semibold text-lg">Total: <span className='font-light'>{formatCurrency(cartSubtotal)}</span></p>
      <MercadoPagoButton cartMp={cartItems}></MercadoPagoButton>
    </div>
  )
}