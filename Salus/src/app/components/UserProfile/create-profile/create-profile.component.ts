import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css']
})
export class CreateProfileComponent {
  userProfileForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.userProfileForm = this.formBuilder.group({
      weight: [0],
      height: [0],
      birthDate: ['2023-03-17T10:56:21.503Z'],
      gender: [0],
      goalWeight: [0]
    });
  }

  onSubmit() {
    console.log(this.userProfileForm.value);
    // submit form logic here
  }
}
