import { useId, type ChangeEvent } from 'react'
import styles from './SearchField.module.css'

interface Props {
  searchValue: string
  onSearchValueHandler: (event: ChangeEvent<HTMLInputElement>) => void
}

export const SearchField = ({ searchValue, onSearchValueHandler }: Props) => {
  const inputId = useId()

  return (
    <div className={styles.inputContainer}>
      <label htmlFor={inputId}></label>
      <input
        type="text"
        id={inputId}
        value={searchValue}
        placeholder="Search..."
        className={styles.input}
        onChange={onSearchValueHandler}
      />
    </div>
  )
}
