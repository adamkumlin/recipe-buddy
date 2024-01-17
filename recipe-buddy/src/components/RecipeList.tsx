import RecipeResult from "./RecipeResult"

type RecipeListProps = {
    recipes: Array<any>;
}

type ActiveStatus = "block" | "none";

const RecipeList: React.FC<RecipeListProps> = ({ recipes}) => {

    const formatTime = (time: number) => {

        let formattedTime: string = "";

        if (time >= 60) {
            formattedTime = (time / 60).toPrecision(2) + " h";
        } else {
            formattedTime = time + " min";
        }

        return formattedTime;
    }

    const toggleActive = (activeStatus: ActiveStatus) => {
        if (activeStatus == "block") {
            activeStatus = "none";
        } else {
            activeStatus = "block";
        }
    }

    return (
        <div className='RecipeList'>
            {recipes != null ?
                recipes.map((recipe, index) => (
                    <RecipeResult key={index} recipe={recipe} updateActiveStatus={toggleActive} title={recipe.recipe.label} image={recipe.recipe.image} time={recipe.recipe.totalTime != 0 ? formatTime(recipe.recipe.totalTime) : null}/>
                )) : <p>Loading...</p>}
        </div>
    )
}

export default RecipeList;