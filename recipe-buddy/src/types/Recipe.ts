import Quantity from "./Quantity";

type Recipe = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    recipe?: any;
    title: string;
    ingredientQuantities: Quantity[];
    image: string;
    time: string | null;
};

export default Recipe;