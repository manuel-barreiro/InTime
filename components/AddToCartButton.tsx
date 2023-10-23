import { FaCartPlus } from 'react-icons/fa'

export default function AddToCartButton (): JSX.Element {
  return (
    <button className="bg-bgblue text-[10px] text-white font-semibold rounded-3xl px-2 py-2 flex items-center justify-between gap-2 hover:scale-105 ease-out duration-300 hover:shadow-2xl">
      <FaCartPlus className="w-6 h-4" />
      Agregar
    </button>
  )
}
