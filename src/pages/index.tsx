import type { NextPage } from 'next'

import Logo from '@/components/atoms/Logo'
import FullScreenCenter from '@/components/template/FullScreenCenter'
import { useInitalLoading } from '@/hooks/useInitalLoading'

const Home: NextPage = () => {
  const isLoading = useInitalLoading(2000)

  if (isLoading) {
    return (
      <FullScreenCenter>
        <Logo />
      </FullScreenCenter>
    )
  }
  return <p>初回ロゴ表示完了</p>
}

export default Home
