import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CreateIngredient } from 'src/app/models/recipe.ingredient';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-add-ingredient',
  templateUrl: './add-ingredient.component.html',
  styleUrls: ['./add-ingredient.component.css'],
})
export class AddIngredientComponent {
  data: CreateIngredient = {
    name: '',
    kcal: 0,
    protein: 0,
    fat: 0,
    carbohydrate: 0,
  };

  constructor(
    private authService: AuthService,
    private modalService: NgbModal
  ) {}
  Close() {
    this.modalService.dismissAll();
  }
  SaveIngredient() {
    console.log(this.data);

    this.authService.createIngredient(this.data).subscribe({
      next: (res) => {
        this.modalService.dismissAll();
        location.reload();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
