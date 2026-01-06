import './App.css'
import Navbar from './components/Navbar'
import Landing from './pages/landing'
import ProjectPage from './components/ProjectPage'
import ProjectDetail from './pages/ProjectDetail'
import Footer from './components/Footer'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/projectpage" element={<ProjectPage />} />
        <Route path="/projectdetail/:id" element={<ProjectDetail />} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
