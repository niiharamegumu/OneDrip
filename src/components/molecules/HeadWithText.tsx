import { Box, Heading, Text } from '@chakra-ui/react'
import { FC, memo } from 'react'

type Props = {
  title: string
  text: string
  titleSize?: string
  textSize?: string
}

// eslint-disable-next-line react/display-name
const HeadWithText: FC<Props> = memo((props) => {
  const { title, text, titleSize = 'xl', textSize = 'sm' } = props
  return (
    <Box textAlign="center">
      <Heading color="sTHeading" fontSize={titleSize} mb="4px">
        {title}
      </Heading>
      <Text color="sTParagraph" fontSize={textSize}>
        {text}
      </Text>
    </Box>
  )
})

export default HeadWithText
