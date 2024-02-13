import { useState } from "react";
import RecipeResult from "./RecipeResult";
import RecipeComponent from "./Recipe";
import type { Recipe }  from "../types/Recipe";

interface RecipeListProps {
  recipes: Recipe[];
}

const RecipeList: React.FC<RecipeListProps> = ({ recipes }) => {
  const [activeRecipe, setActiveRecipe] = useState<Recipe | null>(null);

  return (
    <div className="RecipeList">
      {recipes != null && activeRecipe === null
        ? recipes.map((recipe, index) => (
            <RecipeResult
              key={index}
              setActiveRecipe={setActiveRecipe}
              title={recipe.recipe.label}
              ingredientQuantities={recipe.recipe.ingredients}
              image={recipe.recipe.image}
              time={recipe.recipe.totalTime}
            />
          ))
        : null}

      {activeRecipe != null ? (
        <RecipeComponent
          title={activeRecipe.title}
          ingredientQuantities={activeRecipe.ingredientQuantities}
          image={activeRecipe.image}
          time={activeRecipe.time}
          setActiveRecipe={setActiveRecipe}
        />
      ) : null}
    </div>
  );
};

export default RecipeList;
