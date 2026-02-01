import type { PropsWithChildren } from 'react'
import styles from './Button.module.css'

type Props = PropsWithChildren<{
  isActive?: boolean
  isDisabled?: boolean
}>

export const Button = ({
  isActive = false,
  isDisabled = false,
  children,
}: Props) => {
  return (
    <button
      className={`${styles.button} ${isActive ? styles.active : undefined}`}
      disabled={isDisabled}
    >
      {children}
    </button>
  )
}
