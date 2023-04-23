import { useEffect, useState } from 'react'

export default function useEdit (reset, user, infoStudent) {
  const [edit, setEdit] = useState(false)
  useEffect(() => {
    reset({
      ...user,
      ...infoStudent
    })
  }, [edit])
  return { edit, setEdit }
}
