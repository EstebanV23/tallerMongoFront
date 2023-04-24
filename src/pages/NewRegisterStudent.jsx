import React, { useContext, useEffect, useState } from 'react'
import PersonalInformationForm from '../components/PersonalInformationForm'
import MainButton from '../components/MainButton'
import Modal from '../components/Modal'
import { UserContext } from '../providers/UserProvider'
import useUsersAvailables from '../customHooks/useUsersAvailables'
import RenderConditional from '../components/RenderConditional'
import BoxInfo from '../components/BoxInfo'

const RenderAvailablesUsers = ({ users }) => {
  return users.map((user) => (
    <option key={user.id} value={user.id}>{user.documentId} - {user.firstName} {user.firstSurname}</option>
  ))
}

export default function NewRegisterStudent () {
  const [userSelected, setUserSelecter] = useState('new')
  const [selectTempUser, setSelectTempUser] = useState(null)
  const [openModal, setOpenModal] = useState(true)
  const userAvailables = useUsersAvailables()
  const { loading } = useContext(UserContext)
  const [dispacher, setDispacher] = useState(0)

  useEffect(() => {
    if (!userSelected || userSelected === 'new') return
    const user = userAvailables.find((user) => user.id === userSelected)
    setUserSelecter(user)
  }, [dispacher])

  function selectUser (form) {
    form.preventDefault()
    setUserSelecter(selectTempUser)
    setOpenModal(false)
    setDispacher(dispacher + 1)
  }

  if (loading) return null

  if (openModal || !userSelected) {
    return (
      <Modal setOpen={setOpenModal}>
        <h2 className='text-xl text-slate-600'><span className='font-medium'>Select</span> user or <span className='font-medium'>create</span> a new user</h2>
        <form onSubmit={(form) => selectUser(form)}>
          <select
            className='px-3 py-2 rounded-lg w-full outline-none border-2 transition-all focus:border-slate-800 border-slate-300 mb-5'
            onChange={(e) => setSelectTempUser(e.target.value)}
          >
            <option value='new'>New User</option>
            <RenderAvailablesUsers users={userAvailables} />
          </select>
          <MainButton text='Select' type='submit' />
        </form>
      </Modal>
    )
  }

  return (
    <>
      <BoxInfo>
        <RenderConditional condition={typeof userSelected !== 'string'}>
          <PersonalInformationForm user={userSelected} isEdit={false} />
        </RenderConditional>
        <RenderConditional condition={userSelected === 'new'}>
          <PersonalInformationForm isEdit={false} submitButton={<MainButton text='Create' type='submit' className='mt-10'/>} />
        </RenderConditional>
      </BoxInfo>
    </>
  )
}
