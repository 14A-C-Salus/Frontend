export interface WriteRecipe {
    ingredientIds: number[];
    ingredientPortionGramm: number[];
    method: number;
    oilId: number;
    oilPortionMl: number;
    timeInMinutes: number;
    name: string;
    description: string;
    generateDescription: boolean;
  }