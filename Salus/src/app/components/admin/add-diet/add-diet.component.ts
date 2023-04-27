import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Diet } from 'src/app/models/diet';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-add-diet',
  templateUrl: './add-diet.component.html',
  styleUrls: ['./add-diet.component.css']
})
export class AddDietComponent {
  data: Diet = {
    name: "",
    description: "",
    minFat: 0,
    minCarbohydrate: 0,
    minProtein: 0,
    minKcal: 0,
    minDl: 0,
    maxFat: 0,
    maxCarbohydrate: 0,
    maxProtein: 0,
    maxKcal: 0,
    maxDl: 0
  };

  constructor(
    private authService: AuthService,
    private modalService: NgbModal
  ) {}
  Close() {
    this.modalService.dismissAll();
  }
  saveDiet() {
    this.authService.createDiet(this.data).subscribe({
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
