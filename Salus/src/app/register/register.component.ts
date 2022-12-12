import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  message = '';
  form:FormGroup;

  constructor(
    private formBuilder:FormBuilder,
    private http:HttpClient,
    private router: Router,
    ) {

  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: '',
      email:'',
      password:'',
      confirmPassword:''
    })

  }

  submit(): void {
    this.http.put("https://localhost:7138/api/Auth/register",this.form.getRawValue(), {responseType: 'text'})
    .subscribe({
      next: res => {
        this.message = 'Succesfull sign up'
      },
      error: err => {
      }
    })
  }
}


// ngxs
// Why i use wiev model stream for my angular template
