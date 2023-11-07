'use client'
import CartFooter from "@/components/cart/CartFooter";
import { useShoppingCart } from "@/context/ShoppingCartContext";
import { formatCurrency } from "@/utilities/formatCurrency";
import Link from "next/link";
import { FaArrowLeft, FaCreditCard } from "react-icons/fa6";


export default function page() {
  
  // const { contactInfo, contactInfoHandler, cartQuantity, cartSubtotal } = useShoppingCart()

  return (
    <>
      <div className='relative mt-4 mb-10'>
        <button className='absolute top-2 left-7'>
          <Link href={'/cart'}>
            <FaArrowLeft className=' text-white w-6 h-6' />
          </Link>
        </button>
        <h1 className="text-white font-black text-3xl text-center">Tus datos</h1>
      </div>

      {/* <div className="w-full">
        <form action="" className="flex flex-col w-full">

          <div className="flex flex-col gap-4 mx-auto max-w-[70%] md:max-w-[50%]">
            <label htmlFor="nombre" className="text-sm text-gray-300 w-full">Nombre</label>
            <input value={contactInfo.nombre} onChange={contactInfoHandler('nombre')} name="nombre" type="text" placeholder="Ingrese su nombre" className="p-2 rounded-lg" />
            <label htmlFor="email" className="text-sm text-gray-300">Email</label>
            <input value={contactInfo.email} onChange={contactInfoHandler('email')} name="email" type="email" placeholder="Ingrese su correo" className="p-2 rounded-lg" />
            <label htmlFor="whatsapp" className="text-sm text-gray-300">Whatsapp</label>
            <input value={contactInfo.whatsapp} onChange={contactInfoHandler('whatsapp')} name="whatsapp" type="number" placeholder="Ingrese su WhatsApp" className="p-2 rounded-lg" />
          </div>
          
      
          <footer>
            <div className="bg-gradient-to-t from-rose-400 to-rose-600 fixed bottom-0 w-full flex items-center justify-between px-6 py-3">
              <div className='flex flex-col gap-2'>
                <p className="text-white font-semibold text-lg">N° de productos: <span className='font-light'>{cartQuantity}</span></p>
                <p className="text-white font-semibold text-lg">Total: <span className='font-light'>{formatCurrency(cartSubtotal)}</span></p>
              </div>
              <Link href={'/checkout'}>
                <button
                  className="bg-gradient-to-r from-rose-200 to-pink-300 text-md text-bgblue font-semibold rounded-3xl px-3 py-2 flex items-center justify-between gap-2 hover:scale-105 ease-out duration-300 hover:shadow-2xl">
                  <FaCreditCard className="w-6 h-6" />
                  Ir al Pago
                </button>
              </Link>
            </div>
          </footer>
        </form>
      </div> */}
    </>
  );
}