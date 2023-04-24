import headTables from '../constans/headTables'
import InfoRowStudent from './InfoRowStudent'
import Td from './Td'

export default function TableRegisters ({ students, setChange }) {
  if (!students.length) return <h3 className='text-center'>No students</h3>
  return (
    <div className='w-full overflow-x-auto rounded-lg border border-gray-200 shadow-md'>
      <table className='w-full border-collapse bg-white text-center text-sm text-gray-500'>
        <thead>
          <tr className='bg-slate-200 font-medium'>
            {headTables.map(head => (
              <Td key={head}>{head}</Td>
            ))}
          </tr>
        </thead>
        <tbody>
          {students.map((student) =>
            <InfoRowStudent key={student.id} user={student} setChange={setChange} />
          )}
        </tbody>
      </table>
    </div>
  )
}
