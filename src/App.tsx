import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { FavoritesProvider } from './context/FavoritesContext'
import Navbar from './components/Navbar'
import HomePage from './pages/Home'
import CategoryPage from './pages/Category'

function App() {

  return (
    <BrowserRouter>
    <FavoritesProvider>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/category/:categoryName" element={<CategoryPage />} />
          <Route path="/" element={} />
          <Route path="/" element={} />
          <Route path="/" element={} />
        </Routes>
      </div>
    </FavoritesProvider>
    </BrowserRouter>
  )
}

export default App
