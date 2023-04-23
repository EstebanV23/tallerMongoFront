import { createContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export const NavbarContext = createContext()

export default function NavbarProvider ({ children }) {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  const values = {
    isOpen,
    setIsOpen,
    toggle
  }

  return (
    <NavbarContext.Provider value={values}>
      {children}
    </NavbarContext.Provider>
  )
}
