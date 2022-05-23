import { Button, Container, useColorMode } from '@chakra-ui/react'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Container maxW="container.xl" my={4}>
      <Button
        bg="sTButton"
        border="1px solid"
        borderColor="sTSecondColor"
        color="sTParagraph"
        onClick={toggleColorMode}
      >
        {colorMode}
      </Button>
    </Container>
  )
}

export default Home
