export class RecipeGetAll {
    id: number;
    gramm: number;
    kcal: number;
    protein: number;
    fat: number;
    carbohydrate: number;
    verifeid: boolean;
    timeInMinute: number;
    oilPortionMl: number;
    description: string;
    name: string;
    method: number;
    author: {
      id: number;
      weight: number;
      height: number;
      birthDate: Date;
      gender: number;
      goalWeight: number;
      hairIndex: number;
      skinIndex: number;
      eyesIndex: number;
      mouthIndex: number;
    };
    ingredients: Array<any>;
    usersWhoLiked: Array<any>;
    oilId: number;
    oil: any;
    recipes: Array<any>;
    tags: Array<any>;
    last24h: boolean;
  }