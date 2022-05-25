import { Button, Link, useDisclosure } from '@chakra-ui/react'
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
        <Link href="/mypage/" _hover={{ border: 'none' }}>
          マイページ
        </Link>
        <Button onClick={logout}>ログアウト</Button>
      </CenterModal>
    </>
  )
}

export default History
