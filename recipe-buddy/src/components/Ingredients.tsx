import QuantityT from "../types/QuantityT";

interface IngredientsProps {
  quantities: QuantityT[];
}

const Ingredients: React.FC<IngredientsProps> = ({ quantities }) => {
  const ingredients: string[] = [];

  for (let i = 0; i < quantities.length; i++) {
    if (quantities[i].measure === "cup") {
      const newQuantity: number = Math.round(2.366 * quantities[i].quantity);
      quantities[i].quantity = newQuantity;
      quantities[i].measure = "deciliter";
    } else if (quantities[i].measure === "pound") {
      const newQuantity: number = Math.round(435.6 * quantities[i].quantity);
      quantities[i].quantity = newQuantity;
      quantities[i].measure = "gram";
    } else if (quantities[i].measure === "ounce") {
      const newQuantity: number = Math.round(28.35 * quantities[i].quantity);
      quantities[i].quantity = newQuantity;
      quantities[i].measure = "gram";
    }
    ingredients.push(
      `${quantities[i].food} - ${quantities[i].quantity} ${
        quantities[i].measure != "<unit>" && quantities[i].measure != null
          ? quantities[i].measure
          : ""
      }`
    );
  }

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
