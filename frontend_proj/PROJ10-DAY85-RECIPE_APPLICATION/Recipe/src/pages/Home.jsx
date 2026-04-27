import React from 'react'
import { Link } from 'react-router-dom'

const featuredRecipes = [
  {
    title: 'Creamy Meatballs & Pasta',
    image:
      'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=500&q=80',
    meals: '22 Meals',
    prep: '16 Recipes',
    calories: '211 Calories',
  },
  {
    title: 'Sweet And Spicy Barbecue Wings',
    image:
      'https://images.unsplash.com/photo-1562967916-eb82221dfb92?auto=format&fit=crop&w=500&q=80',
    meals: '24 Meals',
    prep: '18 Recipes',
    calories: '400 Calories',
  },
  {
    title: 'Fresh Pesto Pasta With Peas',
    image:
      'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=500&q=80',
    meals: '12 Meals',
    prep: '10 Recipes',
    calories: '391 Calories',
  },
  {
    title: 'Grilled Garlic Chicken & Veggies',
    image:
      'https://images.unsplash.com/photo-1604908176997-4311d7b7e090?auto=format&fit=crop&w=500&q=80',
    meals: '26 Meals',
    prep: '24 Recipes',
    calories: '344 Calories',
  },
  {
    title: 'Shrimp Salad With Lettuce Corn',
    image:
      'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=500&q=80',
    meals: '18 Meals',
    prep: '16 Recipes',
    calories: '224 Calories',
  },
  {
    title: 'Stir-Fried Egg With Thai Basil And Chile',
    image:
      'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=500&q=80',
    meals: '20 Meals',
    prep: '22 Recipes',
    calories: '337 Calories',
  },
]

const heroStats = [
  {
    label: 'Healthy Recipes',
    value: '650K+',
    icon: 'ri-restaurant-2-line',
  },
  {
    label: 'Daily Fresh Picks',
    value: '120+',
    icon: 'ri-leaf-line',
  },
  {
    label: 'Happy Food Lovers',
    value: '98%',
    icon: 'ri-heart-3-line',
  },
]

const FeatureCard = ({ recipe }) => {
  const stats = [
    { icon: 'ri-checkbox-blank-circle-fill', color: 'text-rose-400', value: recipe.meals },
    { icon: 'ri-book-open-line', color: 'text-green-600', value: recipe.prep },
    { icon: 'ri-fire-fill', color: 'text-emerald-500', value: recipe.calories },
  ]

  return (
    <article className="relative overflow-hidden rounded-3xl border border-green-100/70 bg-green-50/80 p-4 shadow-[0_14px_30px_rgba(22,101,52,0.12)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_34px_rgba(22,101,52,0.16)]">
      <div className="flex items-start justify-between gap-3">
        <div className="max-w-42.5">
          <h3 className="text-sm font-extrabold leading-5 text-gray-800 sm:text-[15px]">
            {recipe.title}
          </h3>

          <div className="mt-3 space-y-2">
            {stats.map((stat) => (
              <p key={stat.value} className="flex items-center gap-2 text-xs font-semibold text-gray-600">
                <i className={`${stat.icon} ${stat.color} text-sm`} />
                <span>{stat.value}</span>
              </p>
            ))}
          </div>
        </div>

        <div className="relative shrink-0">
          <div className="absolute inset-0 rounded-full bg-green-200 blur-lg" />
          <img
            className="relative h-20 w-20 rounded-full border-[6px] border-white object-cover shadow-md sm:h-24 sm:w-24"
            src={recipe.image}
            alt={recipe.title}
            loading="lazy"
          />
        </div>
      </div>

      <button
        type="button"
        aria-label={`View ${recipe.title}`}
        className="absolute bottom-4 right-4 grid h-8 w-8 place-items-center rounded-full bg-green-950 text-sm text-green-100 shadow-[0_10px_20px_rgba(20,83,45,0.28)]"
      >
        <i className="ri-add-line" />
      </button>
    </article>
  )
}

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

