import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-add-tag',
  templateUrl: './add-tag.component.html',
  styleUrls: ['./add-tag.component.css']
})
export class AddTagComponent {
  data: any = {
    name: '',
    calIn14Ml: 0,
  };

  constructor(
    private authService: AuthService,
    private modalService: NgbModal
  ) {}
  Close() {
    this.modalService.dismissAll();
  }
  saveOil() {
    this.authService.createOil(this.data).subscribe({
      next: (res) => {
        this.modalService.dismissAll();
        location.reload();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
