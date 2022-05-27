import { Switch, useColorMode } from '@chakra-ui/react'
import { FC } from 'react'

const ToggleDarkMode: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === 'dark'

  return <Switch onChange={toggleColorMode} size="lg" isChecked={isDark} />
}

export default ToggleDarkMode
