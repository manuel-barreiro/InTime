'use client'

import CartFooter from "@/components/cart/CartFooter"
import { useShoppingCart } from "@/context/ShoppingCartContext"
import Carrito from "@/components/cart/Carrito"
import { redirect } from 'next/navigation';
import { useLayoutEffect } from 'react';

export default function Cart () {
  const { cartQuantity } = useShoppingCart()

  useLayoutEffect(() => {
    if(cartQuantity === 0){
      redirect("/")
    }
  }, [])

  return (
    <div className="mb-40">
      <Carrito />
      {cartQuantity > 0 && <CartFooter />}
    </div>
  )
}