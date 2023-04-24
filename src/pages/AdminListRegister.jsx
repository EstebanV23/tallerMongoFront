import React from 'react'
import BoxInfo from '../components/BoxInfo'
import useFetchStudents from '../customHooks/useFetchStudents'
import RenderConditional from '../components/RenderConditional'
import { LoadingComponent } from '../components/Loadings'
import TableRegisters from '../components/TableRegisters'
import { AnimatePresence, motion } from 'framer-motion'
import { variantsForm } from '../constans/variantsForm'

export default function AdminListRegister () {
  const { loading, students, setChange } = useFetchStudents()
  return (
    <BoxInfo>
      <AnimatePresence>
        <motion.div variants={variantsForm} initial='initial' animate='animate'>
          <h2 className='text-2xl mb-3'>List of registers</h2>
          <RenderConditional condition={loading}>
            <motion.div
              variants={variantsForm}
              initial='initial'
              animate='animate'
              exit='initial'
              className='p-2 bg-slate-400 bg-opacity-50 rounded-lg flex justify-center'
            >
              <LoadingComponent className='w-10' />
            </motion.div>
          </RenderConditional>
          <RenderConditional condition={!loading}>
            <TableRegisters students={students} setChange={setChange} />
          </RenderConditional>
        </motion.div>
      </AnimatePresence>
    </BoxInfo>
  )
}
