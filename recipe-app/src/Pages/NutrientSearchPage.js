// src/pages/NutrientSearchPage.js

import React, { useState } from 'react';
import RecipeList from '../components/RecipeList';

const NutrientSearchPage = () => {
  const [recipes, setRecipes] = useState([]);
  const [calories, setCalories] = useState('');
  const [protein, setProtein] = useState('');
  const apiKey = '2202b5074d7547e68f56e04dddea9646';

  const searchRecipes = async () => {
    const response = await fetch(`https://api.spoonacular.com/recipes/findByNutrients?apiKey=${apiKey}&maxCalories=${calories}&maxProtein=${protein}`);
    const data = await response.json();
    setRecipes(data);
  };

  return (
    <div>
      <h1>Search Recipes by Nutrients</h1>
      <input
        type="number"
        placeholder="Max Calories"
        value={calories}
        onChange={(e) => setCalories(e.target.value)}
      />
      <input
        type="number"
        placeholder="Max Protein (g)"
        value={protein}
        onChange={(e) => setProtein(e.target.value)}
      />
      <button onClick={searchRecipes}>Search</button>

      {recipes.length > 0 && <RecipeList recipes={recipes} />}
    </div>
  );
};

export default NutrientSearchPage;
