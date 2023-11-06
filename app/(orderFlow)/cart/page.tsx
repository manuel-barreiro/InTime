'use client'

import CartFooter from "@/components/cart/CartFooter"
import { useShoppingCart } from "@/context/ShoppingCartContext"
import Carrito from "@/components/cart/Carrito"

export default function Cart () {
  const { cartItems, cartSubtotal, cartQuantity } = useShoppingCart()
  return (
    <div className="mb-40">
      <Carrito />
      {cartQuantity > 0 && <CartFooter />}
    </div>
  )
}