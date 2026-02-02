import styles from './QuestionCard.module.css'
import { Button } from '../Button'

export const QuestionCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <span>Level: 1</span>
        <div>Not Completed</div>
      </div>

      <p className={styles.cardTitle}>Lorem ipsum dolor sit amet?</p>

      <div className={styles.cardFooter}>
        <div>Short answer:</div>
        <p className={styles.shortAnswer}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
          facilis quis ipsum, cum eligendi animi.
        </p>
      </div>

      <Button>View</Button>
    </div>
  )
}
