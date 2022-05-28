import { Badge } from '@chakra-ui/react'
import { FC, memo } from 'react'

type Props = {
  status: 'peek' | 'after'
  children: string
}

// eslint-disable-next-line react/display-name
const NoticeBadge: FC<Props> = memo((props) => {
  const { children, status } = props
  const statusList = [
    {
      name: 'peek',
      style: {
        bg: 'sTNotice',
      },
    },
    {
      name: 'after',
      style: {
        bg: 'blackAlpha.600',
      },
    },
  ]
  const thisStatusStyle = statusList.find((index) => index.name === status)!.style

  return (
    <Badge
      color="white"
      position="absolute"
      fontSize={{ base: '2.933vw', sm: 'sm' }}
      top={0}
      left={0}
      py={1}
      px={{ base: 4, sm: 8 }}
      textAlign="center"
      borderTopLeftRadius="10px"
      borderEndEndRadius="10px"
      {...thisStatusStyle}
    >
      {children}
    </Badge>
  )
})

export default NoticeBadge
