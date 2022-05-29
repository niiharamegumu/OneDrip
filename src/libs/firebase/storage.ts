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
