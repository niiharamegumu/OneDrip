import { Button, Flex } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import Logo from '@/components/atoms/Logo'
import FullScreenCenter from '@/components/template/FullScreenCenter'
import { useAuth } from '@/hooks/useAuth'
import { useCurrentUser } from '@/hooks/useCurrentUser'
import { useInitalLoading } from '@/hooks/useInitalLoading'
import { login } from '@/libs/firebase/auth'

const Home: NextPage = () => {
  const isLoading = useInitalLoading(1500)
  const isComplete = useAuth()
  const { isAuth } = useCurrentUser()
  const router = useRouter()

  useEffect(() => {
    if (isAuth) router.push('/mypage')
  }, [router, isAuth])

  if (isLoading) {
    return (
      <FullScreenCenter>
        <Logo />
      </FullScreenCenter>
    )
  }

  if (!isComplete) {
    return (
      <FullScreenCenter>
        <p>認証中...</p>
      </FullScreenCenter>
    )
  }

  return (
    <>
      {!isAuth ? (
        <FullScreenCenter>
          <Flex flexDirection="column" gap={6}>
            <Logo />
            <Button type="button" onClick={login} bg="white">
              ログインする
            </Button>
          </Flex>
        </FullScreenCenter>
      ) : null}
    </>
  )
}

export default Home
