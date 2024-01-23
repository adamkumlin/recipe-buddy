import Time from "./Time";
import type Recipe from "../types/Recipe";
import type Quantity from "../types/Quantity";

interface RecipeResultProps {
  title: string;
  ingredientQuantities: Quantity[];
  image: string;
  time: string | null;
  setActiveRecipe: React.Dispatch<React.SetStateAction<Recipe | null>>;
}

const RecipeResult: React.FC<RecipeResultProps> = ({
  title,
  ingredientQuantities,
  image,
  time,
  setActiveRecipe,
}) => {
  const recipe: Recipe = { title, ingredientQuantities, image, time };

  return (
    <div className="RecipeResult" onClick={() => setActiveRecipe(recipe)}>
      <div className="backgroundOverlay" />
      <img src={image} alt={title} className="image" />
      <h2>{title}</h2>
      <Time minutes={time} />
    </div>
  );
};

export default RecipeResult;
