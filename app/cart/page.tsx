'use client'

import { useShoppingCart } from "@/context/ShoppingCartContext"

export default function Cart () {
  const { cartItems, cartSubtotal, cartQuantity } = useShoppingCart()
  return (
    <div>
      <h1 className="text-white text-5xl font-black">Cantidad de Productos {cartQuantity}</h1>
      {cartItems.map((item: any) => (
        <div key={item.id} className="text-white text-xl font-medium">{item.id}</div>
      ))}
      <h1 className="text-white text-5xl font-black">TOTAL: {cartSubtotal}</h1>

    </div>
    
  )
}