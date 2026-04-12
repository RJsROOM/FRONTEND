import React from 'react'
import {Link} from 'react-router-dom'

const RecipeCard = (props) => {

    const {id, image, title, description, chef, category}= props.recipe;


  return (
    <Link 
    to={`/recipes/details/${id}`}
    className='hover:scale-105 transition duration-250 block w-[20vw] mb-3 mr-3 rounded-xl overflow-hidden shadow-xl p-2'>
        <img className='object-cover w-full h-[25vh] rounded-lg mb-2  justify-center' src={image} alt="" />
        <h1 className='m-2 font-bold'>{title}</h1>
        <small className='m-2 font-bold'>{chef}</small>
        <p className='font-normal'>
            {description.slice(0,100)}...{" "}
            <small className='text-blue-400'>more</small>
        </p>
        <div className='flex justify-between items-center'>
          <h3 className='rounded text-gray-800  bg-green-400 font-l font-medium inline-block mt-2 mb-2 px-2 py-1'>{category}</h3>
        </div>
    </Link>
  )
}

export default RecipeCard