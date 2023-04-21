import { AnimatePresence, motion } from 'framer-motion'
import { itemVariants, variantsError, variantsForm } from '../constans/variantsForm'
import Input, { Select } from './Input'
import validationRegisterInputs from '../constans/validationRegisterInputs'
import { UserContext } from '../providers/UserProvider'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import VisiblePassword from './VisiblePassword'
import MainButton from './MainButton'
import useRestartError from '../customHooks/useRestartError'

export default function RegisterForm () {
  const { formState: { errors }, register, handleSubmit, watch, reset } = useForm()
  const { setUser, error, newUser } = useContext(UserContext)

  function submitData (values) {
    setUser(values)
    const response = newUser(values)
    if (!response.error) {
      reset(_ => (
        {
          firstName: '',
          firstSurname: '',
          email: '',
          documentId: '',
          typeDocument: '',
          password: '',
          confirmPassword: ''
        }
      ))
    }
  }

  useRestartError()

  return (
    <form
      onSubmit={handleSubmit(submitData)}
    >
      <motion.div
        variants={variantsForm}
        initial='initial'
        animate='animate'
        exit='initial'
        className='flex flex-col gap-3 w-full items-stretch transition-all duration-300 ease-in-out p-4'
      >
        <motion.p variants={itemVariants} className='text-sm text-gray-500'>* Fields are required</motion.p>
        <Input
          errors={errors}
          label='* First Name'
          name='firstName'
          placeholder='Brayan'
          register={register}
          type='text'
          validation={validationRegisterInputs}
          variants={itemVariants}
        />
        <Input
          errors={errors}
          label='* First Surname'
          name='firstSurname'
          placeholder='Villamizar'
          register={register}
          type='text'
          validation={validationRegisterInputs}
          variants={itemVariants}
        />
        <Input
          errors={errors}
          label='* Email'
          name='email'
          placeholder='Youremail@domain.com'
          register={register}
          type='text'
          validation={validationRegisterInputs}
          variants={itemVariants}
        />
        <Input
          errors={errors}
          label='* Document'
          name='documentId'
          placeholder='1993823482'
          register={register}
          type='text'
          validation={validationRegisterInputs}
          variants={itemVariants}
        />
        <Select
          errors={errors}
          name='typeDocument'
          register={register}
          variants={itemVariants}
          validation={validationRegisterInputs}
          label='* Type Document'
        >
          <option value=''>...</option>
          <option value='cc'>Document Id</option>
          <option value='ti'>Card id</option>
        </Select>
        <Input
          errors={errors}
          label='* Password'
          name='password'
          placeholder='********'
          register={register}
          type={!watch('visible') ? 'password' : 'text'}
          validation={validationRegisterInputs}
          variants={itemVariants}
        />
        <Input
          errors={errors}
          label='* Confirm Password'
          name='confirmPassword'
          placeholder='********'
          register={register}
          type={!watch('visible') ? 'password' : 'text'}
          validation={validationRegisterInputs}
          variants={itemVariants}
          callback={value => {
            if ((watch('password') !== value)) {
              return 'Passwords do not match'
            }
          }}
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
        <motion.p variants={itemVariants} className='text-sm text-center text-gray-500 w-[90%] m-auto my-3'>If you register here, you will register as student, if you want to create account as admin, contact us and we are going to give you if you have the features necessary</motion.p>
        <MainButton
          text='Register'
          type='submit'
          variants={itemVariants}
        />
      </motion.div>
    </form>
  )
}
