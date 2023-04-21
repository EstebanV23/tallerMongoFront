import { motion } from 'framer-motion'

export default function VisiblePassword ({ register, props, name, variants, watch }) {
  return (
    <motion.div className='flex items-center gap-1 text-sm' variants={variants}>
      <input type='checkbox' {...register(name)} id={name} {...props} className='w-3 h-3' />
      <label htmlFor={name}>{watch(name) ? 'Hide' : 'Show'} password</label>
    </motion.div>
  )
}
