'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/utilities/utilities";

function formatDate(inputDate: string) {
  const originalDate = new Date(inputDate);
  const formattedDate = originalDate.toLocaleString('es-AR', {
    day: '2-digit',
    month: '2-digit',
    year: '2-digit',
    timeZone: 'America/Argentina/Buenos_Aires' // Especifica la zona horaria que desees utilizar
  });
  
  return formattedDate;
}

function formatHour(inputDate: string) {
  const originalDate = new Date(inputDate);
  const formattedDate = originalDate.toLocaleString('es-AR', {
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'America/Argentina/Buenos_Aires' // Especifica la zona horaria que desees utilizar
  });
  
  return formattedDate;
}

export default function page () {
  const [pedidos, setPedidos] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [entregado, setEntregado] = useState<boolean>(false);
  const router = useRouter()

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
    <div className="text-white flex flex-col gap-6 mt-5 items-center justify-center">
      <h3 className="text-white text-4xl font-bold">Pedidos - Nigeria</h3>
      <Accordion type="single" collapsible className="md:w-[60%] w-[90%]">
        {pedidos?.map((pedido: any) => {
          if (pedido.status == 'approved') {
            return (<AccordionItem key={pedido.id} value={`item-${pedido.id}`} className="h-auto">
            <AccordionTrigger>
              <div className="text-2xl flex items-center gap-3">
                {!pedido.entregado ? 
                  <Badge className="bg-sky-500">En Preparación</Badge>
                  :
                  <Badge className="bg-green-600">Entregado</Badge>}
                <p className={cn("", {'line-through text-gray-400': pedido.entregado})}>#{pedido.id.toString().slice(-4)} | <span className="font-bold">{pedido.nombre} </span> | <span>{formatHour(pedido.date_created)} </span></p>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-row justify-between items-center">
                <ul className="text-lg font-semibold">
                  {pedido.items.map((item: any) => (
                    <li key={item.id}>x{item.quantity} {item.title}</li>
                  ))}
                </ul>
                {!pedido.entregado ?
                  <button onClick={() => ordenEntregada(pedido._id)} className="bg-green-600 p-2 rounded-lg">
                    Marcar como Entregado
                  </button>
                  :
                  <button onClick={() => ordenEntregada(pedido._id)} className="bg-sky-500 p-2 rounded-lg">
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
  )
}