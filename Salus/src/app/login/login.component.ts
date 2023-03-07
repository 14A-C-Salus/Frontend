import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errorMessageLogin: string;
  errorMessageVerify: string;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
    ) {

    }

    ngOnInit() {
      this.loginForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required]
      });
    }


    onSubmit() {
      const email = this.loginForm.value.email;
      const password = this.loginForm.value.password;
      this.authService.login(email, password).subscribe({
        next: res => {
          this.authService.verifyAccount().subscribe({
            next: res => {

            },
            error: err => {
              this.errorMessageVerify = 'Account not verified'
            }
          });
        },
        error: err =>{
          this.errorMessageLogin = 'Invalid email or password'
        }
      })
    }
  }
