import { Button } from '@chakra-ui/react'
import { FC, memo } from 'react'

type Props = {
  text: string
  clickHandler: () => void
}

// eslint-disable-next-line react/display-name
export const ActionButton: FC<Props> = memo((props) => {
  const { text, clickHandler } = props
  return (
    <Button
      type="button"
      onClick={clickHandler}
      color="sTParagraph"
      border="1px solid"
      bg="sTButton"
      borderColor="sTSecondColor"
      py="20px"
    >
      {text}
    </Button>
  )
})
