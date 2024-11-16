import { useState } from "react";
import "./App.css";
import RecipeDetails from "./components/RecipeDetails";
import { Routes, Route } from "react-router-dom";
import RecipeList from "./components/RecipeList";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route path="/recipedetails" element={<RecipeDetails />} />
      </Routes>
    </>
  );
}

export default App;
