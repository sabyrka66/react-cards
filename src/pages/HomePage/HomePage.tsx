import { Loader } from '@/components/Loader'
import { QuestionCardList } from '@/components/QuestionCardList'
import { API_URL } from '@/constants'
import type { QuestionApiItem } from '@/types'
import { useEffect, useState } from 'react'

export const HomePage = () => {
  const [questionCards, setQuestionCards] = useState<QuestionApiItem[]>([])

  useEffect(() => {
    const getQuestions = async () => {
      try {
        const response = await fetch(`${API_URL}/react`)
        const questions = await response.json()
        setQuestionCards(questions)
      } catch (error) {
        console.log(error)
      }
    }

    getQuestions()
  }, [])

  return (
    <div>
      <Loader />
      <QuestionCardList items={questionCards} />
    </div>
  )
}
