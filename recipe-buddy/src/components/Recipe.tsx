type RecipeProps = {
    title: string;
    content: string[];
    image: string;
    time: string | null;
    activeStatus: ActiveStatus;
}

type ActiveStatus = "block" | "none";

const Recipe: React.FC<RecipeProps> = ({ title, content, image, time, activeStatus }) => {

    return (
        <div className='Recipe' style={{display: activeStatus}}>
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