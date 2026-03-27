import React from 'react'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
    const navigate= useNavigate();
  return (
    <div className='absolute w-full bottom-0 flex items-center justify-between p-[20px] bg-gray-300'>
        <h2>Footer</h2>
        <button
        onClick={()=>{
            navigate('/courses')
        }}
        className='cursor-pointer active:scale-110 bg-emerald-500 text-white rounded px-[20px] py-[10px]'>Explore Courses..</button>
    </div>
  )
}

export default Footer