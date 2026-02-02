import { artificialDelay } from '@/heplers/artificialDelay'
import { useState } from 'react'

export const useFetch = (callback: (arg: string) => void) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  const fetchResponse = async (arg: string) => {
    try {
      setIsLoading(true)
      await artificialDelay()
      return await callback(arg)
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
