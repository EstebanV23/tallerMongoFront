import { motion } from 'framer-motion'
import { variantsAlert, variantsAlertItem } from '../constans/variantsAlert'

export default function Alert ({ message, type }) {
  return (
    <motion.div
      variants={variantsAlert}
      initial='initial'
      animate='animate'
      exit='exit'
      className='fixed right-1 bottom-10 py-5 px-8 text-sm rounded-xl shadow-2xl z-20 border-2 bg-slate-200 border-slate-300 md:px-12 md:bottom-20 md:right-20 md:text-lg'
    >
      <motion.p variants={variantsAlertItem}>
        {message}
      </motion.p>
    </motion.div>
  )
}
