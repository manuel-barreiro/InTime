"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import validator from 'validator';
 
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { FaArrowLeft } from "react-icons/fa6"

const phoneRegex = new RegExp(
  /^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/
);
 
const formSchema = z.object({
  nombre: z.string().min(2, {
    message: "Mínimo 2 caracteres.",
  }),
  email: z.string().refine((val) => validator.isEmail(val), {
    message: "Ingrese un correo válido.",
  }),
  // whatsapp: z.string().refine((val) => validator.isMobilePhone(val, 'es-AR',{strictMode: false}), {
  //   message: "Ingrese un número de celular válido.",
  // }),
  whatsapp: z.string().regex(phoneRegex, {
    message: "Ingrese un número válido.",
  }),
})
 
export default function ProfileForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nombre: "",
      email: "",
      whatsapp: "",
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }
 
  return (
    <div className="mb-20">
      <div className='relative mt-4 mb-10'>
        <button className='absolute top-2 left-7'>
          <Link href={'/cart'}>
            <FaArrowLeft className=' text-white w-6 h-6' />
          </Link>
        </button>
        <h1 className="text-white font-black text-3xl text-center">Tus datos</h1>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 text-white mx-auto w-[60%]">
          <FormField
            control={form.control}
            name="nombre"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre</FormLabel>
                <FormControl>
                  <Input className="bg-white text-black" placeholder="Ingrese su nombre" {...field} />
                </FormControl>
                <FormDescription>
                  Lo utilizaremos para reconocer tu orden.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>E-mail</FormLabel>
                <FormControl>
                  <Input className="bg-white text-black" placeholder="Ingrese su correo" {...field} />
                </FormControl>
                <FormDescription>
                  Lo utilizaremos para notificarte acerca del estado de tu orden.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="whatsapp"
            render={({ field }) => (
              <FormItem>
                <FormLabel>WhatsApp</FormLabel>
                <FormControl>
                  <Input className="bg-white text-black" placeholder="Ingrese su WhatsApp" {...field} />
                </FormControl>
                <FormDescription>
                  Lo utilizaremos para notificarte acerca del estado de tu orden.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="w-full bg-cartPink" type="submit">Ir al Checkout</Button>
        </form>
      </Form>
      </div>
  )
}