import { type FirebaseApp } from 'firebase/app'
import {
  collection,
  FieldPath,
  getDocs,
  getFirestore,
  query,
  QueryConstraint,
  where,
  type WhereFilterOp,
  type FirestoreError,
  QuerySnapshot,
} from 'firebase/firestore'
import { useState, useEffect, useMemo, useCallback } from 'react'

type WhereOptionObj = {
  fieldPath: string | FieldPath
  opStr: WhereFilterOp
  value: any
}

export const useDocument = <T>(app: FirebaseApp, path: string, whereOpts?: WhereOptionObj[]) => {
  const db = getFirestore(app)
  const [result, setResult] = useState<T[]>([])
  const [error, setError] = useState<FirestoreError | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  const loadDataWithQuery = useCallback(async () => {
    const expandWhereOpts = (): QueryConstraint[] => {
      return whereOpts!.map((option) => {
        return where(option.fieldPath, option.opStr, option.value)
      })
    }
    try {
      const q = query(collection(db, path), ...expandWhereOpts())
      const querySnapshot = (await getDocs(q)) as QuerySnapshot<T>
      if (!querySnapshot.empty) {
        setResult([])
        querySnapshot.forEach((doc) =>
          setResult((prev) => [...prev, { ...doc.data(), id: doc.id }]),
        )
      }
      setIsLoading(false)
      if (querySnapshot.empty) throw new Error('Empty Data')
    } catch (error) {
      setError(error as FirestoreError)
      setIsLoading(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const loadDataAll = useCallback(async () => {
    try {
      const querySnapshot = (await getDocs(collection(db, path))) as QuerySnapshot<T>
      if (!querySnapshot.empty) {
        setResult([])
        querySnapshot.forEach((doc) =>
          setResult((prev) => [...prev, { ...doc.data(), id: doc.id }]),
        )
      }
      setIsLoading(false)
      if (querySnapshot.empty) throw new Error('Empty Data')
    } catch (error) {
      setError(error as FirestoreError)
      setIsLoading(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (whereOpts && whereOpts.length > 0) {
      loadDataWithQuery()
    } else {
      loadDataAll()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadDataAll, loadDataWithQuery])

  return useMemo(() => {
    return {
      result,
      isLoading,
      error,
    }
  }, [result, isLoading, error])
}
