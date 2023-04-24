import { motion } from 'framer-motion'
import { itemVariants } from '../constans/variantsForm'

export default function Tr ({ children, className, denied, ...props }) {
  const color = denied ? 'hover:bg-red-100' : 'hover:bg-slate-100'
  return (
    <motion.tr variants={itemVariants} className={`${color} border-b-2 py-3 ${className}`} {...props}>{children}</motion.tr>
  )
}
