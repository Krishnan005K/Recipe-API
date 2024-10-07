// src/components/RecipeModal.js

import React, { useEffect, useState } from 'react';
import './RecipeModal.css';

const RecipeModal = ({ recipeId, onClose }) => {
  const [recipeDetails, setRecipeDetails] = useState(null);
  const [similarRecipes, setSimilarRecipes] = useState([]);
  const [tasteInfo, setTasteInfo] = useState(null);
  const apiKey = '2202b5074d7547e68f56e04dddea9646';

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      if (!recipeId) return;  // Ensure recipeId is available before making the call
      const response = await fetch(`https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${apiKey}`);
      const data = await response.json();
      setRecipeDetails(data);

      // Fetch similar recipes and taste info only after getting recipe details
      if (data.id) {
        fetchSimilarRecipes(data.id);
        fetchTasteInfo(data.id);
      }
    };

    const fetchSimilarRecipes = async (id) => {
      const response = await fetch(`https://api.spoonacular.com/recipes/${id}/similar?apiKey=${apiKey}`);
      const data = await response.json();
      setSimilarRecipes(data);
    };

    const fetchTasteInfo = async (id) => {
      const response = await fetch(`https://api.spoonacular.com/recipes/${id}/tasteWidget.json?apiKey=${apiKey}`);
      const data = await response.json();
      setTasteInfo(data);
    };

    fetchRecipeDetails();
  }, [recipeId]);  // The useEffect will run every time the recipeId changes

  if (!recipeDetails) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{recipeDetails.title}</h2>
        <img src={recipeDetails.image} alt={recipeDetails.title} />
        <h3>Ingredients:</h3>
        <ul>
          {recipeDetails.extendedIngredients.map(ingredient => (
            <li key={ingredient.id}>{ingredient.original}</li>
          ))}
        </ul>
        <h3>Instructions:</h3>
        <p>{recipeDetails.instructions || "No instructions available."}</p>
        <h3>Nutritional Information:</h3>
        <p>Calories: {recipeDetails.nutrition?.nutrients[0]?.amount} kcal</p>
        <p>Protein: {recipeDetails.nutrition?.nutrients[1]?.amount} g</p>
        <p>Fat: {recipeDetails.nutrition?.nutrients[2]?.amount} g</p>
        <p>Carbohydrates: {recipeDetails.nutrition?.nutrients[3]?.amount} g</p>

        {/* Taste Information */}
        {tasteInfo && (
          <div>
            <h3>Taste Profile:</h3>
            <p>Sweetness: {tasteInfo.sweet}</p>
            <p>Saltiness: {tasteInfo.salty}</p>
            <p>Sourness: {tasteInfo.sour}</p>
            <p>Bitterness: {tasteInfo.bitter}</p>
            <p>Savory: {tasteInfo.savory}</p>
            <p>Fatty: {tasteInfo.fatty}</p>
            <p>Spiciness: {tasteInfo.spiciness}</p>
          </div>
        )}

        {/* Similar Recipes */}
        {similarRecipes.length > 0 && (
          <div>
            <h3>Similar Recipes:</h3>
            <div className="recipe-list">
              {similarRecipes.map(similarRecipe => (
                <div key={similarRecipe.id}>
                  <h4>{similarRecipe.title}</h4>
                  <img src={similarRecipe.image} alt={similarRecipe.title} />
                </div>
              ))}
            </div>
          </div>
        )}
        
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default RecipeModal;
