import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CreateTag } from 'src/app/models/tag.create';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-add-tag',
  templateUrl: './add-tag.component.html',
  styleUrls: ['./add-tag.component.css']
})
export class AddTagComponent {

  data: any = {
    name: "",
    description: "",
    property: 0,
    maxValue: 0,
    minValue: 0,
  }

  constructor(
    private authService: AuthService,
    private modalService: NgbModal
  ) { }


  Close() {
    this.modalService.dismissAll();
  }

  createTag() {
    this.authService.createTag(this.data).subscribe({
      next: (res) => {
        this.modalService.dismissAll();
        location.reload();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  nameInput(event: any){
    this.data.name = event.target.value   
  }
  descriptionInput(event:any){
    this.data.description = event.target.value   
  }
  propertyInput(event:any){
    this.data.property = event.target.value   
  }
  maxValueInput(event:any){
    this.data.maxValue = event.target.value   
  }
  minValueInput(event:any){
    this.data.minValue = event.target.value   
  }
}
