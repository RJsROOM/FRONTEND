import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { recipecontext } from "../context/RecipeContext";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

const fieldClassName =
  "w-full rounded-2xl border border-green-200 bg-green-50/70 px-4 py-3 text-sm text-green-950 outline-none transition focus:border-green-600 focus:bg-white focus:ring-2 focus:ring-green-200";

const kitchenTips = [
  {
    title: "Write a clear title",
    description: "A simple, specific name makes the recipe easier to spot later in your collection.",
    icon: "ri-quill-pen-line",
  },
  {
    title: "Use easy instructions",
    description: "Break the method into short steps so the recipe is practical while cooking.",
    icon: "ri-file-list-3-line",
  },
  {
    title: "Add a strong image",
    description: "A good cover image gives the recipe a warm, finished feel in your recipe list.",
    icon: "ri-image-circle-line",
  },
];

const DoodleSketch = () => {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden opacity-80">
      <svg
        className="absolute -left-8 top-2 h-44 w-44 text-green-700/20 sm:h-56 sm:w-56"
        viewBox="0 0 220 220"
        fill="none"
      >
        <path
          d="M31 112C53 64 100 31 150 42C186 50 201 84 184 110C166 137 126 145 98 161C72 176 60 196 63 212"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M54 78C75 58 101 48 130 52"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M47 136C72 121 95 118 121 124"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <circle cx="166" cy="58" r="11" stroke="currentColor" strokeWidth="4" />
        <path d="M174 21V39" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
        <path d="M183 30H165" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      </svg>

      <svg
        className="absolute -right-10 top-22 hidden h-72 w-72 text-green-800/15 lg:block"
        viewBox="0 0 260 260"
        fill="none"
      >
        <path
          d="M120 28C93 55 86 94 98 136C106 165 103 195 84 226"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M96 77C127 67 153 48 171 20"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M101 110C138 108 171 92 197 62"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M108 142C145 145 177 134 208 107"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M100 168C130 180 163 183 198 174"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <circle cx="196" cy="42" r="14" stroke="currentColor" strokeWidth="4" />
      </svg>

      <svg
        className="absolute bottom-6 left-[8%] hidden h-32 w-64 text-green-700/15 md:block"
        viewBox="0 0 300 150"
        fill="none"
      >
        <path
          d="M19 89C53 48 112 33 160 46C208 58 234 96 218 118C202 140 165 139 136 126C108 114 89 95 67 95C47 94 29 109 31 130C33 141 42 149 58 150"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M230 28C244 40 260 47 279 50"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

const CreateRecipe = () => {
  const navigate = useNavigate();
  const { data, setData } = useContext(recipecontext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submitHandler = (recipe) => {
    recipe.id = nanoid();

    const copydata = [...data, recipe];
    setData(copydata);
    localStorage.setItem("recipes", JSON.stringify(copydata));
    toast.success("Recipe created successfully!");
    reset();
    navigate("/recipes");
  };

  const categories = new Set(data.map((recipe) => recipe.category).filter(Boolean)).size;

  return (
    <section className="relative left-1/2 mt-8 w-screen -translate-x-1/2 overflow-hidden pb-10">
      <DoodleSketch />

      <div className="relative z-10 mx-auto w-full max-w-400 px-[10%]">
        <div className="relative overflow-hidden rounded-[34px] border border-green-100/70 bg-linear-to-br from-green-400 via-green-50 to-green-600 px-5 py-6 shadow-[0_24px_60px_rgba(22,101,52,0.16)] sm:px-8 sm:py-8 lg:px-12 lg:py-10">
          <div className="absolute -left-16 top-16 h-40 w-40 rounded-full bg-green-300/55 blur-3xl" />
          <div className="absolute bottom-10 right-10 h-52 w-52 rounded-full bg-emerald-200/45 blur-3xl" />
          <div className="absolute right-10 top-10 hidden h-24 w-24 rounded-full border-8 border-green-100/60 bg-green-200/60 lg:block" />

          <div className="relative z-10 grid gap-8 xl:grid-cols-[0.95fr_1.05fr] xl:items-start">
            <div className="max-w-3xl">
              <p className="inline-flex items-center rounded-full border border-green-300 bg-green-100/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.28em] text-green-800">
                Create A Recipe
              </p>

              <h1 className="mt-6 text-[2.4rem] font-extrabold leading-[1.05] tracking-[-0.04em] text-gray-800 sm:text-5xl lg:text-[4rem]">
                Add a new dish to your collection with all the right details.
              </h1>

              <p className="mt-5 max-w-2xl text-sm font-semibold leading-7 text-gray-600 sm:text-base">
                Save chef notes, ingredients, instructions, and a strong image so every recipe feels
                complete when you come back to it later.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-[22px] border border-green-100/80 bg-green-50/75 p-4 shadow-[0_10px_24px_rgba(22,101,52,0.08)]">
                  <div className="mb-3 grid h-11 w-11 place-items-center rounded-2xl bg-green-950 text-xl text-green-100">
                    <i className="ri-bookmark-3-line" />
                  </div>
                  <h2 className="text-3xl font-extrabold text-gray-800">{data.length}</h2>
                  <p className="mt-1 text-sm font-semibold text-gray-600">Saved Recipes</p>
                </div>

                <div className="rounded-[22px] border border-green-100/80 bg-green-50/75 p-4 shadow-[0_10px_24px_rgba(22,101,52,0.08)]">
                  <div className="mb-3 grid h-11 w-11 place-items-center rounded-2xl bg-green-950 text-xl text-green-100">
                    <i className="ri-leaf-line" />
                  </div>
                  <h2 className="text-3xl font-extrabold text-gray-800">{categories}</h2>
                  <p className="mt-1 text-sm font-semibold text-gray-600">Categories Used</p>
                </div>

                <div className="rounded-[22px] border border-green-100/80 bg-green-50/75 p-4 shadow-[0_10px_24px_rgba(22,101,52,0.08)]">
                  <div className="mb-3 grid h-11 w-11 place-items-center rounded-2xl bg-green-950 text-xl text-green-100">
                    <i className="ri-restaurant-2-line" />
                  </div>
                  <h2 className="text-3xl font-extrabold text-gray-800">New</h2>
                  <p className="mt-1 text-sm font-semibold text-gray-600">Recipe Draft</p>
                </div>
              </div>

              <div className="mt-8 space-y-4">
                {kitchenTips.map((tip) => (
                  <article
                    key={tip.title}
                    className="rounded-[24px] border border-green-100/80 bg-green-50/80 p-5 shadow-[0_12px_26px_rgba(22,101,52,0.08)]"
                  >
                    <div className="grid h-11 w-11 place-items-center rounded-2xl bg-green-950 text-xl text-green-100">
                      <i className={tip.icon} />
                    </div>
                    <h2 className="mt-4 text-lg font-extrabold text-gray-800">{tip.title}</h2>
                    <p className="mt-2 text-sm font-semibold leading-7 text-gray-600">
                      {tip.description}
                    </p>
                  </article>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/recipes"
                  className="inline-flex items-center rounded-2xl bg-green-950 px-6 py-3 text-sm font-extrabold tracking-[0.08em] text-green-100 shadow-[0_18px_30px_rgba(20,83,45,0.24)] transition hover:-translate-y-0.5"
                >
                  VIEW RECIPES
                </Link>
                <Link
                  to="/fav"
                  className="inline-flex items-center rounded-2xl border border-green-300 bg-green-50/90 px-6 py-3 text-sm font-extrabold tracking-[0.08em] text-green-900 transition hover:-translate-y-0.5"
                >
                  FAVOURITES
                </Link>
              </div>
            </div>

            <div className="rounded-[30px] border border-green-100/80 bg-white/92 p-5 shadow-[0_20px_48px_rgba(22,101,52,0.14)] backdrop-blur-sm sm:p-6 lg:p-7">
              <div className="border-b border-green-100 pb-5">
                <p className="text-xs font-black uppercase tracking-[0.24em] text-green-700">
                  Recipe Form
                </p>
                <h2 className="mt-2 text-3xl font-extrabold text-gray-800">
                  Fill in the delicious details
                </h2>
                <p className="mt-2 text-sm font-semibold leading-7 text-gray-600">
                  Keep ingredients and instructions on separate lines if you want them to read more
                  clearly in the recipe details view.
                </p>
              </div>

              <form onSubmit={handleSubmit(submitHandler)} className="mt-6 space-y-5">
                <div>
                  <label className="mb-2 block text-sm font-bold text-green-950">
                    Chef Name
                  </label>
                  <input
                    className={fieldClassName}
                    type="text"
                    placeholder="Enter Chef Name"
                    {...register("chef", { required: "Chef name is required." })}
                  />
                  <p className="mt-2 text-xs font-semibold text-red-600">
                    {errors.chef?.message || "Add the name behind this recipe."}
                  </p>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-green-950">
                    Recipe Title
                  </label>
                  <input
                    className={fieldClassName}
                    type="text"
                    placeholder="Enter Recipe Title"
                    {...register("title", { required: "Recipe title is required." })}
                  />
                  <p className="mt-2 text-xs font-semibold text-red-600">
                    {errors.title?.message || "Choose a title that is easy to recognise later."}
                  </p>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-green-950">
                    Image URL
                  </label>
                  <input
                    className={fieldClassName}
                    type="url"
                    placeholder="Enter image url.."
                    {...register("image", { required: "Image URL is required." })}
                  />
                  <p className="mt-2 text-xs font-semibold text-red-600">
                    {errors.image?.message || "Use a clear image so the recipe stands out visually."}
                  </p>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-green-950">
                    Description
                  </label>
                  <textarea
                    className={`${fieldClassName} min-h-30 resize-y`}
                    placeholder="Enter recipe description.."
                    {...register("description", {
                      required: "Recipe description is required.",
                    })}
                  ></textarea>
                  <p className="mt-2 text-xs font-semibold text-red-600">
                    {errors.description?.message || "Share what makes this dish worth cooking."}
                  </p>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-green-950">
                    Ingredients
                  </label>
                  <textarea
                    className={`${fieldClassName} min-h-32 resize-y`}
                    placeholder="Enter recipe ingredients.."
                    {...register("ingredients", {
                      required: "Ingredients are required.",
                    })}
                  ></textarea>
                  <p className="mt-2 text-xs font-semibold text-red-600">
                    {errors.ingredients?.message || "List each ingredient on a new line if possible."}
                  </p>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-green-950">
                    Instructions
                  </label>
                  <textarea
                    className={`${fieldClassName} min-h-36 resize-y`}
                    placeholder="Enter recipe instructions.."
                    {...register("instructions", {
                      required: "Instructions are required.",
                    })}
                  ></textarea>
                  <p className="mt-2 text-xs font-semibold text-red-600">
                    {errors.instructions?.message || "Keep the method simple and step-by-step."}
                  </p>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-green-950">
                    Category
                  </label>
                  <select
                    className={fieldClassName}
                    {...register("category", {
                      required: "Please select a category.",
                    })}
                  >
                    <option value="">Select a category</option>
                    <option value="breakfast">Breakfast</option>
                    <option value="lunch">Lunch</option>
                    <option value="dinner">Dinner</option>
                    <option value="dessert">Dessert</option>
                  </select>
                  <p className="mt-2 text-xs font-semibold text-red-600">
                    {errors.category?.message || "Choose where this recipe belongs in your menu."}
                  </p>
                </div>

                <button className="mt-2 block w-full rounded-2xl bg-green-950 px-5 py-3.5 text-sm font-extrabold tracking-[0.08em] text-green-100 shadow-[0_18px_30px_rgba(20,83,45,0.24)] transition hover:-translate-y-0.5 active:scale-95">
                  SAVE RECIPE
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateRecipe;
