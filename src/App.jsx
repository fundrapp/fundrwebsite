import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import FundrWebsite from './FundrWebsite'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FundrWebsite />} />
        <Route path="/privacy-policy" element={<FundrWebsite />} />
        <Route path="/terms-of-service" element={<FundrWebsite />} />
        <Route path="/cookie-policy" element={<FundrWebsite />} />
        <Route path="/child-safety-standards-policy" element={<FundrWebsite />} />
      </Routes>
    </Router>
  )
}

export default App