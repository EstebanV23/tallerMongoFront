import { motion } from 'framer-motion'
import { variantsAlert, variantsAlertItem } from '../constans/variantsAlert'

export default function Alert ({ message, type }) {
  return (
    <motion.div
      variants={variantsAlert}
      initial='initial'
      animate='animate'
      exit='exit'
      className='fixed right-1 bottom-10 py-2 px-8 text-sm rounded-md shadow-lg border w-full text-center max-w-[300px] z-20 bg-white md:px-12 md:bottom-20 md:right-20 md:text-base'
    >
      <motion.p variants={variantsAlertItem}>
        {message}
      </motion.p>
    </motion.div>
  )
}
