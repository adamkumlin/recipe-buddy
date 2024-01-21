type RecipeT = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    recipe?: any;
    title: string;
    ingredients: string[];
    image: string;
    time: string | null;
};

export default RecipeT;