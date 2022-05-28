import { Image, Skeleton } from '@chakra-ui/react'
import { FC, memo, useState } from 'react'

type Props = {
  url: string
  altText: string
}

// eslint-disable-next-line react/display-name
const SkeletonImage: FC<Props> = memo((props) => {
  const { url, altText } = props
  const [imgLoaded, setImgLoaded] = useState(false)

  return (
    <Skeleton isLoaded={imgLoaded} speed={0.6}>
      <Image
        src={url}
        alt={altText}
        h={{ base: '220px', sm: '300px' }}
        w="100%"
        objectFit="cover"
        onLoad={() => setImgLoaded(true)}
      />
    </Skeleton>
  )
})

export default SkeletonImage
