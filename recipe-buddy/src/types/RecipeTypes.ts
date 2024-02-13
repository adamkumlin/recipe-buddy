export type Quantity = {
    food: string;
    foodCategory: string;
    foodId: string;
    image: string;
    measure: string;
    quantity: number;
    text: string;
    weight: number;
}

export type Recipe = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    recipe?: any;
    title: string;
    ingredientQuantities: Quantity[];
    image: string;
    time: string | null;
};

export type Unit = "metric" | "imperial";