import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.css'],
})
export class MealsComponent implements OnInit {
  constructor(private authService: AuthService) {}
  foods: any[] = [];

  ngOnInit(): void {
    this.authService.getRecipeFromLast24h().subscribe({
      next: (res) => {
        this.foods = res;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  deleteMeal(id: any) {
    this.authService.deleteRecipeFromLast24h(id).subscribe({
      next: (res) => {
        location.reload();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
