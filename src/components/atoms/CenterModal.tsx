import { Flex, Modal, ModalBody, ModalContent, ModalOverlay } from '@chakra-ui/react'
import { FC, memo, ReactNode } from 'react'

type Props = {
  onClose: () => void
  isOpen: boolean
  children: ReactNode
}

// eslint-disable-next-line react/display-name
const CenterModal: FC<Props> = memo((props) => {
  const { onClose, isOpen, children } = props
  return (
    <Modal onClose={onClose} isOpen={isOpen} isCentered>
      <ModalOverlay />
      <ModalContent
        maxW="min(calc( 100% - 60px ), 400px)"
        bg="sTButton"
        color="sTHeading"
        border="1px solid"
        borderColor="white"
      >
        <ModalBody textAlign="center" fontWeight="bold" p="30px">
          <Flex flexDirection="column" gap={6} fontSize="xl">
            {children}
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
})

export default CenterModal
