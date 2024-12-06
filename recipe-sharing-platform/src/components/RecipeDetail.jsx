import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import mockData from "../data.json";

const RecipeDetail = () => {
  const { id } = useParams();
  const recipe = mockData.find((recipe) => recipe.id === parseInt(id));
  useEffect;
  console.log("Recipe:", recipe);

  if (!recipe) {
    return <p className="text-center text-white">Recipe not found</p>;
  }

  return (
    <div>
      <div className="p-6 bg-[#3B2D4D] min-h-screen">
        <h1 className="text-3xl font-bold mb-6 text-white">{recipe.title} </h1>
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-96 object-cover mb-4"
        />
        <div className="bg-[#382B49] p-6 rounded-3xl mb-4">
          <h2 className="text-2xl font-semibold mb-2 text-white">
            Ingredients
          </h2>
          <ul className="list-disc list-inside mb-6">
            {recipe.ingredients.map((ingredient, index) => (
              <li className="text-[#909090]" key={index}>
                {ingredient}{" "}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-[#382B49] p-6 rounded-3xl mb-4">
          <h2 className="text-2xl font-semibold mb-2 text-white">
            Instructions
          </h2>
          <ol className="list-decimal list-inside mb-6">
            {recipe.instructions.map((step, index) => (
              <li key={index} className="text-[#909090] mb-4">
                {step}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
