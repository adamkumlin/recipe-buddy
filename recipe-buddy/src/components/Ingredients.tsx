import type Quantity from "../types/Quantity";
import type Unit from "../types/Unit";
import { useContext } from "react";

interface IngredientsProps {
  quantities: Quantity[];
}

const Ingredients: React.FC<IngredientsProps> = ({ quantities }) => {

  const units = useContext(UnitsContext);
  const ingredients: string[] = [];

  function convertUnits(quantites: Quantity[], units: Unit): Quantity[] {
    if (units === "metric") {
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
      }
    } else if (units === "imperial") {
      for (let i = 0; i < quantities.length; i++) {
        if (quantities[i].measure === "cup") {
          const newQuantity: number = Math.round(
            2.366 * quantities[i].quantity
          );
          quantities[i].quantity = newQuantity;
          quantities[i].measure = "deciliter";
        } else if (quantities[i].measure === "pound") {
          const newQuantity: number = Math.round(
            435.6 * quantities[i].quantity
          );
          quantities[i].quantity = newQuantity;
          quantities[i].measure = "gram";
        } else if (quantities[i].measure === "ounce") {
          const newQuantity: number = Math.round(
            28.35 * quantities[i].quantity
          );
          quantities[i].quantity = newQuantity;
          quantities[i].measure = "gram";
        }
      }
    }
    return quantites;
  }

    function formatQuantities(quantites: Quantity[]): string[] {
      let ingredient: string = "";

      for (let i = 0; i < quantites.length; i++) {
        if (quantities[i].food) {
          const firstLetter: string = quantities[i].food
            .slice(0, 1)
            .toUpperCase();
          const restOfWord: string = quantities[i].food.slice(1);
          ingredient = firstLetter + restOfWord;
        }

        if (quantities[i].quantity > 0) {
          ingredient += " - " + quantities[i].quantity;

          if (
            quantities[i].measure != "<unit>" &&
            quantities[i].measure != null
          ) {
            ingredient +=
              " " +
              quantities[i].measure +
              (quantities[i].quantity > 1 ? "s" : "");
          }
        }
      }

      ingredients.push(ingredient);
      return ingredients;
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
}

export default Ingredients;
