'use client'

import Menu from '@/components/menu/Menu'
import MenuFooter from '@/components/menu/MenuFooter'

export default function Home (): JSX.Element {
  return (
      <main className="mb-20">
        <Menu />
        <MenuFooter />
      </main>
  )
}
