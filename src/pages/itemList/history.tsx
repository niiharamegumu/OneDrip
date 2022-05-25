import { Button, Flex, Link, useDisclosure } from '@chakra-ui/react'
import { NextPage } from 'next'

import CenterModal from '@/components/atoms/CenterModal'
import DotButton from '@/components/atoms/DotButton'
import Header from '@/components/organisms/Header'
import { logout } from '@/libs/firebase/auth'

const History: NextPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Header title="履歴">
        <DotButton onClickHnadler={onOpen} />
      </Header>
      <CenterModal onClose={onClose} isOpen={isOpen}>
        <Flex flexDirection="column" gap={4}>
          <Link href="/mypage/" _hover={{ border: 'none' }}>
            マイページ
          </Link>
          <Button
            bg="transparent"
            _hover={{ bg: 'transparent' }}
            _active={{ bg: 'transparent' }}
            onClick={logout}
          >
            ログアウト
          </Button>
        </Flex>
      </CenterModal>
    </>
  )
}

export default History
