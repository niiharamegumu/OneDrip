import 'focus-visible/dist/focus-visible'
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'

import { useRouter } from 'next/router'
import { useRequireLogin } from '@/hooks/useRequireLogin'
import theme from '@/theme/theme'

const MyApp = ({ Component, pageProps }: AppProps) => {
  const isAuthChecking = useRequireLogin()
  const router = useRouter()
  const isTopPage = router.pathname === '/'

  return (
    <ChakraProvider resetCSS theme={theme}>
      {!isTopPage && isAuthChecking ? <Component {...pageProps} /> : null}
      {isTopPage && <Component {...pageProps} />}
    </ChakraProvider>
  )
}

export default MyApp
