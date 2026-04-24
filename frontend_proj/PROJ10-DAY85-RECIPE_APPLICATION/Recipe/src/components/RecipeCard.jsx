import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

const RecipeCard = (props) => {

  const [favourite, setFavourite] = useState(
    JSON.parse(localStorage.getItem('fav')) || []
  )

  const {id, image, title, description, chef, category}= props.recipe;

  const FavHandler=()=>{
    let copyfav=[...favourite]
    copyfav.push(props.recipe)
    localStorage.setItem('fav', JSON.stringify(copyfav))
  }

  const UnFavHandler=()=>{
    const filterfav= favourite.filter((f)=> f.id != props.recipe?.id)
    setFavourite(filterfav)
    localStorage.setItem('fav', JSON.stringify(filterfav))
  }


  useEffect(()=>{
  },[favourite])



  return (
    <Link 
    to={`/recipes/details/${id}`}
    className='hover:scale-105 transition duration-250 block w-[20vw] mb-3 mr-3 rounded-xl overflow-hidden shadow-xl p-2'>
        <img className='object-cover w-full h-[25vh] rounded-lg mb-2  justify-center' src={image} alt="" />
        <div className='h-0.5 flex flex-row-reverse'>
          {favourite.find((f)=> f.id == props.recipe?.id) ? (
            <i onClick={UnFavHandler} className="cursor-pointer text-2xl text-red-400 ri-poker-hearts-fill"></i>
          ) : (
            <i onClick={FavHandler} className="cursor-pointer text-2xl text-red-400 ri-poker-hearts-line"></i>
          )
          }
          
          
        </div> 
        <h1 className='m-1 text-xl font-bold'>{title}</h1>
        <small className='m-1 font-bold'>{chef}</small>
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