'use client'

import Image from 'next/image'
import { useShoppingCart } from '@/context/ShoppingCartContext'
import { FaCartShopping } from 'react-icons/fa6'
import Link from 'next/link'
import { BiSolidFoodMenu } from "react-icons/bi";
import { usePathname } from 'next/navigation'

export default function Header (): JSX.Element {
  const { cartQuantity } = useShoppingCart()
  const pathname = usePathname()

  return (
    <header className='w-full flex flex-col justify-center items-center pt-4 sticky top-0 z-50 bg-bgblue'>
      <button className='top-6 left-6 absolute flex'>
        {pathname !== '/' && pathname !== '/pedidos' && pathname !== '/pagos' &&
          <Link href={'/'}>
            <BiSolidFoodMenu className='text-white w-6 h-6' />
          </Link>
        }
      </button>
      <Link href={'/'}>
        <Image width={50} height={50} src={'/logo.png'} alt='logo' priority={true} />
      </Link>
      {cartQuantity > 0 && pathname !== '/pedidos' && pathname !== '/pagos' &&
      <button className='top-6 right-6 absolute flex'>
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