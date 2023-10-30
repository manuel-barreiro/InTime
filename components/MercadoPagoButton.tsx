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
      {url && (
        <div className="flex flex-col gap-2 items-center">
          <button className="rounded-md bg-[#186eae] hover:bg-sky-800 max-w-md p-5">
            <a href={url} className="text-white flex gap-3 items-center">
              <Image src={'/MPLogo.svg'} height={50} width={50} alt="mp" priority={true}/>
              Pagar con Mercado Pago
            </a>
          </button>
          <span className="text-gray-400">Pagá de manera segura</span>
        </div>
        
        
      )} 
    </div>
  );
};