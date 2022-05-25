import { Flex } from '@chakra-ui/react'
import { FC } from 'react'
import { RiHistoryLine, RiLayoutGridLine, RiAddFill } from 'react-icons/ri'

import CircleLink from '@/components/atoms/CircleLink'

const CommonNav: FC = () => {
  return (
    <Flex
      as="nav"
      position="fixed"
      bottom={{ base: '30px', sm: '60px' }}
      left={0}
      w="100%"
      justify="center"
      align="center"
      gap={4}
    >
      <CircleLink linkPath="/mypage">
        <RiLayoutGridLine />
      </CircleLink>
      <CircleLink linkPath="/mypage">
        <RiHistoryLine />
      </CircleLink>
      <CircleLink linkPath="/mypage">
        <RiAddFill />
      </CircleLink>
    </Flex>
  )
}

export default CommonNav
