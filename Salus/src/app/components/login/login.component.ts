import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  user = {
    email: '',
    password: '',
  };
  errorMessageLogin = '';
  errorMessageVerify = '';

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    if (this.user.email && this.user.password) {
      this.authService.login(this.user.email, this.user.password).subscribe({
        next: (result: { token: string }) => {
          this.authService.token = result.token;
          this.router.navigate(['/']);
        },
        error: (error) => {
          if (error.error === 'ENotVerified') {
            this.errorMessageVerify = 'Email not verified';
          } else {
            console.log('An unknown error occurred');
          }
        },
      });
    }
  }
}
