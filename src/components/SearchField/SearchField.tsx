import { useId, type ChangeEvent } from 'react'
import styles from './SearchField.module.css'
import { SearchIcon } from '../icons'

interface Props {
  searchValue: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export const SearchField = ({ searchValue, onChange }: Props) => {
  const inputId = useId()

  return (
    <div className={styles.inputContainer}>
      <label htmlFor={inputId}>
        <SearchIcon />
      </label>
      <input
        type="text"
        id={inputId}
        value={searchValue}
        placeholder="Search..."
        className={styles.input}
        onChange={onChange}
      />
    </div>
  )
}
