import {
  useDisclosure,
  Link,
  Button,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Stack,
  Image,
} from '@chakra-ui/react'
import { getDownloadURL, getStorage, ref, uploadBytes, type UploadResult } from 'firebase/storage'
import { FC, useState } from 'react'
import { useForm } from 'react-hook-form'

import CenterModal from '@/components/atoms/CenterModal'
import DotButton from '@/components/atoms/button/DotButton'
import { SubmitButton } from '@/components/atoms/button/SubmitButton'
import Header from '@/components/organisms/Header'
import { useCurrentUser } from '@/hooks/auth/useCurrentUser'
import { useFile } from '@/hooks/useFile'
import { logout } from '@/libs/firebase/auth'
import { genStoragePath } from '@/libs/firebase/storage'

const AddItem: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { currentUser } = useCurrentUser()
  const { file, changeFile } = useFile()
  const [imgUrl, setImaurl] = useState<string | null>(null)
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm()

  const onSubmit = async () => {
    if (file) {
      try {
        const uploadResult = await uploadStorage(file)
        const downloadResult = await downloadStorage(uploadResult)
        setImaurl(downloadResult)
      } catch (e) {
        console.log(e)
      }
    }
  }

  const uploadStorage = async (file: File) => {
    try {
      const storage = getStorage()
      const storageRef = ref(storage, genStoragePath(file, currentUser))
      const result = await uploadBytes(storageRef, file)
      console.log(result)
      return result
    } catch (e) {
      throw new Error('Don`t upload file')
    }
  }
  const downloadStorage = async (result: UploadResult) => {
    try {
      const storage = getStorage()
      const storageRef = ref(storage, result.metadata.fullPath)
      return await getDownloadURL(storageRef)
    } catch (e) {
      throw new Error('Don`t download file')
    }
  }

  return (
    <>
      <Header title="コーヒーの追加">
        <DotButton onClickHnadler={onOpen} />
      </Header>
      <CenterModal onClose={onClose} isOpen={isOpen}>
        <Link href="/mypage/" _hover={{ border: 'none' }}>
          マイページ
        </Link>
        <Button onClick={logout}>ログアウト</Button>
      </CenterModal>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing="20px">
          <FormControl isInvalid={!!errors.imageUrl}>
            <FormLabel htmlFor="imageUrl" color="sTHeading" fontWeight="bold" fontSize="lg">
              メイン画像
            </FormLabel>
            <Input
              id="imageUrl"
              type="file"
              accept="image/*"
              {...register('imageUrl', { required: '画像を選択してください。' })}
              border="none"
              onChange={changeFile}
              color="sTParagraph"
              autoComplete="off"
              p={0}
              _placeholder={{ color: 'sTPlaceHolder' }}
            />
            {imgUrl !== null && <Image src={imgUrl} alt="added item image." />}
            {errors.imageUrl && <FormErrorMessage>{errors.imageUrl.message}</FormErrorMessage>}
          </FormControl>
          <SubmitButton text="追加する" isLoading={isSubmitting} />
        </Stack>
      </form>
    </>
  )
}

export default AddItem
