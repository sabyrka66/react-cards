import type { PropsWithChildren } from 'react'
import styles from './Button.module.css'

type Props = PropsWithChildren<{
  isActive?: boolean
  isDisabled?: boolean
  onClick?: () => void
}>

export const Button = ({
  isActive = false,
  isDisabled = false,
  onClick,
  children,
}: Props) => {
  return (
    <button
      className={`${styles.button} ${isActive ? styles.active : undefined}`}
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}
    </button>
  )
}
