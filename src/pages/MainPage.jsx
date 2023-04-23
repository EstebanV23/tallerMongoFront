import { Route, Routes } from 'react-router-dom'
import LoginPage from './LoginPage'
import StudentPage from './StudentPage'
import Navbar from '../components/Navbar'
import AdminPage from './AdminPage'
import { UserContext } from '../providers/UserProvider'
import { useContext } from 'react'
import Alert from '../components/Alert'
import { AnimatePresence } from 'framer-motion'
import ProtectionAdmin from '../components/ProtectionAdmin'
import ProtectionStudent from '../components/ProtectionStudent'
import ProtectedExistUser from '../components/ProtectedExistUser'
import AdminMain from './AdminMain'
import AdminListRegister from './AdminListRegister'

export default function MainPage () {
  const { alertActive } = useContext(UserContext)
  return (
    <>
      <Routes>
        <Route index element={<ProtectedExistUser><LoginPage /></ProtectedExistUser>} />
        <Route path='/' element={<Navbar />}>
          <Route path='/student' element={<ProtectionStudent><StudentPage /></ProtectionStudent>} />
          <Route path='/admin' element={<ProtectionAdmin><AdminPage /></ProtectionAdmin>}>
            <Route index element={<AdminMain />} />
            <Route path='list-registers' element={<AdminListRegister />} />
            <Route path='new-register' element={<h1>New Register</h1>} />
          </Route>
        </Route>
      </Routes>
      <AnimatePresence key={31313}>
        {alertActive.message && <Alert message={alertActive.message} type={alertActive.type} />}
      </AnimatePresence>
    </>
  )
}
