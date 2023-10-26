import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";

export default function page() {
  return (
    <div className='relative'>
      <button className='absolute top-2 left-7'>
        <Link href={'/cart'}>
          <FaArrowLeft className=' text-white w-6 h-6' />
        </Link>
      </button>
      <h1 className="text-white font-black text-3xl text-center mt-4 mb-6">Realizar Pedido</h1>
    </div>
  )
}