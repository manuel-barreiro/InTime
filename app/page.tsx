'use client'
import Image from 'next/image'
import Menu from '@/components/Menu'
import CartFooter from '@/components/CartFooter'
import { ShoppingCartProvider, useShoppingCart } from '@/context/ShoppingCartContext'
import { FaCartShopping } from 'react-icons/fa6'
import Header from '@/components/Header'

export default function Home (): JSX.Element {
  const { cartQuantity } = useShoppingCart()
  return (
    <ShoppingCartProvider>
      <Header />
      <main className="">
        <Menu />
        <CartFooter />
      </main>
    </ShoppingCartProvider>
  )
}
