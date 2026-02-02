import { Loader } from '@/components/Loader'
import { QuestionCardList } from '@/components/QuestionCardList'
import { API_URL } from '@/constants'
import { useFetch } from '@/hooks/useFetch'
import type { QuestionApiItem } from '@/types'
import { useEffect, useState, type ChangeEvent } from 'react'

export const HomePage = () => {
  const [questionCards, setQuestionCards] = useState<QuestionApiItem[]>([])
  const [searchValue, setSearchValue] = useState<string>('')

  const { fetchResponse, isLoading, error } = useFetch(async () => {
    const response = await fetch(`${API_URL}/react`)
    const questions = await response.json()

    setQuestionCards(questions)
    return questions
  })

  useEffect(() => {
    fetchResponse('react')
  }, [])

  const searchValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value)
    console.log(event.target.value)
  }

  return (
    <div>
      <input type="text" value={searchValue} onChange={searchValueHandler} />

      {isLoading && <Loader />}
      {error && <p>{error}</p>}
      <QuestionCardList items={questionCards} />
    </div>
  )
}
