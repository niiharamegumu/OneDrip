import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

const fonts = { mono: `'Menlo', monospace` }

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: true,
}

const styles = {
  global: {
    body: {
      bg: 'sTMainColor',
    },
  },
}

const theme = extendTheme({
  semanticTokens: {
    colors: {
      sTMainColor: {
        _light: '#F9F4EF',
        _dark: '#020826',
      },
      sTSecondColor: {
        _light: '#8C7851',
        _dark: '#F9F4EF',
      },
      sTHeading: {
        _light: '#020826',
        _dark: '#F9F4EF',
      },
      sTParagraph: {
        _light: '#716040',
        _dark: '#F9F4EF',
      },
      sTButton: {
        _light: '#FFFFFE',
        _dark: '#020826',
      },
      sTNotice: '#EB5757',
    },
  },
  styles,
  fonts,
  config,
})

export default theme
