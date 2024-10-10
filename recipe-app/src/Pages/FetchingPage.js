// src/pages/FetchingPage.js

import React, { useState } from 'react';
import RecipeList from '../components/RecipeList';
import RecipeModal from '../components/RecipeModal';
import './FetchingPage.css';

const FetchingPage = () => {
  const [ingredients, setIngredients] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipeId, setSelectedRecipeId] = useState(null);
  const apiKey = '2202b5074d7547e68f56e04dddea9646';

  const getRecipes = async () => {
    if (!ingredients) return;
    const response = await fetch(
      `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&apiKey=${apiKey}`
    );
    const data = await response.json();
    setRecipes(data);
  };

  return (
    <div className="fetching-container">
      <h1>Find Recipes by Ingredients</h1>
      <input
        type="text"
        placeholder="Enter ingredients"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
      />
      <button onClick={getRecipes}>Search</button>

      {/* Render Recipe List */}
      {recipes.length > 0 && (
        <RecipeList recipes={recipes} onRecipeClick={setSelectedRecipeId} />
      )}

      {/* Render Modal if a recipe is selected */}
      {selectedRecipeId && (
        <RecipeModal recipeId={selectedRecipeId} onClose={() => setSelectedRecipeId(null)} />
      )}
    </div>
  );
};

export default FetchingPage;
 new 