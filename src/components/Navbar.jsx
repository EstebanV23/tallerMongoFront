import { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import NavbarDesktop from './NavbarDesktop'
import { NavbarContext } from '../providers/NavbarProvider'
import RenderConditional from './RenderConditional'
import NavbarMobile from './NavbarMobile'
import { AnimatePresence } from 'framer-motion'
export default function Navbar () {
  const { isOpen } = useContext(NavbarContext)
  return (
    <>
      <AnimatePresence key={1313}>
        <NavbarDesktop />
        {isOpen && <NavbarMobile />}
      </AnimatePresence>
      <Outlet />
    </>
  )
}
