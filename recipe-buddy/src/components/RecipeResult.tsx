import Time from "./Time";

type RecipeResultProps = {
    title: string;
    ingredients: string[];
    image: string;
    time: string | null;
    setActiveRecipe: React.Dispatch<React.SetStateAction<Recipe | null>>;
}

type Recipe = {
    title: string;
    ingredients: string[];
    image: string;
    time: string | null;
}

const RecipeResult: React.FC<RecipeResultProps> = ({ title, ingredients, image, time, setActiveRecipe}) => {

    const recipe: Recipe = {title, ingredients, image, time};

    return (
        <div className='RecipeResult' onClick={() => setActiveRecipe(recipe)}>
            <div className="backgroundOverlay"/>
            <img src={image} alt={title} className="image"/>
            <h2>{title}</h2>
            <Time minutes={time}/>
        </div>
    )
}

export default RecipeResult;