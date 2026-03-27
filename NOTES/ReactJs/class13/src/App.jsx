import React, { useState } from 'react'
import Navbar from './components/Navbar'

const App = () => {

  const [theme, setTheme] = useState('light')

  const changeTheme= (newTheme)=>{
    setTheme(newTheme)
  }

  return (
    <div className='mt-10 ml-30 top-1/2 left-1/2 -transition-1/2'>
      <h1 className='px-20 font-bold text-2xl mb-10'>Theme is {theme}</h1>
      <Navbar changeTheme={changeTheme} />
    </div>
  )
}

export default App