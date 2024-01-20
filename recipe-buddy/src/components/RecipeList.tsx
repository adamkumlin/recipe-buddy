import { useState } from "react";
import RecipeResult from "./RecipeResult"
import RecipeComponent from "./Recipe";

type RecipeListProps = {
    recipes: Array<any>;
}

type Recipe = {
    title: string;
    ingredients: string[];
    image: string;
    time: string | null;
}

const RecipeList: React.FC<RecipeListProps> = ({ recipes}) => {

    const [activeRecipe, setActiveRecipe] = useState<Recipe | null>(null);

    return (
        <div className='RecipeList'>
            {recipes != null && activeRecipe === null ?
                recipes.map((recipe, index) => (
                    <RecipeResult key={index} setActiveRecipe={setActiveRecipe} title={recipe.recipe.label} ingredients={recipe.recipe.ingredientLines} image={recipe.recipe.image} time={recipe.recipe.totalTime}/>
                )) : null}

                {activeRecipe != null ? <RecipeComponent title={activeRecipe.title} ingredients={activeRecipe.ingredients} image={activeRecipe.image} time={activeRecipe.time} setActiveRecipe={setActiveRecipe}/> : null}
        </div>
    )
}

export default RecipeList;