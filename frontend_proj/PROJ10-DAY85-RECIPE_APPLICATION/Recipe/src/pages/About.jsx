import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { recipecontext } from "../context/RecipeContext";

const aboutValues = [
  {
    title: "Collect the recipes that matter",
    description:
      "Keep family favourites, quick weeknight meals, and special occasion dishes together in one calm space.",
    icon: "ri-book-open-line",
  },
  {
    title: "Cook with more confidence",
    description:
      "Clear ingredients, simple instructions, and organised details make every recipe easier to revisit.",
    icon: "ri-restaurant-2-line",
  },
  {
    title: "Build your own kitchen routine",
    description:
      "Save what you love, edit what you learn, and keep improving your recipe collection over time.",
    icon: "ri-heart-3-line",
  },
];

const recipeFlow = [
  {
    title: "Create and save",
    description: "Add recipes with chef notes, ingredients, instructions, and a clean image preview.",
    icon: "ri-add-circle-line",
  },
  {
    title: "Browse with ease",
    description: "Look through your collection in a layout that keeps every dish easy to spot and open.",
    icon: "ri-search-eye-line",
  },
  {
    title: "Update anytime",
    description: "Refine descriptions, swap images, and keep each recipe current as your cooking evolves.",
    icon: "ri-edit-2-line",
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
    </div>
  );
};

