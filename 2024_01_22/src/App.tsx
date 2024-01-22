import './App.scss'
import {
    BrowserRouter as Router,
    Route,
    Routes
} from 'react-router-dom'
import Navbar from './components/Navbar'
import { routes } from './helpers/routes.tsx'
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={route.element}
          />
        ))}
      </Routes>
      <Navbar/>
      <Footer/>
    </Router>
  )
}

export default App