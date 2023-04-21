import { useContext, useEffect } from 'react'
import { UserContext } from '../providers/UserProvider'

export default function useRestartAlert () {
  const { alertActive, resetAlert } = useContext(UserContext)

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
}
