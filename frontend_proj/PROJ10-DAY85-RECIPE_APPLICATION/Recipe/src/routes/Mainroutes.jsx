import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Recipes from '../pages/Recipes'
import About from '../pages/About'
import CreateRecipe from '../pages/CreateRecipe'
import RecipeDetails from '../pages/RecipeDetails'

const Mainroutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/recipes' element={<Recipes />} />
        <Route path='/recipes/details/:id' element={<RecipeDetails />} />
        <Route path='/create-recipe' element={<CreateRecipe />} />
        <Route path='/about' element={<About />} />
    </Routes>
  )
}

export default Mainroutes