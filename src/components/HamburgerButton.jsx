import { motion } from 'framer-motion'
import { variantsAlertItem } from '../constans/variantsAlert'
import { NavbarContext } from '../providers/NavbarProvider'
import { useContext } from 'react'

export default function HamburgerButton () {
  const { toggle } = useContext(NavbarContext)
  return (
    <motion.button
      variants={variantsAlertItem}
      initial='initial'
      animate='animate'
      className='navbar-burger flex md:hidden items-center text-slate-600 p-3'
      onClick={() => toggle()}
    >
      <svg className='block h-6 w-6 fill-current' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
        <title>Mobile menu</title>
        <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
      </svg>
    </motion.button>
  )
}
