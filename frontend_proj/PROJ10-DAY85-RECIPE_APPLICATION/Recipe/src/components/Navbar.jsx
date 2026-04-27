import React from 'react'
import { NavLink } from 'react-router-dom'

const navLinkClassName = ({ isActive }) =>
  `relative rounded-full px-4 py-2 text-lg transition-all duration-300 ease-out hover:-translate-y-0.5 hover:text-green-900 ${
    isActive
      ? 'bg-green-50 text-green-900 shadow-[0_10px_24px_rgba(22,101,52,0.12)]'
      : 'text-gray-700'
  } after:absolute after:left-4 after:right-4 after:bottom-1 after:h-0.5 after:origin-left after:rounded-full after:bg-green-700 after:transition-transform after:duration-300 ${
    isActive ? 'after:scale-x-100' : 'after:scale-x-0'
  }`

const createLinkClassName = ({ isActive }) =>
  `rounded-xl px-4 py-2 cursor-pointer transition-all duration-300 ease-out active:scale-95 hover:-translate-y-0.5 ${
    isActive
      ? 'bg-green-900 text-green-100 ring-4 ring-green-100 shadow-[0_16px_30px_rgba(20,83,45,0.24)]'
      : 'bg-green-950 text-green-200 hover:bg-green-900'
  }`

const Navbar = () => {
  return (
    <div className='flex justify-center items-center gap-x-10 text-md text-xl font-semibold text-gray-700 mb-5'>

        <NavLink className={navLinkClassName} to='/'>
            Home
        </NavLink>

        <NavLink className={navLinkClassName} to='/recipes'>
            Recipes
        </NavLink>
        
        <NavLink className={navLinkClassName} to='/about'>
            About Us
        </NavLink>

        <NavLink 
        className={navLinkClassName} to='/fav'>
            Favourites
        </NavLink>

        <NavLink 
        className={createLinkClassName} to='/create-recipe'>
            Create Recipe
        </NavLink>


    </div>
  )
}

export default Navbar
