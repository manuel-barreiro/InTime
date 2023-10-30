'use client'

import { useEffect, useState } from "react";
import { IProduct } from "@/constants/product";
import Image from "next/image";

interface MercadoPagoButtonProps {
  envioCarrito: IProduct[];
}

export const MercadoPagoButton = ({ envioCarrito }: MercadoPagoButtonProps) => {

  const [url, setUrl] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const generateLink = async () => {
      setLoading(true);
      try {
        const res = await fetch('/api/checkout', {
          method: 'POST', 
          body: JSON.stringify(envioCarrito)
        })
        const data = await res.json()
        setUrl(data.url)
        console.log(data.url)
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };
    generateLink()
  }, [envioCarrito])

  return (
    <div className="flex flex-col gap-5 items-center">
      {loading ? (
        <div className="flex flex-col gap-2 items-center">
          <button className="rounded-md bg-[#186eae] hover:bg-sky-800 max-w-md p-3">
            <span className="text-white flex gap-3 items-center">
              <Image src={'/spinner.svg'} height={30} width={30} alt="mp" className="animate-spin" priority={true}/>
              Generando link de pago...
            </span>
          </button>
          <span className="text-gray-400 text-xs">Pagá de manera segura</span>
        </div>) :

        (<div className="flex flex-col gap-2 items-center">
        <button className="rounded-md bg-[#186eae] hover:bg-sky-800 max-w-md p-3">
          <a href={url} className="text-white flex gap-3 items-center">
            <Image src={'/MPLogo.svg'} height={40} width={40} alt="mp" priority={true}/>
            Pagar con Mercado Pago
          </a>
        </button>
        <span className="text-gray-400 text-xs">Pagá de manera segura</span>
      </div>)
        
        
      } 
    </div>
  );
};