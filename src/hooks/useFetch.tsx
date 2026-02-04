import { artificialDelay } from '@/helpers/artificialDelay'
import { useState } from 'react'

export const useFetch = (callback: (arg: string) => Promise<void>) => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string>('')

  const fetchResponse = async (arg: string): Promise<void> => {
    try {
      setIsLoading(true)
      await artificialDelay()
      await callback(arg)
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message)
      }
    } finally {
      setIsLoading(false)
    }
  }

  return { isLoading, error, fetchResponse }
}
