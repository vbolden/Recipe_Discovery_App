import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { FavoritesProvider } from './context/FavoritesContext'
import Navbar from './components/Navbar'


function App() {

  return (
    <BrowserRouter>
    <FavoritesProvider>
      <Navbar />
      <div className="container">
        <Routes>
          <Route />
          <Route />
          <Route />
          <Route />
          <Route />
        </Routes>
      </div>
    </FavoritesProvider>
    </BrowserRouter>
  )
}

export default App
