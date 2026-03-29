import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const navigate= useNavigate()

  return (
    <div
    className='font-bold bg-blue-300 h-screen w-screen'
    >
        <h1 className='top-1/3 left-1/2 -translate-1/2 text-6xl text-center absolute'>This is Home page</h1>
        <button
        className='top-1/3 left-1/2 -translate-1/2 absolute mt-40 cursor-pointer bg-zinc-600 p-3 rounded-lg text-red-950 active:scale-110'
        onClick={()=>{
            navigate('/products')
        }}
        >Explore our products..</button>
    </div>
  )
}

export default Home