import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogin } from 'src/app/models/user.login';
import { AuthService } from '../../services/auth.service';

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
          this.router.navigate(['/']);
        },
        error: (error) => {
          console.log(error)
        },
      });
    }
  }
}
