type IngredientsProps = {
    ingredients: string[];
}

const Ingredients: React.FC<IngredientsProps> = ({ ingredients }) => {

    return (
        <div className='Ingredients'>
            <details>
                <summary>Ingredients</summary>
                <ul>
                    {ingredients.map((line, index) => (
                        <li key={index}>{line}</li>
                    ))}
                </ul>
            </details>
        </div>
    )
}

export default Ingredients;