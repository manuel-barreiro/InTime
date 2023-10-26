import { useShoppingCart } from '@/context/ShoppingCartContext'
import CarritoItem from './CarritoItem'
import { FaArrowLeft } from 'react-icons/fa6'
import Link from 'next/link'

type CartItem = {
  id: number
  name: string
  price: number
  quantity: number
}

export default function Carrito(): JSX.Element {
  const { cartItems, cartQuantity } = useShoppingCart()

  return (
    <div className='relative'>
      <button className='absolute top-2 left-7'>
        <Link href={'/'}>
          <FaArrowLeft className=' text-white w-6 h-6' />
        </Link>
      </button>
      <h1 className="text-white font-black text-3xl text-center mt-4 mb-6">Tu Carrito</h1>
      {cartQuantity === 0 && (
        <div className='flex flex-col gap-4 items-center'>
        <h3 className="text-white text-light text-center mt-10 mb-6">No hay ningún producto en el carrito.</h3>
        <Link href={'/'} className='text-white text-light text-center flex gap-3'>
          <FaArrowLeft className=' text-white w-6 h-6' />
          <span className='hover:underline underline-offset-8 decoration-white ease-in-out duration-300'>Volver al menú</span>
        </Link>
        </div>
      ) }
      <div className='flex flex-col gap-2 items-center'>
        {cartItems.map((item: CartItem) => (
          <CarritoItem id={item.id} name={item.name} price={item.price} quantity={item.quantity} />
        ))}
      </div>
      

      
    </div>
  )
}