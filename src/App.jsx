import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home'
import About from './pages/About'
import Game from './pages/Game'

export default function App() {
    return (
        <Router>
            <div className="h-screen flex flex-col bg-base-100">
                <Navbar />
                <div className="flex-1 min-h-0">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/game" element={<Game />} />
                    </Routes>
                </div>
            </div>
        </Router>
    )
}