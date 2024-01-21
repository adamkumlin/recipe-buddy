import Ingredients from "./Ingredients";
import Time from "./Time";
import RecipeT from "../types/RecipeT";
import QuantityT from "../types/QuantityT";

interface RecipeProps {
  title: string;
  ingredients: string[];
  ingredientQuantities: QuantityT[];
  image: string;
  time: string | null;
  setActiveRecipe: React.Dispatch<React.SetStateAction<RecipeT | null>>;
}

const Recipe: React.FC<RecipeProps> = ({
  title,
  ingredients,
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

      <Ingredients ingredients={ingredients} quantities={ingredientQuantities}/>
    </div>
  );
};

export default Recipe;