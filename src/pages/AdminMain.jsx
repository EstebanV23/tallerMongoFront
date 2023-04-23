import { useContext } from 'react'
import { UserContext } from '../providers/UserProvider'
import PersonalInformationForm from '../components/PersonalInformationForm'
import BoxInfo from '../components/BoxInfo'
import Links from '../components/Links'

export default function AdminMain () {
  const { user, updateInfoUserStudent } = useContext(UserContext)
  const { firstName, firstSurname } = user
  return (
    <div>
      <h1 className='text-left text-4xl mb-5'>Admin <span className='font-semibold text-sky-800'>{firstName} {firstSurname}</span>, Welcome</h1>
      <BoxInfo className='mb-3'>
        <h2 className='text-2xl font-medium mb-3'>Your Information</h2>
        <PersonalInformationForm user={user} callback={updateInfoUserStudent} />
        <div className='flex items-center'>
          <h2 className='text-2xl font-medium'>Actions:</h2>
          <Links />
        </div>
      </BoxInfo>
    </div>
  )
}
