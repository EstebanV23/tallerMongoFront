import { Route, Routes } from 'react-router-dom'
import LoginPage from './LoginPage'
import StudentPage from './StudentPage'
import Navbar from '../components/Navbar'
import AdminPage from './AdminPage'
import { UserContext } from '../providers/UserProvider'
import { useContext } from 'react'
import Alert from '../components/Alert'
import { AnimatePresence } from 'framer-motion'
import useRestartAlert from '../customHooks/useRestartAlert'

export default function MainPage () {
  const { alertActive } = useContext(UserContext)
  useRestartAlert()
  return (
    <>
      <Routes>
        <Route index element={<LoginPage />} />
        <Route path='/' element={<Navbar />}>
          <Route path='/student' element={<StudentPage />} />
          <Route path='/admin' element={<AdminPage />} />
        </Route>
      </Routes>
      <AnimatePresence>
        {alertActive.message && <Alert message={alertActive.message} type={alertActive.type} />}
      </AnimatePresence>
    </>
  )
}
