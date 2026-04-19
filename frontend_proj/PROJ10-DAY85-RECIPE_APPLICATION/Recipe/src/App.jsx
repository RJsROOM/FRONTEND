import React from 'react'
import Mainroutes from './routes/Mainroutes'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='px-[10%] py-5 w-screen h-screen font-semibold text-gray-700 bg-green-200'>
      <Navbar />
      <Mainroutes />
    </div>
  )
}

export default App;