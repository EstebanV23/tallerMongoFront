import React, { useContext } from 'react'
import { UserContext } from '../providers/UserProvider'
import { motion } from 'framer-motion'
import { itemVariants, variantsForm } from '../constans/variantsForm'
import PersonalInformationForm from '../components/PersonalInformationForm'
import RenderConditional from '../components/RenderConditional'
import ViewResults from '../components/ViewResults'
import BoxInfo from '../components/BoxInfo'

export default function StudentPage () {
  const { user, updateInfoUserStudent } = useContext(UserContext)
  const { firstName, firstSurname, student } = user
  return (
    <div className='w-full m-auto min-h-[calc(100vh-64px)] px-4 py-1 bg-slate-200'>
      <motion.div
        variants={variantsForm}
        initial='initial'
        animate='animate'
        className='w-full max-w-6xl m-auto pt-20 text-slate-700 '
      >
        <motion.h1
          variants={itemVariants}
          className='text-4xl text-slate-700 mb-10'
        >
          Hi <span className='font-semibold'>{firstName} {firstSurname}</span>, it's your results
        </motion.h1>
        <BoxInfo>
          <motion.h2
            variants={itemVariants}
            className='text-2xl font-medium'
          >
            Personal Information:
          </motion.h2>
          <PersonalInformationForm user={user} callback={updateInfoUserStudent} />
        </BoxInfo>
        <BoxInfo className='my-3'>
          <RenderConditional condition={!student}>
            <motion.p variants={itemVariants} className='text-center text-gray-400'>You don't have result information yet, verify your document id, this dcoument should match with the register document in the PruebaSaber. When your results is upload, you could see it the result here, and you will have more information about you, like middle name, last surname and phone</motion.p>
          </RenderConditional>
          <RenderConditional condition={student && student.denied}>
            <motion.p variants={itemVariants} className='text-center w-full p-4 bg-red-300 rounded-md text-red-600'>Your results is denied, please contact with the administrator</motion.p>
          </RenderConditional>
          <RenderConditional condition={student && !student.denied}>
            <motion.h2
              variants={itemVariants}
              className='text-2xl font-medium'
            >
              Results:
            </motion.h2>
            <ViewResults student={student} />
          </RenderConditional>
        </BoxInfo>
      </motion.div>
    </div>
  )
}
