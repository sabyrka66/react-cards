import { Loader } from '@/components/Loader'
import { QuestionCardList } from '@/components/QuestionCardList'
import { API_URL } from '@/constants'
import { useFetch } from '@/hooks/useFetch'
import type { QuestionApiItem } from '@/types'
import { useEffect, useState, type ChangeEvent } from 'react'
import styles from './HomePage.module.css'

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

  const onSearchValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value)
    console.log(event.target.value)
  }

  return (
    <div>
      <div className={styles.controlsContainer}>
        <input
          type="text"
          value={searchValue}
          onChange={onSearchValueHandler}
        />
      </div>

      {isLoading && <Loader />}
      {error && <p>{error}</p>}
      <QuestionCardList items={questionCards} />
    </div>
  )
}
