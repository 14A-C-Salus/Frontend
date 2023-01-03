import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
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
      email: '',
      password: ''
    });
  }

  submit(): void{
    this.http.post('https://localhost:7138/api/Auth/login',{withCredentilas: true},this.form.getRawValue(),)
    .subscribe({
      next: res => {
        this.router.navigate(['/'])
      },
      error: err => {
        this.message =`Sikertelen bejelentkezés`
      }
    })  
    }
  }
