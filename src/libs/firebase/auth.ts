import { getAuth, signInWithRedirect, signOut, GoogleAuthProvider } from 'firebase/auth'

import app from '@/libs/firebase/app'

export const login = (): Promise<void> => {
  const provider = new GoogleAuthProvider()
  provider.setCustomParameters({ prompt: 'select_account' })
  const auth = getAuth(app)
  return signInWithRedirect(auth, provider)
}

export const logout = (): Promise<void> => {
  const auth = getAuth(app)
  return signOut(auth)
}
