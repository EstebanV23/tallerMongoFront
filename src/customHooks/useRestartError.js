import { useContext, useEffect } from 'react'
import { UserContext } from '../providers/UserProvider'

export default function useRestartError () {
  const { error, setError } = useContext(UserContext)

  useEffect(() => {
    setError(null)
  }, [])

  useEffect(() => {
    let timeOut
    if (error) {
      timeOut = setTimeout(() => {
        setError(null)
      }, 3000)
    }
    return () => {
      clearTimeout(timeOut)
    }
  }, [error])
}
