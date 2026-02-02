import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MainLayout } from './components/MainLayout'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element="main" />
          <Route path="/add-question" element="add question" />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
