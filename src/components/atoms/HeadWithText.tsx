import { Box, Heading, Text } from '@chakra-ui/react'
import { FC, memo } from 'react'

type Props = {
  title: string
  text: string
}

// eslint-disable-next-line react/display-name
const HeadWithText: FC<Props> = memo((props) => {
  const { title, text } = props
  return (
    <Box textAlign="center">
      <Heading color="sTHeading" fontSize="xl" mb={2}>
        {title}
      </Heading>
      <Text color="sTParagraph" fontSize="sm">
        {text}
      </Text>
    </Box>
  )
})

export default HeadWithText
