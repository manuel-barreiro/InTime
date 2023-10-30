'use client'

import { useEffect, useState } from "react";
import { IProduct } from "@/constants/product";
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'



interface MercadoPagoButtonProps {
  envioCarrito: IProduct[];
}

export const MercadoPagoButton = ({ envioCarrito }: MercadoPagoButtonProps) => {
  initMercadoPago('TEST-94ae4081-76df-40a3-b0a7-a62d93671e97');

  const [preferenceId, setPreferenceId] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  const generateLink = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST', 
        body: JSON.stringify(envioCarrito)
      })
      const data = await res.json()
      setPreferenceId(data.id)
      console.log(data.id)
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
      {preferenceId && (
        // <button>
        //   <a href={url} target="_blank" className="text-white">PAGAR CON MP</a>
        // </button>
        <div className="max-w-sm">
          <Wallet initialization={{ preferenceId }} />
        </div>
      )} 
    </div>
  );
};