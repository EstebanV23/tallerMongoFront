import { motion } from 'framer-motion'

const COLORS = {
  blue: 'bg-blue-300 text-blue-800 border border-blue-400 bg-opacity-20 hover:bg-opacity-50',
  red: 'bg-red-300 text-red-500 border border-red-400 bg-opacity-20 hover:bg-opacity-50',
  green: 'bg-green-300 text-green-600 border border-green-400 bg-opacity-20 hover:bg-opacity-50',
  yellow: 'bg-yellow-500 hover:bg-yellow-700 text-white',
  gray: 'bg-gray-500 hover:bg-gray-700 text-white',
  indigo: 'bg-indigo-500 hover:bg-indigo-700 text-white',
  purple: 'bg-purple-500 hover:bg-purple-700 text-white',
  pink: 'bg-pink-500 hover:bg-pink-700 text-white',
  teal: 'bg-teal-500 hover:bg-teal-700 text-white',
  orange: 'bg-orange-500 hover:bg-orange-700 text-white',
  black: 'bg-black hover:bg-gray-900 text-white',
  slate: 'bg-slate-300 text-slate-700 border border-slate-400 bg-opacity-20 hover:bg-opacity-50'
}

const defaultVairants = {
  initial: {
    opacity: 1,
    y: 0,
    x: 0
  },
  animate: {
    opacity: 1,
    y: 0,
    x: 0
  }
}

export default function SecondaryButton ({ color, className, children, variants, ...props }) {
  const colorClass = COLORS[color] || COLORS.slate
  const myVariants = variants || defaultVairants
  return (
    <motion.button variants={myVariants} className={`transition-all duration-200 ease-in-out py-1 px-4 ${colorClass} ${className}`} {...props}>{children}</motion.button>
  )
}
