type RecipeProps = {
    title: string;
    content: string[];
    image: string;
    time: string | null;
}

const Recipe: React.FC<RecipeProps> = ({ title, content, image, time }) => {

    return (
        <div className='Recipe'>
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