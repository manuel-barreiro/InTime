'use client'
 
import { useSearchParams } from 'next/navigation'

export default function SuccessPage() {
  const searchParams = useSearchParams()
 
  const payment_id = searchParams.get('payment_id')
  return (
    <div className='h-full flex flex-col justify-center'>
      <div className="p-6 md:mx-auto">
        <svg viewBox="0 0 24 24" className="text-cartPink w-20 h-20 mx-auto my-6">
            <path fill="currentColor"
                d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z">
            </path>
        </svg>
        <div className="text-center max-w-[80%] mx-auto flex flex-col gap-4">
            <h3 className="text-2xl text-white font-black text-center">Pedido Confirmado</h3>
            <p className="text-white text-2xl font-semibold my-2">Orden #{payment_id?.toString().slice(-4)}</p>
            <p className='text-white text-lg'>Te notificaremos cuando tu pedido esté listo para retirar.</p>
            <p className='text-white text-lg'>Acercate a nuestro stand y retiralo con tu número de orden</p>
        </div>
      </div>
    </div>
  );
}