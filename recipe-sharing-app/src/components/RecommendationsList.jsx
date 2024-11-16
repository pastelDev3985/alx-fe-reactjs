import { useRecipeStore } from "./recipeStore";

const RecommendationsList = ({ recommendations }) => {
  if (!recommendations || !Array.isArray(recommendations)) {
    return <p>No recommendations available.</p>;
  }
};
return (
  <div>
    <h2>Recommendations</h2>
    <ul>
      {recommendation.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

export default RecommendationsList;
