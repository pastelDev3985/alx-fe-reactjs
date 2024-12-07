import React, { useState } from "react";

steps;
validate;

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors({});

    const newErrors = {};

    if (!title) {
      newErrors.title = "Title is required";
    }
    if (!ingredients || ingredients.split(",").length < 2) {
      newErrors.ingredients = "Please provide at least two ingredients";
    }
    if (!instructions) {
      newErrors.instructions = "Instructions are required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsValid(false);

      return;
    }

    setIsValid(true);
    console.log("Form Submitted:", { title, ingredients, instructions });
  };

  return (
    <div className="p-6 bg-[#3B2D4D] min-h-screen">
      <form onSubmit={handleSubmit}>
        <div className="p-8 text-center rounded-lg bg-[#382B49] mb-8 ">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-white"
          >
            Recipe Title
          </label>
          <input
            type="text"
            placeholder="Recipe Title"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-2 p-2 w-full border border-gray-300 rounded-md"
          />
          {errors.title && (
            <p className="text-red-700 text-sm mt-2">{errors.title}</p>
          )}
        </div>

        <div className="p-8 text-center rounded-lg bg-[#382B49] mb-8">
          <label
            htmlFor="ingredients"
            className="block text-sm font-medium text-white"
          >
            Ingredients
          </label>
          <textarea
            id="ingredients"
            type="text"
            placeholder="Ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="mt-2 p-2 w-full border border-gray-300 rounded-md"
          />
          {errors.ingredients && (
            <p className="text-red-700 text-sm mt-2">{errors.ingredients}</p>
          )}
        </div>

        <div className="p-8 text-center rounded-lg bg-[#382B49] mb-8">
          <label
            htmlFor="instructions"
            className="block text-sm font-medium text-white"
          >
            Instructions
          </label>
          <textarea
            id="instructions"
            type="text"
            placeholder="Preparation"
            value={instructions}
            onChange={(e) => setIngredients(e.target.value)}
            className="mt-2 p-2 w-full border border-gray-300 rounded-md"
          />
          {errors.instructions && (
            <p className="text-red-700 text-sm mt-2">{errors.instructions}</p>
          )}
        </div>
        <div className="p-8 text-center rounded-lg bg-[#382B49] overflow-auto transition-transform hover:scale-105 duration-200 shadow-lg">
          <button
            type="submit"
            disabled={!isValid}
            className="text-white font-semibold text-lg "
          >
            Post Recipe
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRecipeForm;
