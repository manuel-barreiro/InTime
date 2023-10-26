import { useShoppingCart } from "@/context/ShoppingCartContext"
import { formatCurrency } from "@/utilities/formatCurrency"
import { FaMinus, FaPlus } from 'react-icons/fa6'

type CartItem = {
  id: number
  name: string
  price: number
  quantity: number
}

export default function CarritoItem ({ id, name, quantity, price}: CartItem): JSX.Element {

  const { increaseCartQuantity, decreaseCartQuantity } = useShoppingCart()
  
  return (
    <div className="text-white p-3 flex w-[90%] md:w-[40%] items-center rounded-2xl border-b-[1px]">

          {/* Product Info */}
          <div className="flex flex-col justify-between items-start w-full gap-1">
            <p className="uppercase font-semibold text-md">
              {name}
            </p>
            <p className="font-light text-lg my-1">
              {formatCurrency(quantity * price)}
            </p>
          </div>
    
          {/* Boton */}
          <div>
            {/* Increase or Decrease */}
            <div className='flex gap-2 items-center'>
              <button onClick={() => decreaseCartQuantity(id)}>
                <FaMinus className='text-productCardBg w-6 h-6' />
              </button>
              <div className='bg-buttonSoftPink text-md font-medium px-3 py-2 rounded-xl'>
                <span className='text-bgblue'>{quantity}</span>
              </div>
              <button onClick={() => increaseCartQuantity(id)}>
                <FaPlus className="text-cartPink w-6 h-6" />
              </button>
            </div>   
          </div>
    
        </div>
  )
}