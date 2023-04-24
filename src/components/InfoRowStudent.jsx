import { useNavigate } from 'react-router-dom'
import headTables from '../constans/headTables'
import { DangerousIcon } from './Icons'
import SecondaryButton from './SecondaryButton'
import Td from './Td'
import Tr from './Tr'
import { useContext, useState } from 'react'
import RenderConditional from './RenderConditional'
import Modal from './Modal'
import { UserContext } from '../providers/UserProvider'

export default function InfoRowStudent ({ user, setChange }) {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const { deleteRegister } = useContext(UserContext)

  const { student, firstName, firstSurname, email, typeDocument, documentId, id } = user
  const { lastSurname, middleName, phone, registerNumber, saberProScore, saberProScoreLevel, writtenCommunication, writtenCommunicationLevel, quantitativeReasoning, quantitativeReasoningLevel, readingCritical, readingCriticalLevel, citizenshipCompetence, citizenshipCompetenceLeve, english, englishLevel, engineeringProjectFormulation, engineeringProjectFormulationLevel, mathematicsStatistics, mathematicsStatisticsLevel, softwareDesign, softwareDesignLevel, englishPosition, denied, id: studentId } = student

  const registerDelete = async () => {
    setOpen(false)
    await deleteRegister(studentId, id)
    setChange(true)
  }

  return (
    <>
      <Tr denied={denied}>
        <Td className=''>{denied && <DangerousIcon className='h-4 m-0 inline mr-1 fill-red-400' />}{typeDocument}</Td>
        <Td>{documentId}</Td>
        <Td>{firstSurname}</Td>
        <Td>{lastSurname}</Td>
        <Td>{firstName}</Td>
        <Td>{middleName}</Td>
        <Td>{email}</Td>
        <Td>{phone}</Td>
        <Td>{registerNumber}</Td>
        {denied
          ? <Td colSpan={headTables.length} className='bg-red-400 text-left'>Denied</Td>
          : <><Td>{saberProScore}</Td>
            <Td>{saberProScoreLevel}</Td>
            <Td>{writtenCommunication}</Td>
            <Td>{writtenCommunicationLevel}</Td>
            <Td>{quantitativeReasoning}</Td>
            <Td>{quantitativeReasoningLevel}</Td>
            <Td>{readingCritical}</Td>
            <Td>{readingCriticalLevel}</Td>
            <Td>{citizenshipCompetence}</Td>
            <Td>{citizenshipCompetenceLeve}</Td>
            <Td>{english}</Td>
            <Td>{englishLevel}</Td>
            <Td>{engineeringProjectFormulation}</Td>
            <Td>{engineeringProjectFormulationLevel}</Td>
            <Td>{mathematicsStatistics}</Td>
            <Td>{mathematicsStatisticsLevel}</Td>
            <Td>{softwareDesign}</Td>
            <Td>{softwareDesignLevel}</Td>
            <Td>{englishPosition}</Td>
            </>}
        <Td className='flex gap-2 justify-center'>
          <SecondaryButton color='blue' onClick={() => navigate(`../student/${id}`)}>Edit</SecondaryButton>
          <SecondaryButton color='red' onClick={() => setOpen(true)}>Delete</SecondaryButton>
        </Td>
      </Tr>
      <RenderConditional condition={open}>
        <Modal functionExecute={registerDelete} setOpen={setOpen}>
          <p className='text-3xl'>Do you want continue with the action?</p>
          <div className='flex m-auto gap-3'>
            <SecondaryButton color='green' onClick={() => registerDelete()}>Yes</SecondaryButton>
            <SecondaryButton color='red' onClick={() => setOpen(false)}>Cancel</SecondaryButton>
          </div>
        </Modal>
      </RenderConditional>
    </>
  )
}
