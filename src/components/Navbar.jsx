import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import { UserContext } from '../providers/UserProvider'

export default function Navbar () {
  const { logOut } = useContext(UserContext)
  return (
    <>
      <div className='w-100 flex justify-between p-3 items-center'>
        <img src='uts-logo.png' alt='main logo' className='w-50' />
        <button onClick={logOut} type='button'>LogOut</button>
      </div>
      <Outlet />
    </>
  )
}
