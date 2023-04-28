import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Ingredient } from 'src/app/models/ingredient';
import { CreateRecipe } from 'src/app/models/recipe.create';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css'],
})
export class AddRecipeComponent implements OnInit {
  recipe: CreateRecipe = {
    ingredientIds: [],
    ingredientPortionGramm: [],
    method: 0,
    oilId: 0,
    oilPortionMl: 0,
    timeInMinutes: 0,
    name: '',
    description: '',
    generateDescription: false,
  };
  data: any[] = [];
  oils: any[] = [];

  constructor(
    private authService: AuthService,
    private modalService: NgbModal
  ) {}
  ngOnInit(): void {
    this.authService.getAllRecipe().subscribe({
      next: (res) => {
        this.data = res;
      },
      error: (err) => {
        console.log(err);
      },
    });
    this.authService.getAllOils().subscribe({
      next: (res) => {
        this.oils = res;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  Close() {
    this.modalService.dismissAll();
  }
  SaveIngredient() {
    this.recipe.ingredientIds = this.ingredients
      .map((ingredient) => ingredient.name)
      .filter((quantity) => quantity !== null) as number[];
    this.recipe.ingredientPortionGramm = this.ingredients
      .map((ingredient) => ingredient.quantity)
      .filter((quantity) => quantity !== null) as number[];
    this.authService.createRecipe(this.recipe).subscribe({
      next: (res) => {
        this.modalService.dismissAll();
        location.reload();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  ingredients: Ingredient[] = [];

  addIngredient() {
    this.ingredients.push({
      name: null,
      quantity: null,
    });
  }
}
