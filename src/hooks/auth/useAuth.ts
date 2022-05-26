import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useAtom } from 'jotai'
import { useEffect, useState } from 'react'

import { userAtm } from '@/atoms/auth'
import app from '@/libs/firebase/app'
import { UserState } from '@/typs/user'

export const useAuth = (): boolean => {
  const [isComplete, setIsComplete] = useState(false)
  const [_, setUser] = useAtom(userAtm)

  useEffect(() => {
    const auth = getAuth(app)
    return onAuthStateChanged(auth, (user: UserState) => {
      setUser(user)
      setIsComplete(true)
    })
  }, [setUser])

  return isComplete
}
