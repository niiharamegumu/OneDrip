import { useAtom } from 'jotai'
import { userAtm } from '@/atoms/auth'
import { UserState } from '@/typs/user'

type Result = {
  currentUser: UserState | null
  isAuth: boolean
}

export const useCurrentUser = (): Result => {
  const [currentUser] = useAtom(userAtm)
  const isAuth = currentUser !== null
  return {
    currentUser,
    isAuth,
  }
}
