import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // Use useLocation for accessing the search term
import SearchBar from './SearchBar';
import NutritionCard from './NutritionCard';

const Nutrition = () => {
  const [search, setSearch] = useState("");  // To store the search term
  const [nutrition, setNutrition] = useState(null);  // To store the nutrition data

  const handleSearch = async () => {
    const NUTRITION_APP_ID = "0937d2f2";
    const NUTRITION_APP_KEY = "008d0f3491cc0e959c5a148796989d83";

    const response = await fetch(
      `https://api.edamam.com/api/food-database/v2/nutrients`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-EDAMAM-API-KEY": NUTRITION_APP_KEY,
          "X-EDAMAM-API-ID": NUTRITION_APP_ID,
        },
        body: JSON.stringify({
          ingredients: [{ quantity: 1, measureURI: "http://www.edamam.com/ontologies/edamam.owl#Measure_kg", foodId: search }],
        }),
      }
    );
    const data = await response.json();
    setNutrition(data);  // Set the nutrition data
  };

  return (
    <div>
      <SearchBar search={search} setSearch={setSearch} />
      <button onClick={handleSearch}>Get Nutrition</button>
      {nutrition && <NutritionCard nutrition={nutrition} />}
    </div>
  );
};

export default Nutrition;
