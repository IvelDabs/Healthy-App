import React from 'react';
import MealsProvider from './components/MealsProvider';
import MealList from './components/MealList';
import Counter from './components/Counter';
import './App.css'

function App() {
  const date = new Date();
  return (
    <div className="App">
      <h3>{date.toLocaleTimeString()}</h3>
      <p>This app allows users to manage their food intake by tracking a list of daily meals. Users can click on individual meals to upadate and change the state of the app as they consume them.</p>
      <p>It also updates the counter to show the number of available meals left to be consumed for the day.</p>
      <MealsProvider>
        <MealList />
        <Counter />
      </MealsProvider>
    </div>
  );
}

export default App;
