import React from "react";
import { useRecipeStore } from "./recipeStore";

const deleteRecipeButton = (id) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  return (
    <div>
      <button onClick={() => deleteRecipe(id)}>Delete</button>
    </div>
  );
};
export default deleteRecipeButton;
