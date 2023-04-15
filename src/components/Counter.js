import React from "react";
import { useMealListContext } from "./MealsProvider";
import "./Counter.css";

function Counter() {
  const { meals, selectedMeals } = useMealListContext();
    const remainingMeals = meals.length - selectedMeals.length;
  return (
    <div className="counter-tab">
      <div className="counter-hd">
        <h3>Remaining Meals: {remainingMeals}</h3>
      </div>
    </div>
  );
}

export default Counter;
