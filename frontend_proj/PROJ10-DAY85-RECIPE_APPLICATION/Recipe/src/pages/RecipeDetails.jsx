import React, { useContext } from 'react'
import { recipecontext } from '../context/RecipeContext'
import { useParams } from 'react-router-dom'

const RecipeDetails = () => {

    const {data} = useContext(recipecontext)
    const params= useParams()
    const recipe= data.find((item)=> item.id==params.id)
    console.log(recipe)
  return recipe ? (
    <div>RecipeDetails</div>
  ) : "Loading..."
}

export default RecipeDetails