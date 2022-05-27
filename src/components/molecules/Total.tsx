import { chakra, shouldForwardProp, Text, type TextProps } from '@chakra-ui/react'
import { FC } from 'react'

type Props = {
  array: any[]
  styleProps?: TextProps
}

const ChakraText = chakra(Text, {
  shouldForwardProp: (styleProps) => shouldForwardProp(styleProps),
})

const Total: FC<Props> = (props) => {
  const { array, styleProps } = props
  return (
    <ChakraText color="sTHeading" fontWeight="bold" textAlign="right" {...styleProps}>
      Total : {array.length}
    </ChakraText>
  )
}

export default Total
