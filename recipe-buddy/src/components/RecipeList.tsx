import RecipeResult from "./RecipeResult"

type RecipeListProps = {
    recipes: Array<any>;
}

const RecipeList: React.FC<RecipeListProps> = ({ recipes }) => {

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
            {recipes != null ?
                recipes.map((recipe, index) => (
                    <RecipeResult key={index} recipe={recipe} title={recipe.recipe.label} image={recipe.recipe.image} time={recipe.recipe.totalTime != 0 ? formatTime(recipe.recipe.totalTime) : null}/>
                )) : <p>Loading...</p>}
        </div>
    )
}

export default RecipeList;