import styles from './Header.module.css'
import LogoDark from '@/assets/icons/logo-dark.svg'
import LogoLight from '@/assets/icons/logo-light.svg'
import { Button } from '../Button'

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <picture>
          <source srcSet={LogoDark} media="(prefers-color-scheme: dark)" />
          <source srcSet={LogoLight} media="(prefers-color-scheme: light)" />
          <img src={LogoLight} alt="Logo" />
        </picture>

        <span>React Cards</span>
      </div>

      <div className={styles.actions}>
        <Button isDisabled>Add</Button>
        <Button>Log In</Button>
      </div>
    </header>
  )
}
