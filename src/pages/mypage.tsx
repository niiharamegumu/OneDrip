import { Avatar, Button } from '@chakra-ui/react'
import { NextPage } from 'next'

import { useAuth } from '@/hooks/useAuth'
import { useCurrentUser } from '@/hooks/useCurrentUser'
import { logout } from '@/libs/firebase/auth'

const Sample: NextPage = () => {
  const { currentUser } = useCurrentUser()

  return (
    <>
      <p>{currentUser!.displayName}</p>
      <p>{currentUser!.email}</p>
      <p>{currentUser!.emailVerified ? 'メール認証済み' : 'メール未認証'}</p>
      <p>{currentUser!.displayName}</p>
      <Avatar name={`${currentUser!.displayName}`} src={`${currentUser?.photoURL}`} />
      <Button type="button" onClick={logout}>
        ログアウトする
      </Button>
    </>
  )
}

export default Sample
