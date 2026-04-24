import RecipeCard from "../components/RecipeCard";


const Fav = () => {
  const favourite= JSON.parse(localStorage.getItem('fav') || [])

  const renderRecipes= favourite.map((recipe)=>(
    <RecipeCard key={recipe.id} recipe={recipe} />
  ))


  return (
    <div className="flex flex-wrap">
      {favourite.length>0 ? renderRecipes : "No recipes found!"}
    </div>
  )
}

export default Fav;