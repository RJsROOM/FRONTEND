import React, { useContext } from 'react'
import { UserDataContext } from '../context/UserContext'

const Navbar = () => {

  const data= useContext(UserDataContext)

  return (
    <div className='w-full h-10 bg-emerald-400 p-2'>
        <h1>This is {data}</h1>
    </div>
  )
}

export default Navbar