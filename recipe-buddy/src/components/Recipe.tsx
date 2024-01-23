import Ingredients from "./Ingredients";
import Time from "./Time";
import type RecipeT from "../types/Recipe";
import type Quantity from "../types/Quantity";

interface RecipeProps {
  title: string;
  ingredientQuantities: Quantity[];
  image: string;
  time: string | null;
  setActiveRecipe: React.Dispatch<React.SetStateAction<RecipeT | null>>;
}

const Recipe: React.FC<RecipeProps> = ({
  title,
  ingredientQuantities,
  image,
  time,
  setActiveRecipe,
}) => {
  return (
    <div className="Recipe">
      <h2>{title}</h2>
      <button onClick={() => setActiveRecipe(null)}>Back</button>
      <img src={image} alt={title} />

      <Time minutes={time} />

      <Ingredients quantities={ingredientQuantities}/>
    </div>
  );
};

export default Recipe;
