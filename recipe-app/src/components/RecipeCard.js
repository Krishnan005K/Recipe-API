import React, { useState } from 'react';
import '../assets/styles/RecipeCard.css'; // Import CSS for styling

const RecipeCard = ({ recipe }) => {
  const [ingredientLimit, setIngredientLimit] = useState(3);

  // Filter ingredients by the limit
  const limitedIngredients = recipe.ingredientLines.slice(0, ingredientLimit);

  return (
    <div className="recipe-card">
      <div className="recipe-card-container">
        <img className="recipe-image" src={recipe.image} alt="recipe" />
        <div className="recipe-details">
          <h2 className="recipe-type">{recipe.dishType[0]}</h2>
          <h1 className="recipe-title">{recipe.label}</h1>
          
          <p className="recipe-ingredients">
            <b>Ingredients:</b>
            {limitedIngredients.map((ingredient, index) => (
              <p key={index}>{ingredient}</p>
            ))}
            {/* Show "View More" if there are more than 4 ingredients */}
            {recipe.ingredientLines.length > ingredientLimit && (
              <button onClick={() => setIngredientLimit(recipe.ingredientLines.length)}>
                View More
              </button>
            )}
          </p>

          <div className="recipe-footer">
            <a href={recipe.url} target="_blank" className="recipe-link">View Recipe</a>
            <span className="recipe-rating">1.2K</span>
            <span className="recipe-comments">6</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
