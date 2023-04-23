import { createContext, useEffect, useState } from 'react'
import Loadings from '../components/Loadings'
import loginService from '../services/loginService'
import { useNavigate } from 'react-router-dom'
import { ADMIN, STUDENT } from '../constans/magicsStrings'
import getRole from '../services/getRole'
import registerService from '../services/registerService'
import updateUser from '../services/updateUser'
import updateStudentInfo from '../services/updateStudentInfo'

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

  useEffect(() => {
    let timeOut
    if (alertActive.message) {
      timeOut = setTimeout(() => {
        resetAlert()
      }, 4000)
    }
    return () => {
      clearTimeout(timeOut)
    }
  }, [alertActive])

  const logIn = async ({ email, password }) => {
    setLoading(true)
    setError(null)
    const dataLogin = await loginService({ email, password })
    setLoading(false)
    if (dataLogin.error) {
      setError(dataLogin.error)
      return
    }
    const newUser = { ...dataLogin }
    localStorage.setItem('user', JSON.stringify(newUser))
    setUser(newUser)
    setAlertActive({ message: `Welcome ${dataLogin.firstName}`, type: 'default' })
    dataLogin.role.nameId === ADMIN ? navigate('/admin') : navigate('/student')
  }

  const updateInfoUserStudent = async (values, user) => {
    let userReturn = user
    try {
      setLoading(true)
      const { userInfo, studentInfo } = values
      const responseUser = await updateUser(user.id, userInfo)
      if (responseUser.error) throw new Error(responseUser.error)
      const newUser = { ...responseUser }
      localStorage.setItem('user', JSON.stringify(newUser))
      setUser(newUser)
      userReturn = newUser
      if (!user.student) {
        setAlertActive({ message: 'User update successfully', type: 'success' })
        return userReturn
      }
      const responseStudent = await updateStudentInfo(user.student.id, studentInfo)
      if (responseStudent.error) throw new Error(responseStudent.error)
      const newStudent = { ...responseStudent }
      const userFinally = { ...newUser, student: newStudent }
      userReturn = userFinally
      localStorage.setItem('user', JSON.stringify(userFinally))
      setUser(userFinally)
      setAlertActive({ message: 'User update successfully', type: 'success' })
    } catch (error) {
      setAlertActive({ message: error.message, type: 'error' })
    } finally {
      setLoading(false)
    }
    return userReturn
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
      return dataResponse
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
    resetAlert,
    updateInfoUserStudent
  }

  return (
    <UserContext.Provider value={values}>
      {loading && <Loadings />}
      {children}
    </UserContext.Provider>
  )
}
