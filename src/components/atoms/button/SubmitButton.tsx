import { Button } from '@chakra-ui/react'
import { FC, memo } from 'react'

type Props = {
  text: string
  isLoading: boolean
}

// eslint-disable-next-line react/display-name
export const SubmitButton: FC<Props> = memo((props) => {
  const { text, isLoading } = props
  return (
    <Button
      type="submit"
      color="sTParagraph"
      border="1px solid"
      bg="sTButton"
      borderColor="sTSecondColor"
      py="20px"
      w="100%"
      isLoading={isLoading}
      display="flex"
    >
      {text}
    </Button>
  )
})
