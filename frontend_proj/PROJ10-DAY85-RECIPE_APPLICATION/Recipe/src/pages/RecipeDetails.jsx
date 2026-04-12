import React, { useContext } from "react";
import { recipecontext } from "../context/RecipeContext";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const RecipeDetails = () => {
  const navigate = useNavigate();

  const { data, setData } = useContext(recipecontext);

  const params = useParams();

  const recipe = data.find((item) => item.id == params.id);

  const { register, handleSubmit } = useForm({
    defaultValues:{
      title: recipe.title,
      image: recipe.image,
      description: recipe.description,
      chef: recipe.chef,
      instructions: recipe.instructions,
      ingredients: recipe.ingredients,
      category: recipe.category
    }
  });

  const submitHandler = (newData) => {
    const index = data.findIndex((recipe) => params.id == recipe.id);

    const copydata = [...data];
    copydata[index] = { ...copydata[index], ...newData };
    setData(copydata);
    toast.success("Recipe updated successfully!");
    navigate("/recipes");
  };

  const deleteHandler = () => {
    const filterdata = data.filter((r) => r.id != params.id);
    setData(filterdata);
    toast.success("Recipe deleted successfully!");
    navigate("/recipes");
  };

  // const { data } = useContext(recipecontext);

  return recipe ? (
    <div className="w-full flex justify-between">
      <div className="left w-[70%] p-2 bg-green-500 rounded-lg shadow-xl hover:scale-105 duration-500 cursor-pointer">
        <h1 className="text-3xl font-black text-center mb-5">{recipe.title}</h1>
        <img
          className="rounded-xl h-[60vh] w-[24vw] mx-5"
          src={recipe.image}
          alt=""
        />
      </div>
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="flex flex-col max-w-fit w-1/2 p-2 bg-green-500 rounded-lg shadow-xl hover:scale-105 duration-500"
      >
        <input
          required
          className="border-b p-2 outline-0 block"
          type="text"
          placeholder="Enter Chef Name"
          {...register("chef  ")}
        />

        <input
          className="border-b p-2 outline-0 block"
          type="text"
          placeholder="Enter Recipe Title"
          {...register("title")}
        />
        <small className="text-red-700">This is the error area</small>

        <input
          className="border-b p-2 outline-0 block"
          type="url"
          placeholder="Enter image url.."
          {...register("image")}
        />
        <small className="text-red-700">This is the error area</small>

        <textarea
          className="border-b p-2 outline-0 block"
          {...register("description")}
          placeholder="Enter recipe description.."
        ></textarea>
        <small className="text-red-700">This is the error area</small>

        <textarea
          className="border-b p-2 outline-0 block"
          {...register("ingredients")}
          placeholder="Enter recipe ingredients.."
        ></textarea>
        <small className="text-red-700">This is the error area</small>

        <textarea
          className="border-b p-2 outline-0 block"
          {...register("instructions")}
          placeholder="Enter recipe instructions.."
        ></textarea>
        <small className="text-red-700">This is the error area</small>

        <select
          className="border-b p-2 outline-0 block"
          {...register("category")}
        >
          <option value="">Select a category</option>
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
          <option value="dessert">Dessert</option>
        </select>

        <button 
        className="block mt-10 bg-green-950 text-green-200 p-2 rounded-xl cursor-pointer active:scale-95">
          Update Recipe
        </button>
        <button
          onClick={deleteHandler}
          className="block mt-3 bg-red-500 text-green-200 p-2 rounded-xl cursor-pointer active:scale-95"
        >
          Delete Recipe
        </button>
      </form>
    </div>
  ) : (
    "Loading..."
  );
};

export default RecipeDetails;
