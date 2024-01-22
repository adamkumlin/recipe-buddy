import QuantityT from "./QuantityT";

type RecipeT = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    recipe?: any;
    title: string;
    ingredientQuantities: QuantityT[];
    image: string;
    time: string | null;
};

export default RecipeT;