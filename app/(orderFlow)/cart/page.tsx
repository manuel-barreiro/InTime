'use client'

import CartFooter from "@/components/CartFooter"
import { useShoppingCart } from "@/context/ShoppingCartContext"
import Carrito from "@/components/Carrito"

export default function Cart () {
  const { cartItems, cartSubtotal, cartQuantity } = useShoppingCart()
  return (
    <div className="mb-40">
      <Carrito />
      {cartQuantity > 0 && <CartFooter />}
    </div>
  )
}