'use client'

import { ReactEventHandler, createContext, useContext, useEffect, useState } from 'react'
// import { useLocalStorage } from "../hooks/useLocalStorage"

type ShoppingCartProviderProps = {
  children: React.ReactNode
}

type ShoppingCartContext = {
  getItemQuantity: (id: number) => number
  increaseCartQuantity: (id: number, name: string, price: number) => void
  decreaseCartQuantity: (id: number) => void
  contactInfoHandler: (name: any) => ReactEventHandler<HTMLInputElement>
  contactInfo: { nombre: string, email: string, whatsapp: number }
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
  // const [isOpen, setIsOpen] = useState(false)
  // const openCart = () => setIsOpen(true)
  // const closeCart = () => setIsOpen(false)

  const [contactInfo, setContactInfo] = useState({ nombre: '', email: '', whatsapp: 0 });

  function contactInfoHandler (name: any) {
    return (event: any) => {
      setContactInfo({ ...contactInfo, [name]: event.target.value });
    };
  };

  const [cartItems, setCartItems] = useState<CartItem[]>([])
  
  // Read localStorage
  useEffect(() => {
    const cart: string | null = localStorage.getItem('cartItems')
    if (cart) {
      const cartItems = JSON.parse(cart)
      if (cartItems.length > 0) {
        setCartItems(cartItems)
      }
    } else {
      setCartItems([])
    }
  }, [])

  // Set localStorage on state change
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
  }, [cartItems])

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
    <ShoppingCartContext.Provider value={{ getItemQuantity, increaseCartQuantity, decreaseCartQuantity, contactInfoHandler, contactInfo,  cartItems, cartSubtotal, cartQuantity }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}
