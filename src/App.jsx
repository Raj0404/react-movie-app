
import './css/App.css'
import Favorites from './pages/Favorites.jsx'
import Home from './pages/Home.jsx'
import {Routes,Route} from 'react-router-dom'
import NavBar from './components/NavBar.jsx'
import { MovieProvider } from './contexts/MovieContext.jsx'


function App() {
  return (
    <MovieProvider>
      <NavBar />
      <main>
      
        <Routes className= 'main-content'>
          <Route path='/' element={<Home />}></Route>
          <Route path='/favorites' element={<Favorites />}></Route>
        </Routes>
      </main>
    </MovieProvider>
    )
}


export default App
