'use client'

import Image from 'next/image'
import { ShoppingCartProvider, useShoppingCart } from '@/context/ShoppingCartContext'
import { FaCartShopping } from 'react-icons/fa6'
import Link from 'next/link'

export default function Header (): JSX.Element {
  const { cartQuantity } = useShoppingCart()

  return (
    <header className='w-full flex flex-col justify-center items-center pt-4 sticky top-0 z-50 bg-bgblue'>
      <Link href={'/'}>
        <Image width={120} height={25} src={'/shortcutLogo.svg'} alt='logo' priority={true} />
      </Link>
      {cartQuantity > 0 && 
      <button className='top-4 right-6 absolute flex'>
        <Link href={'/cart'}>
          <FaCartShopping className='text-white w-6 h-6' />
        </Link>
        <div className='rounded-full bg-cartPink h-4 w-4 -ml-3 -mt-2 flex items-center justify-center'>
         <span className='text-[10px] text-white font-medium'>{cartQuantity}</span>
        </div>
      </button>}
      <span className='mt-4 w-full h-[0.9px] bg-[#EAECEF]/50'></span>
    </header>
  )
  
}