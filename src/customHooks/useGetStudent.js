import { useEffect, useState } from 'react'
import getStudentId from '../services/getStudentId'

export default function useGetStudent (id) {
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState({})

  useEffect(() => {
    getStudentId(id)
      .then(data => {
        setUser(data)
        setLoading(false)
      })
  }, [])

  return { loading, user }
}
