'use client'

import Menu from '@/components/Menu'
import CartFooter from '@/components/CartFooter'
import { ShoppingCartProvider } from '@/context/ShoppingCartContext'

export default function Home (): JSX.Element {
  return (
    <ShoppingCartProvider>
      <main className="">
        <Menu />
        <CartFooter />
      </main>
    </ShoppingCartProvider>
  )
}
