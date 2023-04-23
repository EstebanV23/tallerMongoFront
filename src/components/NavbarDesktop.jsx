import { motion } from 'framer-motion'
import { variantsAlertItem } from '../constans/variantsAlert'
import HamburgerButton from './HamburgerButton'
import Links from './Links'

export default function NavbarDesktop () {
  return (
    <nav className='relative w-100 max-w-6xl m-auto flex justify-between p-3 items-center h-16'>
      <motion.img
        src='/uts-logo.png'
        alt='main logo'
        className='h-full'
        variants={variantsAlertItem}
        initial='initial'
        animate='animate'
      />
      <HamburgerButton />
      <div className='md:flex hidden'>
        <Links />
      </div>
    </nav>
  )
}
