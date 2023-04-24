import { motion } from 'framer-motion'
import { variantsNavbar } from '../constans/variantsNavbar'
import { NavbarContext } from '../providers/NavbarProvider'
import { useContext } from 'react'
import Links from './Links'
import Backdrop from './Backdrop'

export default function NavbarMobile () {
  const { setIsOpen } = useContext(NavbarContext)
  return (
    <>
      <motion.nav
        variants={variantsNavbar}
        initial='initial'
        animate='animate'
        exit='initial'
        className='w-3/4 flex flex-col md:hidden max-w-[300px] bg-slate-100 h-screen p-3 fixed top-0 left-0 z-50 justify-center items-center gap-20'
      >
        <motion.img src='/uts-logo.png' className='w-1/2 min-w-[200px] object-cover' />
        <div className='flex flex-col'>
          <Links />
        </div>
      </motion.nav>
      <Backdrop onClick={() => setIsOpen(false)} />
    </>
  )
}
