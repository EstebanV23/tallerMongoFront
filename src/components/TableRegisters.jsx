import { motion } from 'framer-motion'
import headTables from '../constans/headTables'
import InfoRowStudent from './InfoRowStudent'
import Td from './Td'
import { itemVariants, variantsForm } from '../constans/variantsForm'

export default function TableRegisters ({ students, setChange }) {
  if (!students.length) return <motion.h3 variants={itemVariants} className='text-center'>No students</motion.h3>
  return (
    <motion.div variants={itemVariants} className='w-full overflow-x-auto rounded-lg border border-gray-200 shadow-md'>
      <table className='w-full border-collapse bg-white text-center text-sm text-gray-500'>
        <motion.thead variants={itemVariants}>
          <tr className='bg-slate-200 font-medium'>
            {headTables.map(head => (
              <Td key={head}>{head}</Td>
            ))}
          </tr>
        </motion.thead>
        <tbody>
          {students.map((student) =>
            <InfoRowStudent key={student.id} user={student} setChange={setChange} />
          )}
        </tbody>
      </table>
    </motion.div>
  )
}
