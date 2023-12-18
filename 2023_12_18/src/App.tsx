import './App.css'
import {
    BrowserRouter as Router,
    Route,
    Routes
} from 'react-router-dom'
import About from './pages/About'
import Homepage from './pages/Homepage'
import Navbar from './components/Navbar'

function App() {
  return (
    <Router>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Homepage/>}/>
            <Route path='/about' element={<About/>}/>
        </Routes>
    </Router>
  )
}

export default App