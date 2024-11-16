import { useState } from "react";
import "./App.css";
import RecipeDetails from "./components/RecipeDetails";
import { Routes, Route, Router } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/EditRecipeForm";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/recipedetails" element={<RecipeDetails />} />
          <Route path="/addrecipe" element={<AddRecipeForm />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
