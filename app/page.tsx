'use client'

import Menu from '@/components/Menu'
import MenuFooter from '@/components/MenuFooter'

export default function Home (): JSX.Element {
  return (
      <main className="mb-20">
        <Menu />
        <MenuFooter />
      </main>
  )
}
