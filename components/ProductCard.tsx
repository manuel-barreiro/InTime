import AddToCartButton from '@/components/AddToCartButton'
import { useShoppingCart } from '@/context/ShoppingCartContext'
import { FaCartPlus } from 'react-icons/fa'
import { FaMinus, FaPlus } from 'react-icons/fa6'
// import ProductQuantity from '@/components/ProductQuantity'

type Product = {
  prod_id: number
  nombre: string
  precio: number
}

export default function ProductCard ({
  prod_id,
  nombre,
  precio
}: Product): JSX.Element {

  const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity } = useShoppingCart()

  const quantity = getItemQuantity(prod_id)

  return (
      <div className="bg-productCardBg p-3 flex w-[90%] md:w-[40%] items-center rounded-2xl">

      {/* Product Info */}
      <div className="flex flex-col justify-between items-start w-full gap-1">
        <p className="uppercase font-semibold text-md">
          {nombre}
        </p>
        <p className="text-cartPink font-bold text-lg my-1">
          {`${precio}`}
        </p>
      </div>

      {/* Botones */}
      <div>

        {/* Add to Cart */}
        {quantity === 0 ? 
        // Add to cart
        (<button 
          onClick={() => increaseCartQuantity(prod_id)}
          className="bg-bgblue text-[10px] text-white font-semibold rounded-3xl px-2 py-2 flex items-center justify-between gap-2 hover:scale-105 ease-out duration-300 hover:shadow-2xl">
          <FaCartPlus className="w-6 h-4" />
          Agregar
        </button>) :
        // Increase or Decrease
        (<div className='flex gap-1 items-center'>
          <button onClick={() => increaseCartQuantity(prod_id)}>
            <FaPlus className="text-cartPink" />
          </button>
          <div className='bg-buttonSoftPink px-2 py-1 rounded-xl'>
            {quantity}
          </div>
          <button onClick={() => decreaseCartQuantity(prod_id)}>
            <FaMinus className='text-bgblue' />
          </button>
        </div>)
        }

      </div>

    </div>
  )
}
