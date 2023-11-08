'use client'

import { set } from 'mongoose'
import { ReactEventHandler, createContext, useContext, useEffect, useState } from 'react'
// import { useLocalStorage } from "../hooks/useLocalStorage"

type ShoppingCartProviderProps = {
  children: React.ReactNode
}

type ShoppingCartContext = {
  getItemQuantity: (id: number) => number
  increaseCartQuantity: (id: number, name: string, price: number) => void
  decreaseCartQuantity: (id: number) => void
  // contactInfoHandler: (name: any) => ReactEventHandler<HTMLInputElement>
  // contactInfo: { nombre: string, email: string, whatsapp: number }
  contactInfo: { nombre: string, email: string, whatsapp: string }
  setContactInfo: React.Dispatch<React.SetStateAction<{ nombre: string; email: string; whatsapp: string; }>>
  cartItems: CartItem[]
  cartSubtotal: number
  cartQuantity: number
}

type CartItem = {
  id: number
  name: string
  price: number
  quantity: number
}

const ShoppingCartContext = createContext({} as ShoppingCartContext)

export function useShoppingCart (): any {
  return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider ({ children }: ShoppingCartProviderProps): JSX.Element {

  const [contactInfo, setContactInfo] = useState({ nombre: '', email: '', whatsapp: '' });
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  
  // Read localStorage
  useEffect(() => {
    const cart: string | null = localStorage.getItem('cartItems')
    if (cart) {
      const cartItemsLS = JSON.parse(cart)
      if (cartItemsLS.length > 0) {
        setCartItems(cartItemsLS)
      }
    } else {
      setCartItems([])
    }

    const contact: string | null = localStorage.getItem('contactInfo')
    if (contact) {
      const contactInfoLS = JSON.parse(contact)
      if (contactInfoLS.nombre !== '' || contactInfoLS.email !== '' || contactInfoLS.whatsapp !== '') {
        setContactInfo(contactInfoLS)
      }
    }
  }, [])

  // Set localStorage on state change
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
  }, [cartItems])

  useEffect(() => {
    localStorage.setItem('contactInfo', JSON.stringify(contactInfo))
  }, [contactInfo])


  const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0)
  const cartSubtotal = cartItems.reduce((subtotal, item) => item.quantity * item.price + subtotal, 0)

  function getItemQuantity (id: number) {
    return cartItems.find(item => item.id === id)?.quantity || 0
  }

  function increaseCartQuantity (id: number, name: string, price: number) {
    setCartItems(currItems => {
      if (currItems.find(item => item.id === id) == null) {
        return [...currItems, { id, name, price, quantity: 1 }]
      } else {
        return currItems.map(item => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 }
          } else {
            return item
          }
        })
      }
    })
  }

  function decreaseCartQuantity (id: number) {
    setCartItems(currItems => {
      if (currItems.find(item => item.id === id)?.quantity === 1) {
        return currItems.filter(item => item.id !== id)
      } else {
        return currItems.map(item => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 }
          } else {
            return item
          }
        })
      }
    })
  }

  return (
    <ShoppingCartContext.Provider value={{ getItemQuantity, increaseCartQuantity, decreaseCartQuantity, setContactInfo, contactInfo,  cartItems, cartSubtotal, cartQuantity }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}
