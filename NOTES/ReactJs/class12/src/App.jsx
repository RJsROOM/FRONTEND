import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Courses from './pages/Courses'
import Kodr from './pages/Kodr'
import Navbar from './components/Navbar'
import Random from './pages/Random'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/courses' element={<Courses />}>
          <Route path='/courses/kodr' element={<Kodr />} />
          <Route path='/courses/:id' element={<Random />} />
        </Route>
      </Routes>
      <Footer />

    </div>
  )
}

export default App