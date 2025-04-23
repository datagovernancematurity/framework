import { Routes, Route, Link } from 'react-router-dom'
import './App.css'

import Main from './pages/Main'
import Level from './pages/Level'
import DimensionsAndLevels from './pages/DimensionsAndLevels'
import Aspects from './pages/Aspects'
import Roles from './pages/Roles'

export default function App() {
  return (
    <div className="App">
      <header>
        <nav className="navbar">
          <h1>DGM2 Framework</h1>
          <input type="checkbox" id="menu-toggle" />
          <label htmlFor="menu-toggle" className="menu-icon">&#9776;</label>
          <ul className="nav-links">
            <li><Link to="/framework">Main</Link></li>
            <li><Link to="/roles">Roles</Link></li>
            <li><Link to="/level">Levels</Link></li>
            <li><Link to="/aspects">Aspects and Scoring</Link></li>
            <li><Link to="/dimensions">Dimensions</Link></li>
          </ul>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/framework" element={<Main />} />
          <Route path="/level" element={<Level />} />
          <Route path="/dimensions" element={<DimensionsAndLevels />} />
          <Route path="/aspects" element={<Aspects />} />
          <Route path="/roles" element={<Roles />} />
        </Routes>
      </main>
    </div>
  )
}