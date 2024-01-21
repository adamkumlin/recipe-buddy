import QuantityT from "../types/QuantityT";

interface IngredientsProps {
  ingredients: string[];
  quantities: QuantityT[];
}

const Ingredients: React.FC<IngredientsProps> = ({
  ingredients,
  quantities,
}) => {
  const startsOpen: boolean = ingredients.length < 13;

  function cupsToDeciliters(cups: number): number {
    return cups * 2.366;
  }

  function poundsToGrams(pounds: number): number {
    return pounds * 453.6;
  }

  function ouncesToGrams(ounces: number): number {
    return ounces * 28.35;
  }

  for (let i = 0; i < quantities.length; i++) {
    if (quantities[i].measure === "cup") {
      const newQuantity: number = cupsToDeciliters(quantities[i].quantity);
      quantities[i].quantity = newQuantity;
    } else if (quantities[i].measure === "pound") {
      const newQuantity: number = poundsToGrams(quantities[i].quantity);
      quantities[i].quantity = newQuantity;
    } else if (quantities[i].measure === "ounce") {
      const newQuantity: number = ouncesToGrams(quantities[i].quantity);
      quantities[i].quantity = newQuantity;
    }
  }

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
