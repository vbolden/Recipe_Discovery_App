import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { FavoritesProvider } from './context/FavoritesContext'
import Navbar from './components/Navbar'
import HomePage from './pages/Home'
import CategoryPage from './pages/Category'
import RecipeDetailPage from './pages/RecipeDetail'
import FavoritesPage from './pages/Favorites'
import SearchPage from './pages/Search'

function App() {

  return (
    <BrowserRouter>
    <FavoritesProvider>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/category/:categoryName" element={<CategoryPage />} />
          <Route path="/recipe/:recipeId" element={<RecipeDetailPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </div>
    </FavoritesProvider>
    </BrowserRouter>
  )
}

export default App
