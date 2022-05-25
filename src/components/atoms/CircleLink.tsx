import { Link } from '@chakra-ui/react'
import { FC, memo, ReactNode } from 'react'

type Props = {
  linkPath: string
  children: ReactNode
}

// eslint-disable-next-line react/display-name
const CircleLink: FC<Props> = memo((props) => {
  const { linkPath, children } = props

  return (
    <Link
      href={linkPath}
      display="flex"
      w="80px"
      h="80px"
      justifyContent="center"
      alignItems="center"
      color="sTButton"
      bg="sTSecondColor"
      borderRadius="50%"
      fontSize="36px"
    >
      {children}
    </Link>
  )
})

export default CircleLink
