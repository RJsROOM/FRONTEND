import React, { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'

const Footer = () => {
  return (
    <div className='bg-blue-400  rounded-xl w-full h-30 p-3 m-2 text-2xl font-bold'>
        <h1>This is footer area</h1>
    </div>
  )
}

export default Footer