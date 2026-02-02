import { Loader } from '@/components/Loader'
import { QuestionCardList } from '@/components/QuestionCardList'
import { API_URL } from '@/constants'
import { artificialDelay } from '@/heplers/artificialDelay'
import type { QuestionApiItem } from '@/types'
import { useEffect, useState } from 'react'

export const HomePage = () => {
  const [questionCards, setQuestionCards] = useState<QuestionApiItem[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    const getQuestions = async () => {
      try {
        setIsLoading(true)

        await artificialDelay()

        const response = await fetch(`${API_URL}/react`)
        const questions = await response.json()

        setQuestionCards(questions)
      } catch (error) {
        console.log(error)
      } finally {
        setIsLoading(false)
      }
    }

    getQuestions()
  }, [])

  return (
    <div>
      {isLoading && <Loader />}
      <QuestionCardList items={questionCards} />
    </div>
  )
}
