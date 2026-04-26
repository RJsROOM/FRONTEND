import React from 'react'
import Mainroutes from './routes/Mainroutes'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='min-h-screen overflow-x-hidden bg-green-200 px-[10%] py-5 font-semibold text-gray-700'>
      <Navbar />
      <Mainroutes />
    </div>
  )
}

export default App;
