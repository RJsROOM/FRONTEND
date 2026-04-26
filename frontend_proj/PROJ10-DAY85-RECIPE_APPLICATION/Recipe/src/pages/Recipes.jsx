import React, { useContext } from 'react'
import { recipecontext } from '../context/RecipeContext'
import RecipeCard from '../components/RecipeCard'

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
        <path d="M42 180C53 169 69 164 87 166" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
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
        <path
          d="M250 13V37"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>

      <svg
        className="absolute bottom-20 right-[7%] hidden h-36 w-36 text-green-800/15 xl:block"
        viewBox="0 0 180 180"
        fill="none"
      >
        <path
          d="M49 127C63 93 86 66 124 54C141 48 160 51 164 68C168 85 151 98 135 104C116 112 95 115 79 127C63 139 54 154 53 168"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M81 40C96 49 114 53 134 52"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M24 77C37 69 51 67 67 69"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <circle cx="39" cy="36" r="10" stroke="currentColor" strokeWidth="4" />
      </svg>
    </div>
  )
}

const Recipes = () => {
  const {data}= useContext(recipecontext)

  const renderRecipes= data.map((recipe)=>(
    <RecipeCard key={recipe.id} recipe={recipe} />
  ))

  return (
    <section className="relative left-1/2 mt-8 w-screen -translate-x-1/2 overflow-hidden pb-10">
      <DoodleSketch />

      <div className="relative z-10 mx-auto w-full max-w-400 px-[10%]">
        <div className="relative overflow-hidden rounded-[34px] border border-green-100/70 bg-linear-to-br from-green-400 via-green-50 to-green-600 px-5 py-6 shadow-[0_24px_60px_rgba(22,101,52,0.16)] sm:px-8 sm:py-8 lg:px-12 lg:py-10">
          <div className="absolute -left-16 top-16 h-40 w-40 rounded-full bg-green-300/55 blur-3xl" />
          <div className="absolute bottom-10 right-10 h-52 w-52 rounded-full bg-emerald-200/45 blur-3xl" />
          <div className="absolute right-10 top-10 hidden h-24 w-24 rounded-full border-8 border-green-100/60 bg-green-200/60 lg:block" />

          <div className="relative z-10">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">Recipe Collection</p>
                <h1 className="mt-2 text-3xl font-extrabold text-gray-800 sm:text-4xl">
                  Explore all your saved recipes
                </h1>
              </div>

              <div className="rounded-[22px] border border-green-100/80 bg-green-50/75 px-5 py-4 shadow-[0_10px_24px_rgba(22,101,52,0.08)] sm:min-w-55">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-green-700">Total Recipes</p>
                <p className="mt-2 text-4xl font-extrabold text-gray-800">{data.length}</p>
              </div>
            </div>

            {data.length > 0 ? (
              <div className="mt-10 flex flex-wrap gap-4">
                {renderRecipes}
              </div>
            ) : (
              <div className="mt-10 rounded-[28px] border border-dashed border-green-300 bg-green-50/70 px-6 py-14 text-center shadow-[0_10px_24px_rgba(22,101,52,0.08)]">
                <i className="ri-restaurant-line text-4xl text-green-700" />
                <h2 className="mt-4 text-2xl font-extrabold text-gray-800">No recipes found</h2>
                <p className="mt-2 text-sm font-semibold text-gray-600">
                  Add your first recipe to start building your collection.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Recipes
