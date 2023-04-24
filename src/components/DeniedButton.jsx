import React, { useContext, useState } from 'react'
import SecondaryButton from './SecondaryButton'
import Modal from './Modal'
import RenderConditional from './RenderConditional'
import AgreeContent from './AgreeContent'
import { UserContext } from '../providers/UserProvider'

export default function DeniedButton ({ studentId, denied, setDispacher, callback, initialStateModal = false, title = 'Do you want to deny this register?' }) {
  const [openModal, setOpenModal] = useState(initialStateModal)
  const [titleValue, setTitleValue] = useState(title)
  const [deniedValue, setDeniedValue] = useState(denied)
  const { denyStudent } = useContext(UserContext)

  async function studentDeny () {
    setOpenModal(false)
    await denyStudent(deniedValue, studentId)
    setDispacher && setDispacher(prev => !prev)
    if (deniedValue) {
      setOpenModal(true)
      setDeniedValue(denied)
      setTitleValue(title)
    }
  }

  function handleClick () {
    setOpenModal(true)
    setDeniedValue(true)
    setTitleValue('Do you want to deny this register?')
  }

  function isDontAgree (open) {
    setOpenModal(open)
    if (!deniedValue && callback) {
      callback()
      return
    }
    setDeniedValue(denied)
    setTitleValue(title)
  }

  return (
    <>
      <SecondaryButton
        color='red'
        onClick={() => handleClick()}
        className='ml-auto block rounded-lg mt-4'
      >
        Denied
      </SecondaryButton>
      <RenderConditional condition={openModal}>
        <Modal setOpen={isDontAgree}>
          <AgreeContent setOpen={isDontAgree} title={titleValue} functionExe={studentDeny} message='Rebember that if you deny this user, his scores will be delete' />
        </Modal>
      </RenderConditional>
    </>
  )
}
