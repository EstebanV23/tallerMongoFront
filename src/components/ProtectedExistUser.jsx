import { useContext } from 'react'
import { UserContext } from '../providers/UserProvider'
import { Navigate } from 'react-router-dom'

export default function ProtectedExistUser ({ children }) {
  const { user } = useContext(UserContext)
  if (user?.role?.nameId === '1') return <Navigate to='/student' />
  if (user?.role?.nameId === '2') return <Navigate to='/admin' />
  return children
}
