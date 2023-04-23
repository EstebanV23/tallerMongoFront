import { useContext } from 'react'
import { UserContext } from '../providers/UserProvider'
import { Navigate } from 'react-router-dom'

export default function ProtectionAdmin ({ children }) {
  const { user } = useContext(UserContext)
  if (user?.role?.nameId !== '2') return <Navigate to='/' />
  return children
}
