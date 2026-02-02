import { QuestionCard } from '@/components/QuestionCard'
import { API_URL } from '@/constants'
import type { CardAttributes, QuestionApiItem } from '@/types'
import { useEffect, useState } from 'react'

export const HomePage = () => {
  const [questionCards, setQuestionCards] = useState<QuestionApiItem[]>([])

  const getQuestions = async () => {
    try {
      const response = await fetch(`${API_URL}/react`)
      const questions = await response.json()
      setQuestionCards(questions)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getQuestions()
  }, [])

  const adaptCard = (item: QuestionApiItem): CardAttributes => ({
    id: item.id,
    level: item.level,
    isCompleted: item.completed,
    question: item.question,
    answer: item.answer,
  })

  return (
    <div>
      {questionCards.map((item) => {
        const card = adaptCard(item)
        return <QuestionCard key={card.id} card={card} />
      })}
    </div>
  )
}
