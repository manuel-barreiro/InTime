'use client'

import { FaCartShopping } from 'react-icons/fa6'
import { useShoppingCart } from '@/context/ShoppingCartContext'


export default function CartFooter (): JSX.Element {
  const { cartItems, cartSubtotal, cartQuantity } = useShoppingCart()

  return (
    <footer className="bg-cartPink fixed bottom-0 w-full flex items-center justify-between px-6 py-3">
      <div className='flex flex-col gap-2'>
        <p className="text-white font-semibold text-lg">Items: <span className='font-light'>{cartQuantity}</span></p>
        <p className="text-white font-semibold text-lg">Subotal: <span className='font-light'>{cartSubtotal}</span></p>
      </div>
      <button
        onClick={() => {console.log(cartQuantity, cartItems)}} 
        className="bg-buttonSoftPink text-md text-bgblue font-semibold rounded-3xl px-2 py-2 flex items-center justify-between gap-2 hover:scale-105 ease-out duration-300 hover:shadow-2xl">
        <FaCartShopping className="w-6 h-4" />
        Ir al Carrito
      </button>
    </footer>
  )
}
