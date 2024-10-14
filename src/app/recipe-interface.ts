export interface RecipeInterface {
    id: number;
    category: string;
    name: string;
    // servings: number;
    ingredients: Ingredient[];
    instructions: string[];
    image: string;
    rating: number;
}
export interface Ingredient {
    name: string;
    quantity: string;
  }
