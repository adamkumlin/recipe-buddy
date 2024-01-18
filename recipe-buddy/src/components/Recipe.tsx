type RecipeProps = {
    title: string;
    content: string[];
    image: string;
    time: string | null;
    setActiveRecipe: React.Dispatch<React.SetStateAction<Recipe | null>>;
}

type Recipe = {
    title: string;
    content: string[];
    image: string;
    time: string | null;
}

const Recipe: React.FC<RecipeProps> = ({ title, content, image, time, setActiveRecipe }) => {

    return (
        <div className='Recipe'>
            <button onClick={() => setActiveRecipe(null)}>Back</button>
            <h2>{title}</h2>
            <img src={image} alt={title}/>
            <p className="time">{time}</p>
            <ul>
                {content.map((line, index) => (
                    <li key={index}>{line}</li>
                ))}
            </ul>
        </div>
    )
}

export default Recipe;