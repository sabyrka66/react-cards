import type { CardAttributes, QuestionApiItem } from '@/types'
import { QuestionCard } from '../QuestionCard/QuestionCard'
import styles from './QuestionCardList.module.css'
import { memo } from 'react'

const adaptCard = (item: QuestionApiItem): CardAttributes => ({
  id: item.id,
  level: item.level,
  isCompleted: item.completed,
  question: item.question,
  answer: item.answer,
})

interface Props {
  items: QuestionApiItem[]
}

export const QuestionCardList = memo(({ items }: Props) => {
  return (
    <div className={styles.cardList}>
      {items.map((item) => {
        const card = adaptCard(item)
        return <QuestionCard key={card.id} card={card} />
      })}
    </div>
  )
})
