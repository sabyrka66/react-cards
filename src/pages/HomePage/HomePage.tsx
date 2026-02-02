import { Loader } from '@/components/Loader'
import { QuestionCardList } from '@/components/QuestionCardList'
import { API_URL } from '@/constants'
import { useFetch } from '@/hooks/useFetch'
import type { QuestionApiItem } from '@/types'
import { useEffect, useState } from 'react'

export const HomePage = () => {
  const [questionCards, setQuestionCards] = useState<QuestionApiItem[]>([])

  const { fetchResponse, isLoading, error } = useFetch(async () => {
    const response = await fetch(`${API_URL}/react`)
    const questions = await response.json()

    setQuestionCards(questions)
    return questions
  })

  useEffect(() => {
    fetchResponse('react')
  }, [])

  return (
    <div>
      {isLoading && <Loader />}
      {error && <p>{error}</p>}
      <QuestionCardList items={questionCards} />
    </div>
  )
}
