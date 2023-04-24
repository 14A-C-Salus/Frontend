import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddIngredientComponent } from './add-ingredient/add-ingredient.component';
import { AuthService } from 'src/app/services/auth.service';
import { HttpClient } from '@angular/common/http';
import { RecipeGetAll } from 'src/app/models/recipe.getall';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  constructor(private modalService: NgbModal,
              private http: HttpClient ) { }



  ngOnInit() {

  }
  enteredSearchValue = '';

  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  onSeachTextChanged(){
    this.searchTextChanged.emit(this.enteredSearchValue);
  }
  characters = [
    'Ant-Man',
    'Aquaman',
    'Asterix',
    'The Atom',
    'The Avengers',
    'Batgirl',
    'Batman',
    'Batwoman',

  ]
  openModalIngredient() {
    const modalRef = this.modalService.open(AddIngredientComponent);
    modalRef.componentInstance.data = {
      name: 'example name',
      kcal: 100,
      protein: 20,
      fat: 5,
      carbohydrate: 10
    };
  }
  openModalRecipe() {
    const modalRef = this.modalService.open(AddRecipeComponent);
  }
}
