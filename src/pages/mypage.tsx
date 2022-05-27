import { Avatar, Flex, Stack, Text } from '@chakra-ui/react'
import { NextPage } from 'next'
import { useCallback } from 'react'

import ToggleDarkMode from '@/components/atoms/ToggleDarkMode'
import { ActionButton } from '@/components/atoms/button/ActionButton'
import HeadWithText from '@/components/molecules/HeadWithText'
import Header from '@/components/organisms/Header'
import { useCurrentUser } from '@/hooks/auth/useCurrentUser'
import { logout } from '@/libs/firebase/auth'

const Sample: NextPage = () => {
  const { currentUser } = useCurrentUser()
  const callBackLogout = useCallback(() => logout(), [])

  return (
    <>
      <Header title="マイページ">
        <Avatar name={`${currentUser!.displayName}`} src={`${currentUser?.photoURL}`} />
      </Header>

      <Stack spacing={8} position="absolute" top="45%" left="50%" transform="translate(-50%,-45%)">
        <HeadWithText title={`${currentUser?.displayName}`} text="名前"></HeadWithText>
        <HeadWithText title={`${currentUser?.email}`} text="メールアドレス"></HeadWithText>
        <HeadWithText
          title={`${currentUser?.emailVerified ? '認証済み' : '未認証'}`}
          text="メールの認証"
        ></HeadWithText>
        <Flex justify="center" gap={4} align="center">
          <Text>ダークモード</Text>
          <ToggleDarkMode />
        </Flex>
        <ActionButton text="ログアウトする" clickHandler={callBackLogout} />
      </Stack>
    </>
  )
}

export default Sample
