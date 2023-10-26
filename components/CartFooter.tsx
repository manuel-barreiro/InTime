'use client'

import { FaCreditCard } from "react-icons/fa6";
import { useShoppingCart } from '@/context/ShoppingCartContext'
import { formatCurrency } from '@/utilities/formatCurrency'
import Link from 'next/link'


export default function CartFooter (): JSX.Element {
  const { cartItems, cartSubtotal, cartQuantity } = useShoppingCart()

  return (
    <footer>
      <div className="bg-cartPink fixed bottom-0 w-full flex items-center justify-between px-6 py-3">
        <div className='flex flex-col gap-2'>
          <p className="text-white font-semibold text-lg">N° de productos: <span className='font-light'>{cartQuantity}</span></p>
          <p className="text-white font-semibold text-lg">Total: <span className='font-light'>{formatCurrency(cartSubtotal)}</span></p>
        </div>
        <Link href={'/checkout'}>
          <button
            onClick={() => {console.log(cartQuantity, cartItems)}} 
            className="bg-buttonSoftPink text-md text-bgblue font-semibold rounded-3xl px-3 py-2 flex items-center justify-between gap-2 hover:scale-105 ease-out duration-300 hover:shadow-2xl">
            <FaCreditCard className="w-6 h-6" />
            Ir al Pago
          </button>
        </Link>
      </div>
    </footer>
  )
}
