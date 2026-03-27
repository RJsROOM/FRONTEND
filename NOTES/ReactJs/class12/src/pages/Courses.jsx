import React from 'react'
import { Outlet } from 'react-router-dom'

const Courses = () => {
  return (
    <div className='font-bold text-3xl absolute top-[30vh] left-[50vw] -translate-1/2 underline'>
        <h1>Courses page</h1>
        <Outlet />
    </div>
  )
}

export default Courses