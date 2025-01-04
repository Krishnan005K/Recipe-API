import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import RecipeCard from './RecipeCard';

const Recipe = () => {
  const [search, setSearch] = useState("curd");  // To store the search term
  const [recipes, setRecipes] = useState([]);  // To store the recipes data

  useEffect(() => {
    if (search) {
      const fetchRecipes = async () => {
        const APP_ID = "f643af62";
        const APP_KEY = "2a8e753613ccb01b4d26d9716e1b971d";

        const response = await fetch(
          `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`
        );
        const data = await response.json();
        setRecipes(data.hits);  // Set the recipes data
      };
      fetchRecipes();
    }
  }, [search]);

  return (
    <div>
      <SearchBar search={search} setSearch={setSearch} />
      <div className="recipe-container">
        {recipes.map((hit) => (
          <RecipeCard key={hit.recipe.label} recipe={hit.recipe} />
        ))}
      </div>
    </div>
  );
};

export default Recipe;






