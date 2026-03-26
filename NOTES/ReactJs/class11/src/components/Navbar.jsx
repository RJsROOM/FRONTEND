import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between font-bold px-8 h-20 items-center py-4 bg-pink-800 mb-10'>
        <h2>Navbar</h2>
        <div className='flex gap-8'>
            <Link to='/'>Home page</Link>
            <Link to='/about'>About page</Link>
            <Link to='/product'>Product page</Link>
        </div>
    </div>
  )
}

export default Navbar