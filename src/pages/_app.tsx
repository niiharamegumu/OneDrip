import 'focus-visible/dist/focus-visible'
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'

import { useRouter } from 'next/router'
import CommonNav from '@/components/organisms/CommonNav'
import UserScreen from '@/components/template/UserScreen'
import { useRequireLogin } from '@/hooks/auth/useRequireLogin'
import theme from '@/theme/theme'

const MyApp = ({ Component, pageProps }: AppProps) => {
  const isAuthChecking = useRequireLogin()
  const router = useRouter()
  const isTopPage = router.pathname === '/'

  return (
    <ChakraProvider resetCSS theme={theme}>
      {!isTopPage && isAuthChecking ? (
        <UserScreen>
          <Component {...pageProps} />
          <CommonNav />
        </UserScreen>
      ) : null}
      {isTopPage && <Component {...pageProps} />}
    </ChakraProvider>
  )
}

export default MyApp
