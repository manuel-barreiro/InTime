'use client'

import { useEffect, useState } from "react";
import { IProduct } from "@/constants/product";
import Image from "next/image";
import { useShoppingCart } from "@/context/ShoppingCartContext";
import { ImSpinner9 } from "react-icons/im";

interface MercadoPagoButtonProps {
  envioCarrito: IProduct[];
}

export const MercadoPagoButton = ({ envioCarrito }: MercadoPagoButtonProps) => {

  const { contactInfo } = useShoppingCart()

  const [url, setUrl] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const generateLink = async () => {
      setLoading(true);
      try {
        const res = await fetch('/api/checkout', {
          method: 'POST', 
          body: JSON.stringify({envioCarrito, contactInfo})
        })
        const data = await res.json()
        setUrl(data.url)
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };
    generateLink()
  }, [envioCarrito, contactInfo])

  return (
    <div className="flex flex-col gap-5 items-center">
      {loading ? (
        <div className="flex flex-col gap-2 items-center">
          <button className="rounded-md bg-sky-600 w-[300px] p-3 flex justify-center">
            <span className="text-white flex gap-3 items-center">
              <ImSpinner9 size={20} className="animate-spin" />
              Generando link de pago
            </span>
          </button>
          <span className="text-gray-400 text-xs">Pagá de manera segura</span>
        </div>) :

        (<div className="flex flex-col gap-2 items-center">
        <button className="rounded-md bg-[#00aeef] hover:bg-sky-600 w-[300px] p-3 flex justify-center">
          <a href={url} className="text-white flex gap-3 items-center">
            <Image src={'/MPLogo.svg'} width={30} height={30} alt="mp" priority={true}/>
            Pagar con Mercado Pago
          </a>
        </button>
        <span className="text-gray-400 text-xs">Pagá de manera segura</span>
      </div>)
      } 
    </div>
  );
};