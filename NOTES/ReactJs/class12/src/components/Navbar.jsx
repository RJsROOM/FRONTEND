import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex gap-12 p-[20px]'>
        <NavLink 
        style={({isActive})=>({
            color: isActive ? 'red' : 'black'
        })}
        to='/'>
            Home
        </NavLink>
        <NavLink
        style={({isActive})=>({
            color: isActive ? 'red' : 'black'
        })} 
        to='/courses'>
            Courses
        </NavLink>
    </div>
  )
}

export default Navbar