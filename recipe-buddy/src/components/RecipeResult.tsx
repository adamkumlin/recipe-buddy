type RecipeResultProps = {
    title: string;
    image: string;
    time: string | null;
    recipe: string[];
}

const RecipeResult: React.FC<RecipeResultProps> = ({ title, image, time, recipe }) => {

    return (
        <div className='RecipeResult' onClick={() => toggleShowRecip}>
            <div className="backgroundOverlay"/>
            <img src={image} alt={title}/>
            <h2>{title}</h2>
            <p className="time">{time}</p>
        </div>
    )
}

export default RecipeResult;