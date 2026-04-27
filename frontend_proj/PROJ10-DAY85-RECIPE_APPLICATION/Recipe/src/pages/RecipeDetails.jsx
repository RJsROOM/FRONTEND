import React, { useContext, useEffect } from "react";
import { recipecontext } from "../context/RecipeContext";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const sectionTitleClassName =
  "text-xs font-black uppercase tracking-[0.22em] text-green-700";
const contentCardClassName =
  "rounded-2xl bg-white/90 p-4 shadow-[0_10px_24px_rgba(22,101,52,0.12)]";
const fieldClassName =
  "w-full rounded-xl border border-green-200 bg-green-50/70 px-4 py-3 text-sm text-green-950 outline-none transition focus:border-green-600 focus:bg-white focus:ring-2 focus:ring-green-200";

const getListItems = (value) => {
  if (Array.isArray(value)) {
    return value.filter(Boolean);
  }

  if (typeof value === "string") {
    return value
      .split(/\r?\n|,/)
      .map((item) => item.trim())
      .filter(Boolean);
  }

  return [];
};

const RecipeDetails = () => {
  const navigate = useNavigate();

  const { data, setData } = useContext(recipecontext);

  const params = useParams();

  const recipe = data.find((item) => item.id == params.id);
  const ingredientsList = getListItems(recipe?.ingredients);
  const instructionsList = getListItems(recipe?.instructions);

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      title: "",
      image: "",
      description: "",
      chef: "",
      instructions: "",
      ingredients: "",
      category: "",
    },
  });

  const updateHandler = (newData) => {
    const index = data.findIndex((recipe) => params.id == recipe.id);

    const copydata = [...data];
    copydata[index] = { ...copydata[index], ...newData };
    setData(copydata);
    localStorage.setItem('recipes', JSON.stringify(copydata))
    toast.success("Recipe updated successfully!");
  };

  const deleteHandler = () => {
    const filterdata = data.filter((r) => r.id != params.id);
    setData(filterdata);
    localStorage.setItem('recipes', JSON.stringify(filterdata))
    toast.success("Recipe deleted successfully!");
    navigate("/recipes");
  };

  useEffect(() => {
    if (!recipe) return;

    reset({
      title: recipe.title || "",
      image: recipe.image || "",
      description: recipe.description || "",
      chef: recipe.chef || "",
      instructions: Array.isArray(recipe.instructions)
        ? recipe.instructions.join("\n")
        : recipe.instructions || "",
      ingredients: Array.isArray(recipe.ingredients)
        ? recipe.ingredients.join("\n")
        : recipe.ingredients || "",
      category: recipe.category || "",
    });
  }, [recipe, reset]);

  return recipe ? (
    <section className="mx-auto w-full max-w-7xl px-4 py-6">
      <div className="flex flex-col gap-6 xl:flex-row xl:items-start">
        <div className="left w-full flex-1 rounded-[30px] border border-green-300/70 bg-linear-to-br from-green-500 via-emerald-400 to-green-600 p-4 shadow-[0_24px_60px_rgba(22,101,52,0.22)] sm:p-6">
          <div className="mb-6 flex flex-col gap-3 border-b border-white/20 pb-5 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.28em] text-green-100/85">
                Recipe Details
              </p>
              <h1 className="mt-2 text-3xl font-black text-white sm:text-4xl">
                {recipe.title}
              </h1>
            </div>

            <p className="inline-flex w-fit rounded-full bg-white/90 px-4 py-2 text-sm font-bold capitalize text-green-900 shadow-sm">
              {recipe.category || "Uncategorized"}
            </p>
          </div>

          <div className="space-y-5">
            <div className="rounded-[26px] border border-white/25 bg-white/10 p-3 shadow-lg">
              <img
                className="h-80 w-full rounded-[18px] object-cover sm:h-107.5 lg:h-135"
                src={recipe.image}
                alt={recipe.title}
              />
            </div>

            <div className="rounded-[26px] bg-white/12 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] backdrop-blur-sm sm:p-5">
              <div className="flex flex-col gap-3 border-b border-white/20 pb-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="rounded-2xl bg-white/18 px-4 py-3 text-white shadow-sm sm:min-w-60">
                  <h2 className="text-xs font-black uppercase tracking-[0.22em] text-green-100/90">
                    Chef
                  </h2>
                  <p className="mt-1 text-lg font-semibold">
                    {recipe.chef || "Chef name not added yet."}
                  </p>
                </div>

                <p className="text-sm font-semibold text-white/90 sm:text-right">
                  A complete look at the recipe before you make edits.
                </p>
              </div>

              <div className="mt-4 grid gap-4 text-green-950 lg:grid-cols-2">
                <div className={contentCardClassName}>
                  <h2 className={sectionTitleClassName}>Description</h2>
                  <p className="mt-2 text-sm leading-7 sm:text-base">
                    {recipe.description || "Recipe description not added yet."}
                  </p>
                </div>

                <div className={contentCardClassName}>
                  <h2 className={sectionTitleClassName}>Ingredients</h2>
                  {ingredientsList.length ? (
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 sm:text-base">
                      {ingredientsList.map((ingredient, index) => (
                        <li key={`${ingredient}-${index}`}>{ingredient}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="mt-2 text-sm leading-7 sm:text-base">
                      Ingredients have not been added yet.
                    </p>
                  )}
                </div>

                <div className={`${contentCardClassName} lg:col-span-2`}>
                  <h2 className={sectionTitleClassName}>Instructions</h2>
                  {instructionsList.length ? (
                    <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm leading-7 sm:text-base">
                      {instructionsList.map((instruction, index) => (
                        <li key={`${instruction}-${index}`}>{instruction}</li>
                      ))}
                    </ol>
                  ) : (
                    <p className="mt-2 text-sm leading-7 sm:text-base">
                      Cooking instructions have not been added yet.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(updateHandler)}
          className="w-full rounded-[30px] border border-green-200 bg-white p-5 shadow-[0_20px_48px_rgba(22,101,52,0.14)] sm:p-6 xl:sticky xl:top-6 xl:w-95 xl:shrink-0"
        >
          <div className="border-b border-green-100 pb-5">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-green-700">
              Edit Recipe
            </p>
            <h2 className="mt-2 text-2xl font-black text-green-950">
              Update the details
            </h2>
            <p className="mt-1 text-sm text-green-900/65">
              Make changes here and save them directly to your recipe.
            </p>
          </div>

          <div className="mt-5 space-y-4">
            <div>
              <label className="mb-2 block text-sm font-semibold text-green-950">
                Chef Name
              </label>
              <input
                required
                className={fieldClassName}
                type="text"
                placeholder="Enter Chef Name"
                {...register("chef")}
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-green-950">
                Recipe Title
              </label>
              <input
                className={fieldClassName}
                type="text"
                placeholder="Enter Recipe Title"
                {...register("title")}
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-green-950">
                Image URL
              </label>
              <input
                className={fieldClassName}
                type="url"
                placeholder="Enter image url.."
                {...register("image")}
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-green-950">
                Description
              </label>
              <textarea
                className={`${fieldClassName} min-h-28 resize-y`}
                {...register("description")}
                placeholder="Enter recipe description.."
              ></textarea>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-green-950">
                Ingredients
              </label>
              <textarea
                className={`${fieldClassName} min-h-28 resize-y`}
                {...register("ingredients")}
                placeholder="Enter recipe ingredients.."
              ></textarea>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-green-950">
                Instructions
              </label>
              <textarea
                className={`${fieldClassName} min-h-32 resize-y`}
                {...register("instructions")}
                placeholder="Enter recipe instructions.."
              ></textarea>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-green-950">
                Category
              </label>
              <select
                className={fieldClassName}
                {...register("category")}
              >
                <option value="">Select a category</option>
                <option value="breakfast">Breakfast</option>
                <option value="lunch">Lunch</option>
                <option value="dinner">Dinner</option>
                <option value="dessert">Dessert</option>
              </select>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <button
              className="flex-1 rounded-xl bg-green-950 px-4 py-3 text-sm font-bold text-green-100 shadow-[0_14px_30px_rgba(20,83,45,0.24)] transition hover:-translate-y-0.5 active:scale-95"
            >
              Update Recipe
            </button>
            <button
              type="button"
              onClick={deleteHandler}
              className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-bold text-red-600 transition hover:-translate-y-0.5 active:scale-95"
            >
              Delete Recipe
            </button>
          </div>
        </form>
      </div>
    </section>
  ) : (
    "Loading..."
  );
};

export default RecipeDetails;
