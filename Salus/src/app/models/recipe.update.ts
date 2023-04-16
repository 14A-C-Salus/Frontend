export interface UpdateRecipe {
    name: string;
    kcal: number;
    protein: number;
    fat: number;
    carbohydrate: number;
    ingredientIds: number[];
    ingredientPortionGramm: number[];
    method: string;
    oilId: number;
    oilPortionMl: number;
    timeInMinutes: number;
    description: string;
    generateDescription: boolean;
    saveAs: boolean;
  }