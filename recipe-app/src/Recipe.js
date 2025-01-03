import React from "react";

const Recipe = ({ recipe }) => {
  return (
    <div className="p-4 md:w-1/3">
      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <img
          className="lg:h-48 md:h-36 w-full object-cover object-center"
          src={recipe.image}
          alt="blog"
        />
        <div className="p-6">
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
            {recipe.dishType[0]}
          </h2>
          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            {recipe.label}
          </h1>
          <p className="leading-relaxed mb-3">
            <b>Ingredients: </b> 
            {recipe.ingredientLines.map((ingredient)=>(
              <p>{ingredient}</p> 
            ))}
          </p>
          <div className="flex items-center flex-wrap ">
            <a
              href={recipe.url}
              className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
            >
              View Recipe
            </a>
            <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
              1.2K
            </span>
            <span className="text-gray-400 inline-flex items-center leading-none text-sm">
              6
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Recipe;