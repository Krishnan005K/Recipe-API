// src/components/RecipeList.js
import React from 'react';
import RecipeCard from './RecipeCard';

const RecipeList = ({ recipes, handleRecipeClick }) => {
  return (
    <div className="recipe-list">
      {recipes.map(recipe => (
        <RecipeCard
          key={recipe.id}
          recipe={recipe}
          onClick={() => handleRecipeClick(recipe.id)}  // Ensure onClick is passed correctly
        />
      ))}
    </div>
  );
};

export default RecipeList;
