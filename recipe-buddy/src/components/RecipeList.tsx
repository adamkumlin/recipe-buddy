import { useState } from "react";
import RecipeResult from "./RecipeResult"
import RecipeComponent from "./Recipe";

type RecipeListProps = {
    recipes: Array<any>;
}

type Recipe = {
    title: string;
    content: string[];
    image: string;
    time: string | null;
}

const RecipeList: React.FC<RecipeListProps> = ({ recipes}) => {

    const [activeRecipe, setActiveRecipe] = useState<Recipe | null>(null);

    const formatTime = (time: number) => {
        let formattedTime: string = "";

        if (time >= 60) {
            formattedTime = (time / 60).toPrecision(2) + " h";
        } else {
            formattedTime = time + " min";
        }

        return formattedTime;
    }

    return (
        <div className='RecipeList'>
            {recipes != null && activeRecipe === null ?
                recipes.map((recipe, index) => (
                    <RecipeResult key={index} setActiveRecipe={setActiveRecipe} title={recipe.recipe.label} content={recipe.recipe.ingredientLines} image={recipe.recipe.image} time={recipe.recipe.totalTime != 0 ? formatTime(recipe.recipe.totalTime) : null}/>
                )) : null}

                {activeRecipe != null ? <RecipeComponent title={activeRecipe.title} content={activeRecipe.content} image={activeRecipe.image} time={activeRecipe.time} setActiveRecipe={setActiveRecipe}/> : null}
        </div>
    )
}

export default RecipeList;