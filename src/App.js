import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'

import Home from './pages/Home/Home'
import Projects from './pages/Projects/Projects'
import Contact from './pages/Contact/Contact'

import './App.css'

function App() {
  return (
    <div className="App">
      {/* <h1>Shree Ganesh</h1> */}
      <Router>
        <Navbar />
        <Home />
        <Projects />
        <Contact />
        <Routes>
          <Route
            path="/home"
            element={<Home />}
          />
        </Routes>
      </Router>
    </div>
  )
}

export default App
