import React, { useContext, useEffect, useState } from 'react'
import PersonalInformationForm from '../components/PersonalInformationForm'
import MainButton from '../components/MainButton'
import Modal from '../components/Modal'
import { UserContext } from '../providers/UserProvider'
import useUsersAvailables from '../customHooks/useUsersAvailables'
import RenderConditional from '../components/RenderConditional'
import BoxInfo from '../components/BoxInfo'
import SecondaryButton from '../components/SecondaryButton'
import FormRegister from '../components/FormRegister'
import { useNavigate } from 'react-router-dom'

const RenderAvailablesUsers = ({ users }) => {
  return users.map((user) => (
    <option key={user.id} value={user.id}>{user.documentId} - {user.firstName} {user.firstSurname}</option>
  ))
}

export default function NewRegisterStudent () {
  const [userSelected, setUserSelecter] = useState('new')
  const [selectTempUser, setSelectTempUser] = useState('new')
  const [openModal, setOpenModal] = useState(true)
  const userAvailables = useUsersAvailables()
  const { loading, newUser, newStudent } = useContext(UserContext)
  const [dispacher, setDispacher] = useState(0)
  const navigate = useNavigate()

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

  async function createStudentUser (data) {
    const response = await newStudent(data, userSelected.id, `${userSelected.firstName} ${userSelected.firstSurname}`)
    if (!response.error) {
      navigate('/admin/list-registers')
    }
  }

  async function acceptInfo (data) {
    const userUpdate = await newUser(data.userInfo)
    if (!userUpdate.error) setUserSelecter(userUpdate)
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
          <div className='mt-5'>
            <FormRegister student={userSelected.student} text='Create' callbackOnSubmit={createStudentUser} />
          </div>
        </RenderConditional>
        <RenderConditional condition={userSelected === 'new'}>
          <PersonalInformationForm isEdit={false} submitButton={<MainButton text='Create' type='submit' className='mt-10' />} callback={acceptInfo} />
        </RenderConditional>
        <SecondaryButton
          color='blue' className='mt-6' onClick={() => {
            setOpenModal(true)
            setUserSelecter('new')
            setSelectTempUser('new')
          }}
        >Select other user
        </SecondaryButton>
      </BoxInfo>
    </>
  )
}
