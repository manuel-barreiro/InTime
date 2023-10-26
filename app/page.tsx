'use client'

import Menu from '@/components/Menu'
import CartFooter from '@/components/CartFooter'
import { ShoppingCartProvider, useShoppingCart } from '@/context/ShoppingCartContext'
import Header from '@/components/Header'

export default function Home (): JSX.Element {
  return (
      <main className="">
        <Header />
        <Menu />
        <CartFooter />
      </main>
  )
}
