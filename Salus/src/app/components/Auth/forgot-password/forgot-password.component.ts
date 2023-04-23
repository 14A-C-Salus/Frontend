import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {

  email: string;
  successMessage: string;
  errorMessage: string;

  constructor(private authService: AuthService) { }

  onSubmit() {
    this.authService.forgotPassword(this.email).subscribe({
      next: res => {
        this.successMessage = "Email sucessfully sent!";
        this.errorMessage = "";
      },
      error: err => {
        if (err.error.error === 'EUserNotFound') {
          this.errorMessage = 'This email is wrong';
          this.successMessage = "";
        }
      }
    })
  }
}
