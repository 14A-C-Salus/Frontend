import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogin } from 'src/app/models/auth.login';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {

  errorMessageLogin = '';
  errorMessageVerify = '';
  userLogin = new UserLogin()

  constructor(private authService: AuthService, private router: Router) {}

  login(userLogin: UserLogin): void {
    if (userLogin.email && userLogin.password) {
      this.authService.login(userLogin).subscribe({
        next: ( token: string ) => {
          localStorage.setItem('authToken', token)
          this.router.navigateByUrl('/').then(() => {
            window.location.replace('/');
          });
        },
        error: (err) => {
          if (JSON.parse(err.error).error === 'ENotVerified') {
            this.errorMessageVerify = 'Your email is not verified';
            this.errorMessageLogin = '';
          }
          if (JSON.parse(err.error).error === 'EUsernamePasswordIncorrect') {
            this.errorMessageLogin = 'Your email or password is incorrect';
            this.errorMessageVerify = '';
          }
          
        }

      });
    }
  }
}
