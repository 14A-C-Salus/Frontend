import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddDietComponent } from './add-diet/add-diet.component';
import { AddOilComponent } from './add-oil/add-oil.component';
import { AddTagComponent } from './add-tag/add-tag.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private modalService: NgbModal
  ) {}
  diets: any[] = [];
  oils: any[] = [];
  tags: any[] = [];

  ngOnInit(): void {
    this.authService.getAllDiets().subscribe({
      next: (res) => {
        this.diets = res;
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
    this.authService.getAllTags().subscribe({
      next: (res) => {
        this.tags = res;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  deleteDiet(id: any) {
    this.authService.deleteDiet(id).subscribe({
      next: (res) => {
        location.reload();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  deleteOil(id: any) {
    this.authService.deleteOil(id).subscribe({
      next: (res) => {
        location.reload();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  deleteTag(id: any) {
    this.authService.deleteTag(id).subscribe({
      next: (res) => {
        location.reload();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  addDiet() {
    this.modalService.open(AddDietComponent);
  }
  addOil() {
    this.modalService.open(AddOilComponent);
  }
  addTag() {
    this.modalService.open(AddTagComponent);
  }
}
