'use client'

import { useEffect, useState } from "react";
import { IProduct } from "@/constants/product";

interface MercadoPagoButtonProps {
  cartMp: IProduct[];
}

export const MercadoPagoButton = ({ cartMp }: MercadoPagoButtonProps) => {
  const [url, setUrl] = useState<null | string | any>(null);
  const [loading, setLoading] = useState<boolean>(true);


  const generateLink = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST', 
        body: JSON.stringify(cartMp)
      })
      const data = await res.json()
      setUrl(data.url)
      console.log(data.url)
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col gap-5">
      <button className="text-white" onClick={generateLink}>
        generateLink
      </button>
      {!loading && (
        <button>
          <a href={url} target="_blank" className="text-white">PAGAR CON MP</a>
        </button>
      )} 
    </div>
  );
};