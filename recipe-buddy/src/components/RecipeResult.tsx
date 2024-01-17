type RecipeResultProps = {
    title: string;
    image: string;
    time: string | null;
    activeStatus: ActiveStatus;
    updateActiveStatus: (activeStatus: ActiveStatus) => void;
}

type ActiveStatus = "block" | "none";

const RecipeResult: React.FC<RecipeResultProps> = ({ title, image, time, updateActiveStatus, activeStatus}) => {

    return (
        <div className='RecipeResult' onClick={() => updateActiveStatus(activeStatus)}>
            <div className="backgroundOverlay"/>
            <img src={image} alt={title}/>
            <h2>{title}</h2>
            <p className="time">{time}</p>
        </div>
    )
}

export default RecipeResult;