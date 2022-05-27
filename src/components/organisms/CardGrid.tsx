import { Grid } from '@chakra-ui/react'
import React, { FC, ReactNode } from 'react'

type Pros = {
  children: ReactNode
}

const CardGrid: FC<Pros> = (props) => {
  const { children } = props
  return (
    <Grid gap={2} templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }}>
      {children}
    </Grid>
  )
}

export default CardGrid
