'use client'

import { createContext, useContext, useEffect, useState } from 'react'

type AuthProviderProps = {
  children: React.ReactNode
}

type AuthContext = {
  auth: boolean
  setAuth: React.Dispatch<React.SetStateAction<boolean>>
}



const AuthContext = createContext({} as AuthContext)

export function useAuth (): any {
  return useContext(AuthContext)
}

export function AuthProvider ({ children }: AuthProviderProps): JSX.Element {

  const [auth, setAuth] = useState(false);

  
  // Read localStorage
  useEffect(() => {
    const authentication: string | null = localStorage.getItem('auth')
    if (authentication) {
      const authLS = JSON.parse(authentication)
      if (authLS === true) {
        setAuth(authLS)
      }
    }
  }, [])

  // Set localStorage on state change
  useEffect(() => {
    localStorage.setItem('auth', JSON.stringify(auth))
  }, [auth])



  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  )
}
