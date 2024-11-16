import { useState } from "react";
import { useRecipeStore } from "./recipeStore";

const EditRecipeForm = () => {
  const EditRecipe = useRecipeStore((state) => state.updateRecipe);
  const [Edit, setEdit] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    EditRecipe({ id: Date.now() });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setEdit(e.target.value)}
        placeholder="Edit"
      />

      <button type="submit">Add Recipe</button>
    </form>
  );
};
export default AddRecipeForm;