const Home = () => {
  return (
    <section className="relative left-1/2 mt-8 w-screen -translate-x-1/2 overflow-hidden pb-10">
      <DoodleSketch />

      <div className="relative z-10 mx-auto w-full max-w-400 px-[10%]">
        <div className="relative isolate overflow-hidden rounded-[34px] border border-green-100/70 bg-linear-to-br from-green-400 via-green-50 to-green-600 px-5 py-6 shadow-[0_24px_60px_rgba(22,101,52,0.16)] sm:px-8 sm:py-8 lg:px-12 lg:py-10">
          <div className="absolute -left-16 top-16 h-40 w-40 rounded-full bg-green-300/55 blur-3xl" />
          <div className="absolute bottom-10 right-10 h-52 w-52 rounded-full bg-emerald-200/45 blur-3xl" />
          <div className="absolute right-10 top-10 hidden h-24 w-24 rounded-full border-8 border-green-100/60 bg-green-200/60 lg:block" />
          <div className="absolute bottom-18 left-12 hidden h-20 w-20 rounded-full bg-green-300/40 blur-2xl lg:block" />

          <div className="relative z-10 grid gap-10 xl:grid-cols-[1.1fr_0.9fr] xl:items-center">
            <div className="max-w-190">
              <p className="inline-flex items-center rounded-full border border-green-300 bg-green-100/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.28em] text-green-800">
                Fresh Daily Recipes
              </p>

              <h1 className="mt-6 max-w-185 text-[2.4rem] font-extrabold leading-[1.05] tracking-[-0.04em] text-gray-800 sm:text-5xl lg:text-[4rem]">
                Healthy Cooking Recipes and the right Nutrition.
              </h1>

              <p className="mt-5 max-w-xl text-sm font-semibold text-gray-600 sm:text-base">
                Browse Through Your close people's Tasty Recipes.
              </p>

              <div className="mt-7 flex flex-wrap gap-4">
                <Link
                  to="/recipes"
                  className="inline-flex items-center rounded-2xl bg-green-950 px-7 py-3 text-sm font-extrabold tracking-[0.08em] text-green-100 shadow-[0_18px_30px_rgba(20,83,45,0.24)] transition hover:-translate-y-0.5"
                >
                  MORE RECIPES
                </Link>

                <Link
                  to="/fav"
                  className="inline-flex items-center rounded-2xl border border-green-300 bg-green-50/80 px-7 py-3 text-sm font-extrabold tracking-[0.08em] text-green-900 transition hover:-translate-y-0.5"
                >
                  FAVOURITES
                </Link>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {heroStats.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[22px] border border-green-100/80 bg-green-50/75 p-4 shadow-[0_10px_24px_rgba(22,101,52,0.08)]"
                  >
                    <div className="mb-3 grid h-11 w-11 place-items-center rounded-2xl bg-green-950 text-xl text-green-100">
                      <i className={item.icon} />
                    </div>
                    <h2 className="text-2xl font-extrabold text-gray-800">{item.value}</h2>
                    <p className="mt-1 text-sm font-semibold text-gray-600">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mx-auto flex min-h-80 w-full max-w-130 items-center justify-center sm:min-h-105 lg:min-h-125">
              <div className="absolute h-70 w-70 rounded-full border-18 border-green-100/80 bg-green-100/30 sm:h-90 sm:w-90 lg:h-107.5 lg:w-107.5" />
              <div className="absolute h-80 w-80 rounded-full border border-green-300/60 sm:h-100 sm:w-100 lg:h-122.5 lg:w-122.5" />

              <div className="relative h-65 w-65 overflow-hidden rounded-full border-14 border-green-50 shadow-[0_24px_60px_rgba(22,101,52,0.24)] sm:h-85 sm:w-85 lg:h-102.5 lg:w-102.5">
                <img
                  className="h-full w-full scale-110 object-cover"
                  src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1000&q=80"
                  alt="Healthy recipe bowl"
                />
              </div>

              <div className="absolute left-2 top-8 hidden rounded-[22px] border border-green-100 bg-green-50/95 px-4 py-3 shadow-[0_16px_28px_rgba(22,101,52,0.12)] md:block">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-green-700">Balanced Meals</p>
                <p className="mt-1 text-sm font-extrabold text-gray-800">Protein, greens and good carbs</p>
              </div>

              <div className="absolute bottom-8 right-0 hidden rounded-[22px] border border-green-100 bg-green-50/95 px-4 py-3 shadow-[0_16px_28px_rgba(22,101,52,0.12)] md:block">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-green-700">Chef Choice</p>
                <p className="mt-1 text-sm font-extrabold text-gray-800">Easy recipes for every day</p>
              </div>

              <div className="absolute -right-1 top-18 hidden h-16 w-16 rounded-full bg-green-950 text-green-100 shadow-[0_18px_30px_rgba(20,83,45,0.24)] lg:grid lg:place-items-center">
                <i className="ri-leaf-fill text-2xl" />
              </div>
              <div className="absolute -left-3 bottom-16 hidden h-14 w-14 rounded-full bg-green-50 text-green-800 shadow-[0_18px_30px_rgba(20,83,45,0.16)] lg:grid lg:place-items-center">
                <i className="ri-heart-pulse-fill text-xl" />
              </div>
            </div>
          </div>

          <div className="relative z-10 mt-12">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">Featured Picks</p>
                <h2 className="mt-2 text-3xl font-extrabold text-gray-800">
                  Tasty highlights in your current theme
                </h2>
              </div>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {featuredRecipes.map((recipe) => (
                <FeatureCard key={recipe.title} recipe={recipe} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
