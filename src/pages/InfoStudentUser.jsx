import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import useGetStudent from '../customHooks/useGetStudent'
import Loadings from '../components/Loadings'
import PersonalInformationForm from '../components/PersonalInformationForm'
import BoxInfo from '../components/BoxInfo'
import FormRegister from '../components/FormRegister'
import { UserContext } from '../providers/UserProvider'
import { motion } from 'framer-motion'
import { itemVariants, variantsForm } from '../constans/variantsForm'

export default function InfoStudentUser () {
  const { id } = useParams()
  const { loading, user } = useGetStudent(id)
  const { student } = user
  const { updateScore } = useContext(UserContext)

  if (loading) return <Loadings />

  return (
    <motion.div variants={variantsForm} animate='animate'>
      <motion.h2
        variants={itemVariants}
        className='text-4xl text-slate-500 mb-10'
      >
        Editing <span className='font-semibold text-slate-700'>{user.firstName} {user.firstSurname}</span>
      </motion.h2>
      <BoxInfo>
        <motion.h2
          variants={itemVariants}
          className='text-2xl font-medium'
        >
          Personal Information:
        </motion.h2>
        <PersonalInformationForm user={user} isEdit={false} />
      </BoxInfo>
      <BoxInfo className='mt-4'>
        <motion.h2
          variants={itemVariants}
          className='text-2xl font-medium'
        >
          Scores:
        </motion.h2>
        <FormRegister student={student} callbackOnSubmit={updateScore} />
      </BoxInfo>
    </motion.div>
  )
}
