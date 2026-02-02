import styles from './QuestionCard.module.css'
import { Button } from '../Button'
import { useNavigate } from 'react-router-dom'
import type { CardAttributes } from '@/types'

interface Props {
  card: CardAttributes
}

export const QuestionCard = ({ card }: Props) => {
  const navigate = useNavigate()

  const handleViewCardDetails = () => {
    void navigate(`/question/${card.id}`)
  }

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <span>Level: {card.level}</span>
        <div>{card.isCompleted ? 'Completed' : 'Not Completed'}</div>
      </div>

      <p className={styles.cardTitle}>{card.question}</p>

      <div className={styles.cardFooter}>
        <div>Short answer:</div>
        <p className={styles.shortAnswer}>{card.answer}</p>
      </div>

      <Button onClick={handleViewCardDetails}>View</Button>
    </div>
  )
}
