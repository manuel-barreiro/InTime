import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import Image from 'next/image'

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat'
})

export const metadata: Metadata = {
  title: 'InTime',
  description: 'Pedí con InTime y ahorrate de hacer fila en eventos.'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} bg-bgblue font-montserrat`}>
        <header className='flex flex-col justify-center items-center py-4'>
          <Image width={120} height={25} src={'/logo.png'} alt='logo' />
          <span className='mt-4 w-full h-[0.9px] bg-[#EAECEF]/50'></span>
        </header>
        {children}
      </body>
    </html>
  )
}
