import { motion } from 'framer-motion'

export default function MainButton ({ type, text, className, ...props }) {
  return (
    <motion.button type={type} {...props} className={`w-full p-2 px-4 bg-slate-600 rounded-lg font-medium text-slate-200 transition-all ease-in-out hover:bg-slate-700 text-lg ${className}`}>{text}</motion.button>
  )
}
