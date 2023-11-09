"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from "next/image"
import { FormEvent, use, useEffect, useState } from "react"



export default function DemoCreateAccount() {
  

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      user: { value: string };
      password: { value: string };
    };
    const user = target.user.value; // typechecks!
    const password = target.password.value; // typechecks
    
    if (user === process.env.NEXT_PUBLIC_ADMIN_USER && password === process.env.NEXT_PUBLIC_ADMIN_PASS) {
      alert("You're logged in as admin!");
      return;
    } else {
      alert("Wrong credentials!");
      console.log(user, password)
      console.log(process.env.ADMIN_USER, process.env.ADMIN_PASS)
    }
  };



  return (
    <div className="h-screen flex justify-center items-center font-montserrat">
      <Card className="w-[500px]">
        <CardHeader className="space-y-1">
          <Image src={'/logoTransparente.png'} height={50} width={50} alt='logo' priority={true} className="self-center mb-4" />
          <CardTitle className="text-2xl">Iniciar sesión</CardTitle>
          <CardDescription>
            Para acceder a esta función debes iniciar sesión.
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>        
          <CardContent className="grid gap-4">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
            </div>                  
              <div className="grid gap-2">
                <Label htmlFor="user">Usuario</Label>
                <Input id="user" type="text" placeholder="Usuario" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="********" />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="bg-cartPink w-full">Ingresar</Button>
            </CardFooter>
          </form>
      </Card>
    </div>
    
  )
}