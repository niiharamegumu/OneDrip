import { atom } from 'jotai'

import { UserState } from '@/typs/user'

export const userAtm = atom<UserState>(null)
