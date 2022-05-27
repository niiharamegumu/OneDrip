import { Container } from '@chakra-ui/react'
import { FC, ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const UserScreen: FC<Props> = (props) => {
  const { children } = props
  return (
    <Container
      maxW={{ base: '100%', sm: 'container.md' }}
      pt="30px"
      px="15px"
      pb={{ base: '120px', sm: '160px' }}
      minH="100vh"
      position="relative"
    >
      {children}
    </Container>
  )
}

export default UserScreen
