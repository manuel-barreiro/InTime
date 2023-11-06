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

  const router = useRouter()

  const [pedidos, setPedidos] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);

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
  }, [])

  async function ordenEntregada({ id }: any) {
    try {
      const res = await fetch('/api/getOrders', {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ id })
      })
  
      if (!res.ok) {
        throw new Error("Failed to update task.")
      }
  
      router.refresh()
      router.push("/pedidos")
      
    } catch (error) {
        console.log(error)
    }
  }
  

  return (
    <div className="text-white flex flex-col gap-6 mt-5 items-center justify-center">
      <h3 className="text-white text-4xl font-bold">Pedidos - Nigeria</h3>
      <Accordion type="single" collapsible className="w-[60%]">
        {pedidos?.map((pedido: any) => {
          if (pedido.status == 'approved') {
            return (<AccordionItem key={pedido.id} value={`item-${pedido.id}`} className="h-auto">
            <AccordionTrigger>
              <div className="text-2xl flex items-center gap-3">
                <Badge className="bg-sky-500">En Preparación</Badge>
                <span>#{pedido.id.toString().slice(-4)} | <span className="font-bold">{pedido.nombre}</span></span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-row justify-between items-center">
                <ul className="text-lg font-semibold">
                  {pedido.items.map((item: any) => (
                    <li key={item.id}>x{item.quantity} {item.title}</li>
                  ))}
                </ul>
                <button onClick={ordenEntregada} className="bg-green-600 p-2 rounded-lg">
                  Entregado
                </button>
              </div>
            </AccordionContent>
          </AccordionItem>)
          }
          })}
    </Accordion>
    </div>
  )
}