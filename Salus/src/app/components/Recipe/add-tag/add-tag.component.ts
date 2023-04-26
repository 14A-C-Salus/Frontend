import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-add-tag',
  templateUrl: './add-tag.component.html',
  styleUrls: ['./add-tag.component.css'],
})
export class AddTagComponent implements OnInit {

 
  @Input() data: any;

  constructor(
    private authService: AuthService,
    private modalService: NgbModal,

  ) {
  }
  tags: any[] =[];

  ngOnInit(): void {
    this.authService.getAllTags().subscribe({
      next: (res) => {
        this.tags = res;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  Close() {
    this.modalService.dismissAll();
  }

  onSubmit() {
      this.authService.addTagsToRecipe(this.data).subscribe({
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
