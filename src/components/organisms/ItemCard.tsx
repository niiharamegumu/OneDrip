import { Box, GridItem, Heading, Text } from '@chakra-ui/react'
import { isAfter } from 'date-fns'
import { FC } from 'react'

import HeadWithText from '@/components/molecules/HeadWithText'
import NoticeBadge from '@/components/molecules/NoticeBadge'
import SkeletonImage from '@/components/molecules/SkeletonImage'
import { calcElapsedTime, formatDate, isWithinPeriodOfTime } from '@/libs/functions'
import { CoffeeItem } from '@/typs/coffeeItem'

type Props = {
  item: CoffeeItem
}

const ItemCard: FC<Props> = (props) => {
  const { item } = props

  return (
    <GridItem key={item.id} borderRadius="10px" overflow="hidden" position="relative" bg="sTCard">
      <SkeletonImage url={item.img_url} altText={item.name} />
      {isWithinPeriodOfTime(new Date(), item.peek.start, item.peek.end) ? (
        <NoticeBadge status="peek">Peek</NoticeBadge>
      ) : null}
      {isAfter(new Date(), item.peek.end) ? (
        <NoticeBadge status="after">Peek After</NoticeBadge>
      ) : null}
      <Box px={4} py={4}>
        <Box mb={4}>
          <HeadWithText
            title={calcElapsedTime(new Date(), item.standardDate)}
            text="経過"
            titleSize="16px"
            textSize="11px"
          />
        </Box>
        <Heading
          as="h2"
          lineHeight={1}
          fontSize={{ base: '3.733vw', sm: '16px' }}
          mb={2}
          textAlign="left"
        >
          {item.name}
        </Heading>
        <Box fontSize={{ base: '2.933vw', sm: '13px' }} textAlign="left">
          <Text>焙煎日：{formatDate(item.standardDate)}</Text>
          <Text>ピーク開始：{formatDate(item.peek.start)}</Text>
          <Text>ピーク終了：{formatDate(item.peek.end)}</Text>
        </Box>
      </Box>
    </GridItem>
  )
}

export default ItemCard
