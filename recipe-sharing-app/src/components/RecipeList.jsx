import { useState } from "react";
import { useRecipeStore } from "./recipeStore";
import { Link } from "react-router-dom";

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const { filteredRecipes, setSearchTerm } = useRecipeStore();
  const [searchInput, setSearchInput] = useState("");

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchInput(value);
    setSearchTerm(value);
  };

  return (
    <div>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
      <h1>Recipe List</h1>
      <input
        type="text"
        placeholder="Search recipes..."
        value={searchInput}
        onChange={handleSearchChange}
      />
      <ul>
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe) => (
            <li key={recipe.id}>
              {recipe.name}
              <button onClick={() => deleteRecipe(recipe.id)}>Delete</button>
            </li>
          ))
        ) : (
          <p>No recipes found.</p>
        )}
      </ul>
      <Link to="/">Recipes</Link>
      <Link to="/recipedetails">Recipe Details</Link>
    </div>
  );
};
export default RecipeList;
