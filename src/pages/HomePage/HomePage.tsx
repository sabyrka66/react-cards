import { Loader } from '@/components/Loader'
import { QuestionCardList } from '@/components/QuestionCardList'
import { API_URL } from '@/constants'
import { useFetch } from '@/hooks/useFetch'
import type { QuestionApiItem } from '@/types'
import { useEffect, useState, type ChangeEvent } from 'react'
import styles from './HomePage.module.css'
import { SearchField } from '@/components/SearchField'

export const HomePage = () => {
  const [questionCards, setQuestionCards] = useState<QuestionApiItem[]>([])
  const [searchValue, setSearchValue] = useState<string>('')

  const { fetchResponse, isLoading, error } = useFetch(
    async (): Promise<void> => {
      const response = await fetch(`${API_URL}/react`)

      if (!response.ok) {
        throw new Error('Failed to fetch questions')
      }

      const questions = (await response.json()) as QuestionApiItem[]
      setQuestionCards(questions)
    },
  )

  useEffect(() => {
    void fetchResponse('react')
  }, [fetchResponse])

  const onSearchValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value)
    console.log(event.target.value)
  }

  return (
    <div>
      <div className={styles.controlsContainer}>
        <SearchField
          searchValue={searchValue}
          onChange={onSearchValueHandler}
        />
      </div>

      {isLoading && <Loader />}
      {error && <p>{error}</p>}
      <QuestionCardList items={questionCards} />
    </div>
  )
}
