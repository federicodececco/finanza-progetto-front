import { BrowserRouter, Route, Routes } from 'react-router'

/* pages */
import HomePage from './pages/HomePage'
import DetailPage from './pages/DetailPage'
import AllConcepts from './pages/AllConcepts'
/* layout */
import DefaultLayout from './layouts/DefaultLayout'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/products' element={<AllConcepts />} />
          <Route path='/products/detail/:id' element={<DetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
