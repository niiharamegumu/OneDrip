import { Flex } from '@chakra-ui/react'
import { FC } from 'react'
import { RiHistoryLine, RiGridFill, RiAddFill } from 'react-icons/ri'

import CircleLink from '@/components/atoms/CircleLink'

const CommonNav: FC = () => {
  return (
    <Flex
      as="nav"
      position="fixed"
      bottom={{ base: '20px', sm: '40px' }}
      left={0}
      w="100%"
      justify="center"
      align="center"
      gap={4}
    >
      <CircleLink linkPath="/itemList/">
        <RiGridFill />
      </CircleLink>
      <CircleLink linkPath="/itemList/history/">
        <RiHistoryLine />
      </CircleLink>
      <CircleLink linkPath="/mypage">
        <RiAddFill />
      </CircleLink>
    </Flex>
  )
}

export default CommonNav
