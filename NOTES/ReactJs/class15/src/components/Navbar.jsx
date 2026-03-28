import React, { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'

const Navbar = () => {
    const [theme, setTheme]=useContext(ThemeDataContext)
  return (
    <div className='flex justify-between items-center bg-blue-400 m-2 h-15 font-bold text-xl p-3 rounded-xl'>
        <h1>This is Navbar area</h1>
        <h2>{theme}</h2>
        <button 
        className='rounded-lg bg-blue-500 p-2 cursor-pointer'
        onClick={()=>{
            setTheme('Emerald')
        }}>Change Theme</button>
    </div>
  )
}

export default Navbar