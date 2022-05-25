import { Center } from '@chakra-ui/react'
import { memo } from 'react'

type Props = {
  children: React.ReactNode
}

// eslint-disable-next-line react/display-name
const FullScreenCenter: React.FC<Props> = memo((props) => {
  const { children } = props

  return (
    <Center h="100vh" w="100%">
      {children}
    </Center>
  )
})

export default FullScreenCenter
