import React from 'react';
import '../assets/styles/NutritionCard.css'; // Import CSS for styling

const NutritionCard = ({ nutrition }) => {
  if (!nutrition || !nutrition.totalNutrients) {
    return <p>No nutrition data available</p>;
  }

  const calories = nutrition.totalNutrients.ENERC_KCAL ? nutrition.totalNutrients.ENERC_KCAL.quantity : "N/A";
  const fat = nutrition.totalNutrients.FAT ? nutrition.totalNutrients.FAT.quantity : "N/A";
  const protein = nutrition.totalNutrients.PROCNT ? nutrition.totalNutrients.PROCNT.quantity : "N/A";
  const carbohydrates = nutrition.totalNutrients.CHOCDF ? nutrition.totalNutrients.CHOCDF.quantity : "N/A";
  const sugars = nutrition.totalNutrients.SUGAR ? nutrition.totalNutrients.SUGAR.quantity : "N/A";
  const fiber = nutrition.totalNutrients.FIBTG ? nutrition.totalNutrients.FIBTG.quantity : "N/A";

  return (
    <div className="nutrition-card">
      <h2>Nutrition Information</h2>
      <p><b>Calories:</b> {calories} kcal</p>
      <p><b>Fat:</b> {fat} g</p>
      <p><b>Protein:</b> {protein} g</p>
      <p><b>Carbohydrates:</b> {carbohydrates} g</p>
      <p><b>Sugars:</b> {sugars} g</p>
      <p><b>Fiber:</b> {fiber} g</p>
    </div>
  );
};

export default NutritionCard;
