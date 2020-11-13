import React from 'react';
import logo from './logo.svg';
import './App.css';
import FoodBox from './FoodBox/FoodBox';
import Search from './Search/Search';

function App() {
  return (
    <div className="App">
    <h1 className="title">IronNutrition</h1>  
    
    <Search></Search>
    <FoodBox></FoodBox>
    
    
    

    </div>
  );
}

export default App;
