import { useEffect, useState } from 'react'

export const useInitalLoading = (delay: number): boolean => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, delay)
  }, [delay])

  return isLoading
}
