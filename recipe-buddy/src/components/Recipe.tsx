import Ingredients from "./Ingredients";
import Time from "./Time";

type RecipeProps = {
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

const Recipe: React.FC<RecipeProps> = ({ title, ingredients, image, time, setActiveRecipe }) => {

    return (
        <div className='Recipe'>
            <h2>{title}</h2>
            <button onClick={() => setActiveRecipe(null)}>Back</button>
            <img src={image} alt={title}/>
            
            <Time minutes={time}/>

            <Ingredients ingredients={ingredients}/>
        </div>
    )
}

export default Recipe;