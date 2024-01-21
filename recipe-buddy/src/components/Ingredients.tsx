interface IngredientsProps {
  ingredients: string[];
}

const Ingredients: React.FC<IngredientsProps> = ({ ingredients }) => {
  const startsOpen: boolean = ingredients.length < 13;

  return (
    <div className="Ingredients">
      <details open={startsOpen}>
        <summary>Ingredients</summary>
        <ul>
          {ingredients.map((line, index) => (
            <li key={index}>{line}</li>
          ))}
        </ul>
      </details>
    </div>
  );
};

export default Ingredients;
