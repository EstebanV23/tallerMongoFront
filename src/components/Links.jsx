import { motion } from 'framer-motion'
import React, { useContext } from 'react'
import { variantsAlertItem } from '../constans/variantsAlert'
import { LogOutIcon } from './Icons'
import { UserContext } from '../providers/UserProvider'
import RenderConditional from './RenderConditional'
import { NavLink } from 'react-router-dom'
import { NavbarContext } from '../providers/NavbarProvider'

export const listLink = [
  {
    name: 'List Registers',
    path: '/admin/list-registers',
    id: 1001
  },
  {
    name: 'New Register',
    path: '/admin/new-register',
    id: 1002
  },
  {
    name: 'Home',
    path: '/admin/',
    id: 1003
  }
]

function LinksAdmin () {
  const { setIsOpen } = useContext(NavbarContext)
  return listLink.map(link => (
    <motion.div variants={variantsAlertItem} key={link.id}>
      <NavLink onClick={() => setIsOpen(false)} className='flex items-center text-slate-800 fill-slate-800 gap-1 py-1 px-3 transition-all duration-150 ease-in-out hover:text-slate-500 hover:fill-slate-500' to={link.path}>{link.name}</NavLink>
    </motion.div>
  ))
}

export default function Links () {
  const { logOut, user } = useContext(UserContext)
  return (
    <>
      <RenderConditional condition={user.role.nameId === '2'}>
        <LinksAdmin />
      </RenderConditional>
      <motion.button
        variants={variantsAlertItem}
        initial='initial'
        animate='animate'
        onClick={logOut}
        type='button'
        className='flex items-center text-slate-800 fill-slate-800 gap-1 py-1 px-3 transition-all duration-150 ease-in-out hover:text-slate-500 hover:fill-slate-500'
      >
        LogOut<LogOutIcon className='w-[16px]' />
      </motion.button>
    </>
  )
}
