'use client'
import { useShoppingCart } from "@/context/ShoppingCartContext";
import Link from "next/link";


export default function page() {
  
  const { contactInfo, contactInfoHandler } = useShoppingCart()

  return (
    <div className="flex flex-col items-center gap-5">
      <h1 className="text-center text-white text-3xl">Contact Page</h1>
      <form action="" className="flex flex-col gap-2">
        <label htmlFor="nombre" className="text-sm text-gray-300">Nombre</label>
        <input value={contactInfo.nombre} onChange={contactInfoHandler('nombre')} name="nombre" type="text" placeholder="Ingrese su nombre" className="p-2 rounded-lg" />
        <label htmlFor="email" className="text-sm text-gray-300">Email</label>
        <input value={contactInfo.email} onChange={contactInfoHandler('email')} name="email" type="email" placeholder="Ingrese su correo" className="p-2 rounded-lg" />
        <label htmlFor="whatsapp" className="text-sm text-gray-300">Whatsapp</label>
        <input value={contactInfo.whatsapp} onChange={contactInfoHandler('whatsapp')} name="whatsapp" type="number" placeholder="Ingrese su WhatsApp" className="p-2 rounded-lg" />
      </form>
      <Link href={'/checkout'} className="text-center text-white">Checkout</Link>
    </div>
  );
}