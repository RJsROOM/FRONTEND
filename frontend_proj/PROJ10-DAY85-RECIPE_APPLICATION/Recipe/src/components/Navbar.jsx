import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-center items-center gap-x-10 text-md text-xl font-semibold text-gray-700 mb-5'>

        <NavLink className={(e)=> e.isActive && "text-green-700"} to='/'>
            Home
        </NavLink>

        <NavLink className={(e)=> e.isActive && "text-green-700"} to='/recipes'>
            Recipes
        </NavLink>
        
        <NavLink className={(e)=> e.isActive && "text-green-700"} to='/about'>
            About
        </NavLink>

        <NavLink 
        className={`px-4 py-2 rounded-xl bg-green-950 text-green-200 cursor-pointer active:scale-95
        ${(e)=> e.isActive && "text-green-400"}`} to='/create-recipe'>
            Create Recipe
        </NavLink>


    </div>
  )
}

export default Navbar