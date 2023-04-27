import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Oil } from 'src/app/models/oil';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-add-oil',
  templateUrl: './add-oil.component.html',
  styleUrls: ['./add-oil.component.css'],
})
export class AddOilComponent {
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
}
