import { getDownloadURL, getStorage, ref, uploadBytes, type UploadResult } from 'firebase/storage'
import { v4 } from 'uuid'

import { UserState } from '@/typs/user'

export const genStoragePath = (file: File, user: UserState) => {
  const extension = file.name.split('.').pop()
  if (user) {
    return `users/${user?.uid}/${v4()}.${extension}`
  } else {
    throw new Error('user is not defined')
  }
}

export const uploadStorage = async (file: File, user: UserState) => {
  try {
    const storage = getStorage()
    const storageRef = ref(storage, genStoragePath(file, user))
    const result = await uploadBytes(storageRef, file)
    console.log(result)
    return result
  } catch (e) {
    throw new Error('Don`t upload file')
  }
}

export const downloadStorage = async (result: UploadResult) => {
  try {
    const storage = getStorage()
    const storageRef = ref(storage, result.metadata.fullPath)
    return await getDownloadURL(storageRef)
  } catch (e) {
    throw new Error('Don`t download file')
  }
}
