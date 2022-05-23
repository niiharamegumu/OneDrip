import 'focus-visible/dist/focus-visible'
import { ChakraProvider, Container } from '@chakra-ui/react'
import type { AppProps } from 'next/app'

import theme from '@/theme/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
