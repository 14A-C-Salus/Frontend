import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form:FormGroup;

  constructor(
    private formBuilder:FormBuilder,
    private http:HttpClient,
    ) {
    this.form = this.formBuilder.group({
      username: '',
      email:'',
      password:'',
      passwordConfirm:''
    })
  }

  ngOnInit(): void {
    

  }

  submit(): void {
    this.http.post("https://localhost:7138/api/Auth/register",this.form.getRawValue())
    .subscribe(res => {
      console.log(res);
    })
  }
}


// ngxs
// Why i use wiev model stream for my angular template
