import { Center } from '@chakra-ui/react'

type Props = {
  children: React.ReactNode
}

const FullScreenCenter: React.FC<Props> = (props) => {
  const { children } = props

  return (
    <Center h="100vh" w="100%">
      {children}
    </Center>
  )
}

export default FullScreenCenter
