import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../providers/UserProvider'

export default function useUsersAvailables () {
  const [userAvailables, setUserAvailables] = useState([])
  const { availablesUser } = useContext(UserContext)

  useEffect(() => {
    availablesUser()
      .then((data) => {
        setUserAvailables(data)
      })
  }, [])

  return userAvailables
}
