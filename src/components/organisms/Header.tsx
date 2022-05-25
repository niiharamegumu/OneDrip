import { Flex, Heading } from '@chakra-ui/react'
import { FC, memo, ReactNode } from 'react'

type Props = {
  title: string
  children: ReactNode
}

// eslint-disable-next-line react/display-name
const Header: FC<Props> = memo((props) => {
  const { title, children } = props

  return (
    <Flex as="header" justify="space-between" align="center" mb="20px">
      <Heading fontSize="xl">{title}</Heading>
      {children}
    </Flex>
  )
})

export default Header
