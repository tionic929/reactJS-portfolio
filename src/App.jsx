import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Achievements from './pages/Achievements';
import './App.css'
import './index.css'
import Navbar from './pages/Navbar';

function AnimatedRoutes(){
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/achievements" element={<Achievements />} />
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  return (
    <>
      <div className="h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <AnimatedRoutes />
        </div>
      </div>
    </>
  )
}

export default App;