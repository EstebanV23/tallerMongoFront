import React from 'react'
import Backdrop from './Backdrop'

export default function Modal ({ children, setOpen }) {
  return (
    <>
      <div className='p-4 bg-white text-slate-700 flex flex-col fixed left-1/2 top-1/2 -translate-x-1/2 rounded-lg w-11/12 max-w-xl -translate-y-1/2 gap-4 z-50'>
        {children}
      </div>
      <Backdrop onClick={() => setOpen(false)} />
    </>
  )
}
