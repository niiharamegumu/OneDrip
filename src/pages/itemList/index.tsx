import { Button, Link, useDisclosure } from '@chakra-ui/react'
import { format } from 'date-fns'
import { NextPage } from 'next'

import CenterModal from '@/components/atoms/CenterModal'
import DotButton from '@/components/atoms/DotButton'
import Header from '@/components/organisms/Header'
import { logout } from '@/libs/firebase/auth'

const ItemList: NextPage = () => {
  const today = format(new Date(), 'yyyy-MM-dd')
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Header title={today}>
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

export default ItemList
