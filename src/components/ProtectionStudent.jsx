import { useContext } from 'react'
import { UserContext } from '../providers/UserProvider'
import { Navigate } from 'react-router-dom'

export default function ProtectionStudent ({ children }) {
  const { user } = useContext(UserContext)
  if (user?.role?.nameId !== '1') return <Navigate to='/' />
  return children
}
