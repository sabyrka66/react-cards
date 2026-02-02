import styles from './QuestionCard.module.css'
import { Button } from '../Button'
import { useNavigate } from 'react-router-dom'

interface Props {
  id: string
  level: number
  isCompleted: boolean
  question: string
  answer: string
}

export const QuestionCard = ({
  id,
  level,
  isCompleted,
  question,
  answer,
}: Props) => {
  const navigate = useNavigate()

  const handleViewCardDetails = () => {
    void navigate(`/question/${id}`)
  }

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <span>Level: {level}</span>
        <div>{isCompleted ? 'Completed' : 'Not Completed'}</div>
      </div>

      <p className={styles.cardTitle}>{question}</p>

      <div className={styles.cardFooter}>
        <div>Short answer:</div>
        <p className={styles.shortAnswer}>{answer}</p>
      </div>

      <Button onClick={handleViewCardDetails}>View</Button>
    </div>
  )
}
