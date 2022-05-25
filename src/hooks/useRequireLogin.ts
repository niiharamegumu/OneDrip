import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useCurrentUser } from '@/hooks/useCurrentUser'

export const useRequireLogin = (): boolean => {
  const { isAuth: isAuthChecking } = useCurrentUser()
  const router = useRouter()

  useEffect(() => {
    if (router.pathname === '/') return
    if (!isAuthChecking) router.push('/')
  }, [isAuthChecking, router])

  return isAuthChecking
}
