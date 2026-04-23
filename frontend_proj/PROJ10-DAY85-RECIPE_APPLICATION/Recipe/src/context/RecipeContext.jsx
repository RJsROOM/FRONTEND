import React, { createContext, useEffect, useState } from "react";

export const recipecontext = createContext(null);


const RecipeContext = (props) => {
  const [data, setData] = useState([]);

  useEffect(()=>{
    localStorage.getItem('recipes') ? setData(JSON.parse(localStorage.getItem('recipes'))) : setData([])
  },[])

  return (
    <recipecontext.Provider value={{ data, setData }}>
      {props.children}
    </recipecontext.Provider>
  );
};

export default RecipeContext;


// {
//       id: 1,
//       image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFuY2FrZXN8ZW58MHx8MHx8fDA%3D",
//       title: "Classic Pancakes",
//       description:
//         "Fluffy and soft pancakes perfect for a delicious breakfast. Easy to make and loved by all age groups.",
//       chef: "Rakshit’s Kitchen",
//       instructions: [
//         "In a bowl, mix flour, sugar, baking powder, and salt.","In another bowl, whisk milk, egg, and melted butter.","Combine wet and dry ingredients until smooth.","Heat a pan and pour batter to form pancakes.","Cook until bubbles form, flip, and cook until golden brown.","Serve hot with syrup or fruits.",
//       ],
//       ingredients: [
//         "1 cup all-purpose flour","2 tbsp sugar","1 tsp baking powder","1/2 tsp salt","1 cup milk","1 egg","2 tbsp melted butter",
//       ],
//       category: "breakfast",
//     },
