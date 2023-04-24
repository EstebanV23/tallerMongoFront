import { useContext, useEffect, useState } from 'react'
import getAllStudents from '../services/getAllStudents'
import { UserContext } from '../providers/UserProvider'

export default function useFetchStudents () {
  const [loading, setLoading] = useState(true)
  const [change, setChange] = useState(true)
  const [students, setStudents] = useState([])
  const { user } = useContext(UserContext)

  useEffect(() => {
    if (change) {
      setLoading(true)
      getAllStudents(user.id)
        .then(data => {
          setStudents(data)
          setLoading(false)
          setChange(false)
        })
    }
  }, [change])

  return { loading, students, change, setChange }
}
