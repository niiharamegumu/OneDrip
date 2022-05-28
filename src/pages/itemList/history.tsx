import { Button, Link, useDisclosure } from '@chakra-ui/react'
import { NextPage } from 'next'

import CenterModal from '@/components/atoms/CenterModal'
import DotButton from '@/components/atoms/button/DotButton'
import Total from '@/components/molecules/Total'
import CardGrid from '@/components/organisms/CardGrid'
import Header from '@/components/organisms/Header'
import ItemCard from '@/components/organisms/ItemCard'
import FullScreenCenter from '@/components/template/FullScreenCenter'
import { useCurrentUser } from '@/hooks/auth/useCurrentUser'
import { useDocument } from '@/hooks/firestore/useDocument'
import app from '@/libs/firebase/app'
import { logout } from '@/libs/firebase/auth'
import { CoffeeItem } from '@/typs/coffeeItem'

const ItemListHistory: NextPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { currentUser } = useCurrentUser()
  const { result, isLoading, error } = useDocument<CoffeeItem>(
    app,
    `users/${currentUser?.uid}/items`,
    [
      {
        fieldPath: 'status',
        opStr: '==',
        value: 'complete',
      },
    ],
  )

  if (isLoading) {
    return (
      <FullScreenCenter>
        <p>Loading...</p>
      </FullScreenCenter>
    )
  }

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

      {error === null ? (
        <>
          <Total array={result} styleProps={{ mb: 4 }} />

          <CardGrid>
            {result!.map((item) => (
              <ItemCard key={item.id} item={item} isElapsed={false} />
            ))}
          </CardGrid>
        </>
      ) : (
        <FullScreenCenter>
          <p>読み込みに失敗しました...!</p>
        </FullScreenCenter>
      )}
    </>
  )
}

export default ItemListHistory
