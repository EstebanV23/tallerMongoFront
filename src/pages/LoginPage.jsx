import React, { useState } from 'react'
import LoginForm from '../components/LoginForm'
import { PatterSvg } from '../components/Icons'
import { AnimatePresence } from 'framer-motion'
import RegisterForm from '../components/RegisterForm'

const ITEMS = [
  {
    word: 'Login',
    component: <LoginForm />
  },
  {
    word: 'Register',
    component: <RegisterForm />
  }
]

export default function LoginPage () {
  const [layout, setLayout] = useState(0)

  return (
    <div className='bg-gradient-to-tr from-gray-800 to-gray-300 min-h-screen flex'>
      <img src='the-uts.webp' className='h-screen hidden left-0 top-0 object-cover w-[40%] opacity-100 md:block' />
      <div className='grid h-screen place-items-center w-full'>
        <div className='rounded-xl bg-gradient-to-b from-slate-100 to-slate-200 w-full max-w-[550px] z-10 shadow-xl p-2 overflow-y-auto h-[80vh] form-scroll'>
          <img src='logo.png' alt='' />
          <div className='w-full flex flex-col gap-2 md:flex-row'>
            {
              ITEMS.map((item, index) => (
                <p key={index} className={`w-full md:w-1/2 flex items-center justify-center py-3 rounded-lg cursor-pointer hover:bg-slate-200 transition-all duration-150 ease-in-out ${layout === index && 'bg-slate-200'}`} onClick={() => setLayout(index)}>{item.word}</p>
              ))
            }
          </div>
          <AnimatePresence>
            {ITEMS[layout].component}
          </AnimatePresence>
        </div>
      </div>
      <PatterSvg className='fixed left-0 top-0 h-screen w-screen -z-0 opacity-5' />
    </div>
  )
}
