import { useRecipeStore } from "./recipeStore";

const RecommendationsList = () => {
  const recommendations = useRecipeStore();
  return (
    <div>
      <h2>Recommendations</h2>
    </div>
  );
};
