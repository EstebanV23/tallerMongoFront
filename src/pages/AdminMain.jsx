import { useContext } from 'react'
import { UserContext } from '../providers/UserProvider'
import PersonalInformationForm from '../components/PersonalInformationForm'
import BoxInfo from '../components/BoxInfo'
import Links from '../components/Links'
import { motion } from 'framer-motion'
import { itemVariants, variantsForm } from '../constans/variantsForm'

export default function AdminMain () {
  const { user, updateInfoUserStudent } = useContext(UserContext)
  const { firstName, firstSurname } = user
  return (
    <motion.div variants={variantsForm} initial='initial' animate='animate'>
      <motion.h1 variants={itemVariants} className='text-left text-4xl mb-5'>Admin <span className='font-semibold text-sky-800'>{firstName} {firstSurname}</span>, Welcome</motion.h1>
      <BoxInfo className='mb-3'>
        <motion.h2 variants={itemVariants} className='text-2xl font-medium mb-3'>Your Information</motion.h2>
        <PersonalInformationForm user={user} callback={updateInfoUserStudent} />
        <motion.div variants={itemVariants} className='flex items-center'>
          <h2 className='text-2xl font-medium'>Actions:</h2>
          <Links />
        </motion.div>
      </BoxInfo>
    </motion.div>
  )
}
