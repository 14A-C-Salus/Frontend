import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddIngredientComponent } from './add-ingredient/add-ingredient.component';
import { AuthService } from 'src/app/services/auth.service';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { AddMealsComponent } from './add-meals/add-meals.component';
import { AddTagComponent } from './add-tag/add-tag.component';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
})
export class RecipeComponent implements OnInit {
  addIngredient() {
    this.modalService.open(AddIngredientComponent);
  }
  addRecipe() {
    this.modalService.open(AddRecipeComponent);
  }
  constructor(
    private modalService: NgbModal,
    private authService: AuthService
  ) {}

  recipes: any[] = [];

  ngOnInit() {
    this.authService.getAllRecipe().subscribe({
      next: (res) => {
        this.recipes = res;
        console.log(this.recipes);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  addMeals(id: number) {
    const modalRef = this.modalService.open(AddMealsComponent);
    modalRef.componentInstance.meals = {
      isLiquid: false,
      recipeId: id,
      portion: 0,
    };
  }
  addTag(id: number) {
    const modalRef = this.modalService.open(AddTagComponent);
    modalRef.componentInstance.data = {
      recipeId: id,
      tagIds: [],
    };
  }
  deleteRecipe(id: any) {
    this.authService.deleteRecipe(id).subscribe({
      next: (res) => {
        location.reload();
      },
      error: (err) => {
        alert('You dont have authorities for this');
      },
    });
  }
}
