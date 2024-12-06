import React, { useState, useEffect } from "react";
import mockData from "../data.json";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    console.log("Attempting to fetch data...");
    setRecipes(mockData);
  }, []);
  return (
    <div className="p-6 bg-[#3B2D4D] min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-white">
        Recipe Collection
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-[#382B49] rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-200"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <Link
                to={`/recipe/${recipe.id}`}
                className="text-xl font-bold text-white hover:underline"
              >
                {recipe.title}
              </Link>
              <p className="text-[#D7C5DF]">{recipe.summary} </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
