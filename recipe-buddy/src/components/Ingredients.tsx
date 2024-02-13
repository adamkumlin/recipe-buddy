import UnitsContext from "../contexts/UnitsContext";
import type { Unit, Quantity } from "../types/RecipeTypes";
import { useContext, useEffect, useState } from "react";

interface IngredientsProps {
  quantities: Quantity[];
}

const Ingredients: React.FC<IngredientsProps> = ({ quantities }) => {
  const units = useContext(UnitsContext);
  const [ingredients, setIngredients] = useState<string[]>([]);

  useEffect(() => {
    setIngredients([]);
    const convertedQuantities: Quantity[] = convertUnits(quantities, units);
    formatQuantities(convertedQuantities);
  }, []);

  function convertUnits(quantites: Quantity[], units: Unit | null): Quantity[] {
    if (units === "metric") {
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
    } else if (units === "imperial") {
      for (let i = 0; i < quantities.length; i++) {
        if (quantities[i].measure === "deciliter") {
          const newQuantity: number = Math.round(
            quantities[i].quantity / 2.366
          );
          quantities[i].quantity = newQuantity;
          quantities[i].measure = "cup";
        } else if (quantities[i].measure === "gram" && quantites[i].quantity > 0.5) {
          const newQuantity: number = Math.round(
            quantities[i].quantity / 435.6
          );
          quantities[i].quantity = newQuantity;
          quantities[i].measure = "pound";
        } else if (quantities[i].measure === "ounce" && quantites[i].quantity <= 0.5) {
          const newQuantity: number = Math.round(
            quantities[i].quantity / 28.35
          );
          quantities[i].quantity = newQuantity;
          quantities[i].measure = "ounce";
        }
      }
    }
    return quantites;
  }

  function formatQuantities(quantites: Quantity[]) {
    let ingredient: string = "";
    const ingredientArr = [];

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
            (quantities[i].quantity != 1 ? "s" : "");
        }
      }
      ingredientArr.push(ingredient);
    }
    setIngredients(ingredientArr);
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
