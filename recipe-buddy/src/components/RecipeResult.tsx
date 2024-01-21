import Time from "./Time";
import RecipeT from "../types/RecipeT";

interface RecipeResultProps {
  title: string;
  ingredients: string[];
  instructions: string[];
  image: string;
  time: string | null;
  setActiveRecipe: React.Dispatch<React.SetStateAction<RecipeT | null>>;
}

const RecipeResult: React.FC<RecipeResultProps> = ({
  title,
  ingredients,
  image,
  time,
  setActiveRecipe,
}) => {
  const recipe: RecipeT = { title, ingredients, image, time };

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
