'use client'

import { createContext, useContext, useEffect, useState } from 'react'
// import { useLocalStorage } from "../hooks/useLocalStorage"

type ShoppingCartProviderProps = {
  children: React.ReactNode
}

type ShoppingCartContext = {
  openCart: () => void
  closeCart: () => void
  getItemQuantity: (id: number) => number
  increaseCartQuantity: (id: number, name: string, price: number) => void
  decreaseCartQuantity: (id: number) => void
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
  const [isOpen, setIsOpen] = useState(false)
  const openCart = () => setIsOpen(true)
  const closeCart = () => setIsOpen(false)

  const [cartItems, setCartItems] = useState<CartItem[]>([])

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
    <ShoppingCartContext.Provider value={{ openCart, closeCart, getItemQuantity, increaseCartQuantity, decreaseCartQuantity, cartItems, cartSubtotal, cartQuantity }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}
