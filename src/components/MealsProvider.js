import React, { createContext, useContext, useState } from "react";

const MealsContext = createContext();

let todaysMeals = [
  "Beef fried rice",
  "Baked beans",
  "Meshed potatoes",
  "Vegetable fried rice"
];

const MealsProvider = ({ children }) => {
  const [meals, setMeals] = useState(todaysMeals);
  const [selectedMeals, setSelectedMeals] = useState([]);

  const handleMealClick = (meal) => {
    setSelectedMeals((prevSelectedMeals) => [...prevSelectedMeals, meal]);
  };

  return (
    <MealsContext.Provider
      value={{
        meals,
        selectedMeals,
        handleMealClick
      }}
    >
      {children}
    </MealsContext.Provider>
  );
};

export const useMealListContext = () => useContext(MealsContext);

export default MealsProvider;
