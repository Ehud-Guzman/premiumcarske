import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './theme/ThemeContext'
import Layout from './layouts/Layout'
import Home from './pages/Home'
import Cars from './pages/Cars'
import CarDetails from './pages/CarDetails'
import About from './pages/About'
import Contact from './pages/Contact'
import SellCar from './pages/SellCar'
import NotFound from './pages/NotFound'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <ThemeProvider>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/cars/:id" element={<CarDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sell" element={<SellCar />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  )
}

export default App
