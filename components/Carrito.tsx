import { useShoppingCart } from '@/context/ShoppingCartContext'
import { formatCurrency } from '@/utilities/formatCurrency'
import CarritoItem from './CarritoItem'
import { FaMinus, FaPlus, FaArrowLeft } from 'react-icons/fa6'
import Link from 'next/link'

type CartItem = {
  id: number
  name: string
  price: number
  quantity: number
}

export default function Carrito(): JSX.Element {
  const { cartItems, increaseCartQuantity, decreaseCartQuantity } = useShoppingCart()

  return (
    <div className='relative'>
      <button className='absolute top-2 left-7'>
        <Link href={'/'}>
          <FaArrowLeft className=' text-white w-6 h-6' />
        </Link>
      </button>
      <h1 className="text-white font-black text-3xl text-center mt-4 mb-6">Tu Carrito</h1>
      <div className='flex flex-col gap-2 items-center'>
        {cartItems.map((item: CartItem) => (
          <CarritoItem id={item.id} name={item.name} price={item.price} quantity={item.quantity} />
        ))}
      </div>
      

      
    </div>
  )
}