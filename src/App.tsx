import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MainLayout } from './components/MainLayout'
import { HomePage } from './pages/HomePage'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/add-question" element="add question" />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
