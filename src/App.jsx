import MainPage from './pages/MainPage'
import UserProvider from './providers/UserProvider'
import './assets/scroll.css'
import NavbarProvider from './providers/NavbarProvider'

function App () {
  return (
    <>
      <UserProvider>
        <NavbarProvider>
          <MainPage />
        </NavbarProvider>
      </UserProvider>
    </>
  )
}

export default App
