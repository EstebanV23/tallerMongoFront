import React, { useContext, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import Input from './Input'
import validationLoginInputs from '../constans/validationLoginInputs'
import VisiblePassword from './VisiblePassword'
import MainButton from './MainButton'
import { UserContext } from '../providers/UserProvider'
import { AnimatePresence, motion } from 'framer-motion'
import { itemVariants, variantsError, variantsForm } from '../constans/variantsForm'
import useRestartError from '../customHooks/useRestartError'

export default function LoginForm () {
  const { formState: { errors }, register, handleSubmit, watch } = useForm()
  const { setUser, error, setError, logIn } = useContext(UserContext)

  function submitData (values) {
    setUser(values)
    logIn(values)
  }

  useRestartError()

  return (
    <form
      onSubmit={handleSubmit(submitData)}
      className='min-h-fit flex flex-col justify-center'
    >
      <motion.div
        variants={variantsForm}
        initial='initial'
        animate='animate'
        exit='initial'
        className='flex flex-col gap-3 w-full items-stretch transition-all duration-300 ease-in-out p-4'
      >
        <Input
          errors={errors}
          label='Email'
          name='email'
          placeholder='Youremail@domain.com'
          register={register}
          type='text'
          validation={validationLoginInputs}
          variants={itemVariants}
        />
        <Input
          errors={errors}
          label='Password'
          name='password'
          placeholder='********'
          register={register}
          type={!watch('visible') ? 'password' : 'text'}
          validation={validationLoginInputs}
          variants={itemVariants}
        />
        <VisiblePassword
          register={register}
          name='visible'
          watch={watch}
          variants={itemVariants}
        />
        <AnimatePresence>
          {error &&
            <motion.p
              variants={variantsError}
              initial='initial'
              animate='animate'
              exit='initial'
              className='py-2 px-4 w-full mr-auto bg-red-300 text-sm text-red-700 rounded-md'
            >
              {error}
            </motion.p>}
        </AnimatePresence>
        <MainButton
          text='Login'
          type='submit'
          variants={itemVariants}
        />
      </motion.div>
    </form>
  )
}
