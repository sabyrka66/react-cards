import { Outlet } from 'react-router-dom'
import styles from './MainLayout.module.css'
import { Header } from '../Header'

export const MainLayout = () => {
  return (
    <div className={styles.mainLayout}>
      <Header />
      <div className={styles.mainWrapper}>
        <main className={styles.main}>
          <Outlet />
        </main>
        <footer className={styles.footer}>
          React Question Cards Application | {new Date().getFullYear()} <br />
          by Sabyrka
        </footer>
      </div>
    </div>
  )
}
