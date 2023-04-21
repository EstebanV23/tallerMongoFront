import MainPage from './pages/MainPage'
import UserProvider from './providers/UserProvider'
import './assets/scroll.css'

function App () {
  return (
    <>
      <UserProvider>
        <MainPage />
      </UserProvider>
    </>
  )
}

export default App
