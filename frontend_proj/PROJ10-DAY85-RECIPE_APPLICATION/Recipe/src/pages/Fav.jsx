import React, { useState } from "react";
import { Link } from "react-router-dom";

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

const FavouriteCard = ({ recipe, onRemove }) => {
  const description = recipe.description || "No description added yet.";

  return (
    <Link
      to={`/recipes/details/${recipe.id}`}
      className="group block rounded-[28px] border border-green-100/80 bg-green-50/85 p-4 shadow-[0_14px_30px_rgba(22,101,52,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_34px_rgba(22,101,52,0.14)]"
    >
      <div className="relative overflow-hidden rounded-3xl">
        <img
          className="h-60 w-full object-cover transition duration-500 group-hover:scale-105"
          src={recipe.image}
          alt={recipe.title}
        />

        <button
          type="button"
          onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();
            onRemove(recipe.id);
          }}
          className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-white/92 text-2xl text-red-400 shadow-[0_10px_20px_rgba(15,23,42,0.16)] transition hover:scale-105"
        >
          <i className="ri-poker-hearts-fill" />
        </button>
      </div>

      <div className="mt-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="inline-flex rounded-full bg-green-100 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-green-700">
              {recipe.category || "Uncategorized"}
            </p>
            <h2 className="mt-3 text-xl font-extrabold text-gray-800">{recipe.title}</h2>
            <p className="mt-1 text-sm font-bold text-green-800/75">
              {recipe.chef || "Chef not added"}
            </p>
          </div>

          <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-green-950 text-xl text-green-100">
            <i className="ri-restaurant-line" />
          </div>
        </div>

        <p className="mt-4 text-sm font-semibold leading-7 text-gray-600">
          {description.length > 120 ? `${description.slice(0, 120)}...` : description}
        </p>

        <div className="mt-5 flex items-center justify-between text-sm font-extrabold tracking-[0.08em] text-green-900">
          <span>OPEN RECIPE</span>
          <i className="ri-arrow-right-up-line text-lg transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </Link>
  );
};

const Fav = () => {
  const [favourites, setFavourites] = useState(
    JSON.parse(localStorage.getItem("fav") || "[]")
  );

  const uniqueChefs = new Set(favourites.map((recipe) => recipe.chef).filter(Boolean)).size;
  const uniqueCategories = new Set(
    favourites.map((recipe) => recipe.category).filter(Boolean)
  ).size;

  const removeFavourite = (id) => {
    const updatedFavourites = favourites.filter((recipe) => recipe.id != id);
    setFavourites(updatedFavourites);
    localStorage.setItem("fav", JSON.stringify(updatedFavourites));
  };

  const stats = [
    {
      label: "Favourite Recipes",
      value: favourites.length,
      icon: "ri-heart-3-line",
    },
    {
      label: "Saved Chefs",
      value: uniqueChefs,
      icon: "ri-user-smile-line",
    },
    {
      label: "Recipe Types",
      value: uniqueCategories,
      icon: "ri-leaf-line",
    },
  ];

  return (
    <section className="relative left-1/2 mt-8 w-screen -translate-x-1/2 overflow-hidden pb-10">
      <DoodleSketch />

      <div className="relative z-10 mx-auto w-full max-w-400 px-[10%]">
        <div className="relative overflow-hidden rounded-[34px] border border-green-100/70 bg-linear-to-br from-green-400 via-green-50 to-green-600 px-5 py-6 shadow-[0_24px_60px_rgba(22,101,52,0.16)] sm:px-8 sm:py-8 lg:px-12 lg:py-10">
          <div className="absolute -left-16 top-16 h-40 w-40 rounded-full bg-green-300/55 blur-3xl" />
          <div className="absolute bottom-10 right-10 h-52 w-52 rounded-full bg-emerald-200/45 blur-3xl" />
          <div className="absolute right-10 top-10 hidden h-24 w-24 rounded-full border-8 border-green-100/60 bg-green-200/60 lg:block" />

          <div className="relative z-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
                  Favourite Collection
                </p>
                <h1 className="mt-2 text-3xl font-extrabold text-gray-800 sm:text-4xl">
                  The recipes you want close by every time you cook
                </h1>
                <p className="mt-4 max-w-2xl text-sm font-semibold leading-7 text-gray-600 sm:text-base">
                  Keep your most-loved dishes in one place, revisit them quickly, and remove
                  anything that no longer belongs in your regular kitchen rotation.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-3 lg:w-105">
                {stats.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[22px] border border-green-100/80 bg-green-50/75 p-4 shadow-[0_10px_24px_rgba(22,101,52,0.08)]"
                  >
                    <div className="mb-3 grid h-11 w-11 place-items-center rounded-2xl bg-green-950 text-xl text-green-100">
                      <i className={item.icon} />
                    </div>
                    <h2 className="text-3xl font-extrabold text-gray-800">{item.value}</h2>
                    <p className="mt-1 text-sm font-semibold text-gray-600">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {favourites.length > 0 ? (
              <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {favourites.map((recipe) => (
                  <FavouriteCard
                    key={recipe.id}
                    recipe={recipe}
                    onRemove={removeFavourite}
                  />
                ))}
              </div>
            ) : (
              <div className="mt-10 rounded-[30px] border border-dashed border-green-300 bg-green-50/75 px-6 py-14 text-center shadow-[0_12px_26px_rgba(22,101,52,0.08)]">
                <div className="mx-auto grid h-18 w-18 place-items-center rounded-full bg-green-100 text-4xl text-green-700">
                  <i className="ri-heart-3-line" />
                </div>
                <h2 className="mt-5 text-3xl font-extrabold text-gray-800">
                  No favourite recipes yet
                </h2>
                <p className="mt-3 text-sm font-semibold leading-7 text-gray-600 sm:text-base">
                  Start marking recipes you love so they stay easy to find when you want a quick,
                  trusted meal idea.
                </p>

                <div className="mt-7 flex flex-wrap justify-center gap-3">
                  <Link
                    to="/recipes"
                    className="inline-flex items-center rounded-2xl bg-green-950 px-6 py-3 text-sm font-extrabold tracking-[0.08em] text-green-100 shadow-[0_18px_30px_rgba(20,83,45,0.24)] transition hover:-translate-y-0.5"
                  >
                    BROWSE RECIPES
                  </Link>
                  <Link
                    to="/create-recipe"
                    className="inline-flex items-center rounded-2xl border border-green-300 bg-green-50/90 px-6 py-3 text-sm font-extrabold tracking-[0.08em] text-green-900 transition hover:-translate-y-0.5"
                  >
                    CREATE ONE
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fav;
