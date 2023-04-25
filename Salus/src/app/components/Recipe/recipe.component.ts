import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddIngredientComponent } from './add-ingredient/add-ingredient.component';
import { AuthService } from 'src/app/services/auth.service';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { AddMealsComponent } from './add-meals/add-meals.component';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  openModalIngredient() {
    this.modalService.open(AddIngredientComponent);
  }
  openModalRecipe() {
    this.modalService.open(AddRecipeComponent);
  }
  constructor(private modalService: NgbModal,
    private authService: AuthService ) { }

  recipes: any[] = []

ngOnInit() {
    this.authService.getAllRecipe().subscribe({
      next:res => {
      this.recipes = res

      },
      error: err =>{
      console.log(err);
      }
    })
  }
  addMeals(id: number){
    const modalRef=this.modalService.open(AddMealsComponent);
    modalRef.componentInstance.meals = {
      recipeId: id,
      portion: 0
    };
  }
}
