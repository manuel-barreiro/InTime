import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import { ShoppingCartProvider } from '@/context/ShoppingCartContext'
import Header from '@/components/Header'

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat'
})

export const metadata: Metadata = {
  title: 'ShortCut',
  description: 'Pedí con ShortCut y ahorrate de hacer fila en eventos.'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <html lang="es">
      <body className={`${montserrat.variable} bg-bgblue font-montserrat scrollbar-hide`}>
        <ShoppingCartProvider>
          <Header />
          {children}
        </ShoppingCartProvider>
      </body>
    </html>
  )
}
