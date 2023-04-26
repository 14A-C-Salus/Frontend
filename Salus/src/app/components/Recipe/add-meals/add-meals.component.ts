import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddRecipeToLast24H } from 'src/app/models/last24h.new.recipe';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-add-meals',
  templateUrl: './add-meals.component.html',
  styleUrls: ['./add-meals.component.css'],
})
export class AddMealsComponent {
  recipeForm: FormGroup;

  @Input() meals: AddRecipeToLast24H;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private modalService: NgbModal
  ) {
    this.createForm();
  }

  createForm() {
    this.recipeForm = this.fb.group({
      recipeId: [null, Validators.required],
      portion: [null, Validators.required],
    });
  }
  Close() {
    this.modalService.dismissAll();
  }
  onSubmit() {
    console.log(this.meals);

    this.authService.addRecipeToLast24H(this.meals).subscribe({
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
