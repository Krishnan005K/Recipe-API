// src/pages/HomePage.js
import React, { useState } from 'react';
import RecipeList from '../components/RecipeList';
import RecipeModal from '../components/RecipeModal';

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);  // Assuming you have recipes data
  const [selectedRecipeId, setSelectedRecipeId] = useState(null);

  const handleRecipeClick = (id) => {
    setSelectedRecipeId(id);  // This will open the modal with the selected recipe
  };

  const closeModal = () => {
    setSelectedRecipeId(null);
  };

  return (
    <div>
      <h1> Your Recipe List</h1>
      <RecipeList recipes={recipes} handleRecipeClick={handleRecipeClick} />
      {selectedRecipeId && (
        <RecipeModal recipeId={selectedRecipeId} onClose={closeModal} />
      )}
    </div>
  );
};

export default HomePage;
