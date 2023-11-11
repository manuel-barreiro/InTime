'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { useEffect, useState } from "react";
import { cn } from "@/utilities";
import { formatHour } from "@/utilities/dateFunctions";
import { useAuth } from "@/context/AuthContext";
import Auth from "@/components/Auth";
import { Button } from "@/components/ui/button";
import { LuLogOut } from "react-icons/lu";

export default function page () {
  const [pedidos, setPedidos] = useState<any>([]);
  // TODO: Add loading skeleton
  const [loading, setLoading] = useState<boolean>(true);
  const [entregado, setEntregado] = useState<boolean>(false);

  const { auth, setAuth } = useAuth()

  useEffect(() => {
    const fetchPedidos = async () => {
      setLoading(true);
      try {
        const res = await fetch('/api/getOrders', {
          cache: 'no-store',
          method: 'POST',
        })
        const data = await res.json()
        setPedidos(data)
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    }
    fetchPedidos()
  }, [entregado])

  // Función para marcar como entregado o en preparación
  async function ordenEntregada(id: string) {
    try {
      const res = await fetch('/api/getOrders', {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({id: id})
      })
      
      // Para forzar el re-render con el useEffect
      setEntregado(prevState => !prevState)

    } catch (error) {
        console.log(error)
    }
  }

  return (
    <>
    {!auth ? 
      <Auth /> :
      <>
      <div className="w-full bg-bgblue sticky top-0 z-50 p-4 flex justify-center items-center gap-7 border-b-[1px] mb-3">
        <h3 className="text-white text-2xl px-5 md:p-0 md:text-3xl font-bold">Pedidos - Nigeria</h3>
        <Button onClick={() => setAuth(false)} className="bg-cartPink">
          <LuLogOut className="w-5 h-5 md:w-6 md:h-6" />
        </Button>
      </div>
      <div className="text-white flex flex-col gap-6 items-center justify-center">
        <Accordion type="multiple" className="md:w-[60%] w-[90%]">
          {pedidos?.map((pedido: any) => {
            if (pedido.status == 'approved') {
              return (<AccordionItem key={pedido.id} value={`item-${pedido.id}`} className="h-auto">
              <AccordionTrigger>
                <div className="text-2xl flex items-center gap-3">
                  {!pedido.entregado ? 
                    <Badge className="bg-sky-500">En Preparación</Badge>
                    :
                    <Badge className="bg-green-600">Entregado</Badge>}
                  <p className={cn("text-sm md:text-md lg:text-lg", {'line-through text-gray-400': pedido.entregado})}>#{pedido.id.toString().slice(-4)} | <span className="font-bold">{pedido.nombre} </span> | <span>{formatHour(pedido.date_created)} </span></p>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-row justify-between items-center">
                  <ul className="text-sm md:text-md lg:text-lg font-semibold">
                    {pedido.items.map((item: any) => (
                      <li key={item.id}>x{item.quantity} {item.title}</li>
                    ))}
                  </ul>
                  {!pedido.entregado ?
                    <button onClick={() => ordenEntregada(pedido._id)} className="bg-green-600 p-2 rounded-lg text-xs md:text-sm lg:text-md">
                      Marcar como Entregado
                    </button>
                    :
                    <button onClick={() => ordenEntregada(pedido._id)} className="bg-sky-500 p-2 rounded-lg text-xs md:text-sm lg:text-md">
                      Marcar como En Preparación
                    </button>
                  } 
                </div>
              </AccordionContent>
            </AccordionItem>)
            }
            })}
        </Accordion>
      </div>
      </>
      }
    </>
  )
}