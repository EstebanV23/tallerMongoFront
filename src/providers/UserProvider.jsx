import { createContext, useState } from 'react'
import Loadings from '../components/Loadings'
import loginService from '../services/loginService'
import { useNavigate } from 'react-router-dom'
import { ADMIN, STUDENT } from '../constans/magicsStrings'
import getRole from '../services/getRole'
import registerService from '../services/registerService'

export const UserContext = createContext()

const initialAlert = {
  message: '',
  type: ''
}

export default function UserProvider ({ children }) {
  const [user, setUser] = useState(() => (localStorage.getItem('user') && JSON.parse(localStorage.getItem('user'))))
  const [loading, setLoading] = useState(false)
  const [alertActive, setAlertActive] = useState(initialAlert)
  const [error, setError] = useState(null)

  const navigate = useNavigate()

  const logIn = async ({ email, password }) => {
    setLoading(true)
    setError(null)
    const dataLogin = await loginService({ email, password })
    setLoading(false)
    if (dataLogin.error) {
      setError(dataLogin.error)
      return
    }
    const newUser = { ...dataLogin, password: null }
    localStorage.setItem('user', JSON.stringify(newUser))
    setUser(newUser)
    setAlertActive({ message: `Welcome ${dataLogin.firstName}`, type: 'success' })
    dataLogin.role.nameId === ADMIN ? navigate('/admin') : navigate('/student')
  }

  const newUser = async ({ firstName, firstSurname, typeDocument, documentId, email, password }) => {
    setLoading(true)
    const roles = await getRole(STUDENT)
    const role = roles.find(role => role.nameId === STUDENT)?.id
    const sendData = { firstName, firstSurname, typeDocument, documentId, email, password, role: { id: role } }
    const dataResponse = await registerService(sendData)
    setLoading(false)
    if (dataResponse.error) {
      setError(dataResponse.error)
      return
    }
    setAlertActive({ message: 'User created successfully', type: 'success' })
    navigate('/')
  }

  const logOut = () => {
    localStorage.removeItem('user')
    setUser(null)
    navigate('/')
  }

  const resetAlert = () => {
    setAlertActive(initialAlert)
  }

  const values = {
    user,
    setUser,
    logIn,
    logOut,
    newUser,
    error,
    setError,
    alertActive,
    setAlertActive,
    resetAlert
  }

  return (
    <UserContext.Provider value={values}>
      {loading && <Loadings />}
      {children}
    </UserContext.Provider>
  )
}
