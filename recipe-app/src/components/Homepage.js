import React, { useState, useEffect } from 'react';
import '../assets/styles/Homepage.css'; // Import CSS for styling
import Navbar from './Navbar';
import SearchBar from './SearchBar';
import RecipeCard from './RecipeCard';

const HomePage = () => {
  const APP_ID = "f643af62";
  const APP_KEY = "2a8e753613ccb01b4d26d9716e1b971d";
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
  };

  return (
    <div>
      <Navbar />
      <SearchBar search={search} setSearch={setSearch} setQuery={setQuery} />
      <section className="recipe-section">
        <div className="recipe-container">
          {recipes.map(recipe => (
            <RecipeCard key={recipe.recipe.label} recipe={recipe.recipe} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
