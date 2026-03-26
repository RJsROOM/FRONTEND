import React from 'react'
import About from './pages/About'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Product from './pages/Product'
import Men from './pages/Men'
import Women from './pages/Women'
import RandomPage from './pages/RandomPage'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/product' element={<Product />} />

        {/* Nested Routes */}
        <Route path='/product/men' element={<Men />} />
        <Route path='/product/women' element={<Women />} />

        {/* Dynamic Routes */}
        <Route path='/about/:id' element={<RandomPage />} />


      </Routes>
    </div>
  )
}

export default App