const About = () => {
  const { data } = useContext(recipecontext);
  const favourites = JSON.parse(localStorage.getItem("fav") || "[]");
  const categories = new Set(data.map((recipe) => recipe.category).filter(Boolean));

  const stats = [
    {
      label: "Saved Recipes",
      value: data.length,
      icon: "ri-bookmark-3-line",
    },
    {
      label: "Favourite Picks",
      value: favourites.length,
      icon: "ri-heart-pulse-line",
    },
    {
      label: "Recipe Categories",
      value: categories.size,
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
          <div className="absolute bottom-18 left-12 hidden h-20 w-20 rounded-full bg-green-300/40 blur-2xl lg:block" />

          <div className="relative z-10 space-y-10">
            <div className="grid gap-8 xl:grid-cols-[1.08fr_0.92fr] xl:items-center">
              <div className="max-w-3xl">
                <p className="inline-flex items-center rounded-full border border-green-300 bg-green-100/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.28em] text-green-800">
                  About Our Kitchen Space
                </p>

                <h1 className="mt-6 max-w-4xl text-[2.4rem] font-extrabold leading-[1.05] tracking-[-0.04em] text-gray-800 sm:text-5xl lg:text-[4rem]">
                  A warm place to save the recipes you love and keep cooking simple.
                </h1>

                <p className="mt-5 max-w-2xl text-sm font-semibold leading-7 text-gray-600 sm:text-base">
                  This recipe app is built for everyday food lovers who want a clean and cozy
                  place to collect meals, organise kitchen ideas, and come back to favourite
                  dishes whenever inspiration strikes.
                </p>

                <div className="mt-7 flex flex-wrap gap-4">
                  <Link
                    to="/recipes"
                    className="inline-flex items-center rounded-2xl bg-green-950 px-7 py-3 text-sm font-extrabold tracking-[0.08em] text-green-100 shadow-[0_18px_30px_rgba(20,83,45,0.24)] transition hover:-translate-y-0.5"
                  >
                    VIEW RECIPES
                  </Link>

                  <Link
                    to="/create-recipe"
                    className="inline-flex items-center rounded-2xl border border-green-300 bg-green-50/80 px-7 py-3 text-sm font-extrabold tracking-[0.08em] text-green-900 transition hover:-translate-y-0.5"
                  >
                    CREATE RECIPE
                  </Link>
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">
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

              <div className="relative mx-auto w-full max-w-140">
                <div className="absolute -top-6 left-8 hidden h-24 w-24 rounded-full bg-green-200/70 blur-2xl md:block" />
                <div className="absolute -bottom-8 right-6 hidden h-28 w-28 rounded-full bg-emerald-100/70 blur-2xl md:block" />

                <div className="relative overflow-hidden rounded-[32px] border border-green-100/80 bg-green-50/70 p-4 shadow-[0_20px_40px_rgba(22,101,52,0.16)]">
                  <div className="overflow-hidden rounded-[28px]">
                    <img
                      className="h-72 w-full object-cover sm:h-80 lg:h-96"
                      src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1200&q=80"
                      alt="Fresh ingredients arranged on a table"
                    />
                  </div>

                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-[24px] border border-green-100 bg-white/90 p-4 shadow-[0_10px_24px_rgba(22,101,52,0.08)]">
                      <p className="text-xs font-bold uppercase tracking-[0.24em] text-green-700">
                        Why It Feels Good
                      </p>
                      <p className="mt-2 text-sm font-semibold leading-7 text-gray-600">
                        Soft visuals, simple actions, and room for your own cooking story.
                      </p>
                    </div>

                    <div className="rounded-[24px] border border-green-100 bg-green-950 p-4 text-green-100 shadow-[0_16px_28px_rgba(20,83,45,0.2)]">
                      <p className="text-xs font-bold uppercase tracking-[0.24em] text-green-300">
                        Kitchen Note
                      </p>
                      <p className="mt-2 text-sm font-semibold leading-7">
                        Save the meals you trust, then keep improving them as you cook more often.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
              <article className="rounded-[28px] border border-green-100/80 bg-green-50/80 p-6 shadow-[0_14px_30px_rgba(22,101,52,0.08)] sm:p-7">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">Our Story</p>
                <h2 className="mt-2 text-3xl font-extrabold text-gray-800">
                  Built around personal recipes and everyday comfort.
                </h2>
                <p className="mt-4 text-sm font-semibold leading-7 text-gray-600 sm:text-base">
                  Not every recipe collection needs to feel crowded or complicated. This app focuses
                  on the essentials: your dishes, your edits, your favourites, and a layout that
                  makes each recipe easy to return to. Whether you are storing family classics or
                  experimenting with something new, the goal is to make the experience feel inviting
                  every time you open it.
                </p>
              </article>

              <div className="grid gap-4">
                {recipeFlow.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-[24px] border border-green-100/80 bg-white/85 p-5 shadow-[0_12px_26px_rgba(22,101,52,0.08)]"
                  >
                    <div className="grid h-11 w-11 place-items-center rounded-2xl bg-green-950 text-xl text-green-100">
                      <i className={item.icon} />
                    </div>
                    <h3 className="mt-4 text-lg font-extrabold text-gray-800">{item.title}</h3>
                    <p className="mt-2 text-sm font-semibold leading-7 text-gray-600">
                      {item.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">What We Value</p>
              <div className="mt-5 grid gap-4 md:grid-cols-3">
                {aboutValues.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-[28px] border border-green-100/80 bg-green-50/80 p-6 shadow-[0_14px_30px_rgba(22,101,52,0.08)]"
                  >
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-green-950 text-2xl text-green-100">
                      <i className={item.icon} />
                    </div>
                    <h3 className="mt-5 text-xl font-extrabold text-gray-800">{item.title}</h3>
                    <p className="mt-3 text-sm font-semibold leading-7 text-gray-600">
                      {item.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <div className="rounded-[30px] bg-green-950 px-6 py-7 text-green-100 shadow-[0_20px_48px_rgba(20,83,45,0.24)] sm:px-8">
              <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-3xl">
                  <p className="text-xs font-bold uppercase tracking-[0.28em] text-green-300">
                    Ready To Cook
                  </p>
                  <h2 className="mt-2 text-3xl font-extrabold">
                    Start building a recipe space that feels truly yours.
                  </h2>
                  <p className="mt-3 text-sm font-semibold leading-7 text-green-100/80">
                    Browse what you have already saved, add a new dish, or mark your favourites for
                    quick inspiration later.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link
                    to="/recipes"
                    className="inline-flex items-center rounded-2xl bg-green-100 px-6 py-3 text-sm font-extrabold tracking-[0.08em] text-green-950 transition hover:-translate-y-0.5"
                  >
                    EXPLORE
                  </Link>
                  <Link
                    to="/fav"
                    className="inline-flex items-center rounded-2xl border border-green-300/40 px-6 py-3 text-sm font-extrabold tracking-[0.08em] text-green-100 transition hover:-translate-y-0.5"
                  >
                    FAVOURITES
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
