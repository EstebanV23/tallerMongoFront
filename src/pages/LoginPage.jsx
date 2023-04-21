import React, { useState } from 'react'
import LoginForm from '../components/LoginForm'
import { PatterSvg } from '../components/Icons'
import { AnimatePresence, motion } from 'framer-motion'
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
    <div className='bg-gradient-to-tr from-green-950 to-green-300 min-h-screen grid place-items-center'>
      <div className='rounded-xl bg-gradient-to-b from-slate-100 to-slate-200 w-full max-w-[550px] z-10 shadow-xl p-2 overflow-y-auto max-h-[80vh] form-scroll'>
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
      <PatterSvg className='fixed left-0 top-0 h-screen w-screen -z-0 opacity-30' />
    </div>
  )
}
