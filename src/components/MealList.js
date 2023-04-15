import React, { useState } from "react";
import { useMealListContext } from "./MealsProvider";
import "./MealList.css";

function MealList() {
  const { meals, handleMealClick } = useMealListContext();
  const [clicks, setClicks] = useState(Array(meals.length).fill("Eat"));

  const handleButtonClick = (index) => {
    // Update the click state for the clicked meal
    setClicks((prevClicks) => {
      const newClicks = [...prevClicks];
      newClicks[index] = "Eaten";
      return newClicks;
    });
    handleMealClick(meals[index]); // Call the handleMealClick function with the selected meal
  };

  return (
    <div className="meal-tab">
      <h1>Meals List </h1>
      {meals &&
        meals.map((meal, index) => (
          <div className="meal-hd" key={index}>
            <div>
              <h2 >{meal}</h2>
              <button
                onClick={() => handleButtonClick(index)}
                disabled={clicks[index] === "Eaten"} // Disable button after it's clicked
              >
                {clicks[index]}
              </button>
            </div>
          </div>
        ))}
    </div>
  );
}

export default MealList;
