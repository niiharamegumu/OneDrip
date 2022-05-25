import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useAuth } from '@/hooks/useAuth'
import { useCurrentUser } from '@/hooks/useCurrentUser'

export const useRequireLogin = (): boolean => {
  const isComplete = useAuth()
  const { isAuth: isAuthChecking } = useCurrentUser()
  const router = useRouter()

  useEffect(() => {
    if (router.pathname === '/') return
    if (!isAuthChecking && isComplete) router.push('/')
  }, [isAuthChecking, router, isComplete])

  return isAuthChecking
}
