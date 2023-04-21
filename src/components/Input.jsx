import { motion } from 'framer-motion'

export default function Input ({ type, register, errors, label, placeholder, name, validation, disabled = false, variants, callback = null, props }) {
  const { validate, messages } = validation[name] || { validate: '', messages: '' }
  const error = errors[name]

  if (validate.validate) {
    validate.validate = callback
  }

  return (
    <motion.div className='flex gap-1 flex-col w-100 items-start' variants={variants}>
      <label htmlFor={name} className={`${error && 'text-red-500'}`}>{label}</label>
      <input className={`px-3 py-2 rounded-lg w-full outline-none border-2 ${error && 'border-red-400'} transition-all duration-300 ease-in-out ${!error && 'focus:border-slate-800'}`} {...register(name, validate)} type={type} id={name} placeholder={placeholder} disabled={disabled} {...props} />
      {error && <p className='text-sm text-red-500'>{messages[error.type]}</p>}
    </motion.div>
  )
}

export function Select ({ register, errors, label, name, validation, disabled = false, variants, props, children }) {
  const { validate, messages } = validation[name] || { validate: '', messages: '' }
  const error = errors[name]

  return (
    <motion.div className='flex gap-1 flex-col w-100 items-start' variants={variants}>
      <label htmlFor={name} className={`${error && 'text-red-500'}`}>{label}</label>
      <select className={`px-3 py-2 rounded-lg w-full outline-none border-2 ${error && 'border-red-400'} transition-all duration-300 ease-in-out bg-white ${!error && 'focus:border-slate-800'}`} {...register(name, validate)} id={name} disabled={disabled} {...props}>{children}</select>
      {error && <p className='text-sm text-red-500'>{messages[error.type]}</p>}
    </motion.div>
  )
}
