import React from 'react'
import Navbar from './components/Navbar'
import Sections from './components/Sections'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='bg-zinc-500 w-full h-screen flex flex-col'>
      <Navbar />
      <Sections />
      <Footer />
    </div>
  )
}

export default App