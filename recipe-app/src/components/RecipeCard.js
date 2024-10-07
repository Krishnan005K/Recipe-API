// src/components/RecipeCard.js
import React from 'react';
import './RecipeCard.css';

const RecipeCard = ({ recipe, onClick }) => {
  return (
    <div className="recipe-card" onClick={onClick}>
      <img src={recipe.image} alt={recipe.title} />
      <h3>{recipe.title}</h3>
    </div>
  );
};

export default RecipeCard;
