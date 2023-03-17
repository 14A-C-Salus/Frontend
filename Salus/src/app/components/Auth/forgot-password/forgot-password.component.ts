import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {

  email: string;
  successMessage: string;
  errorMessage: string;

  constructor(private http: HttpClient) { }

  onSubmit() {
    this.http.patch(`${environment.APIUrl}Auth/forgot-password`, { email: this.email })
      .subscribe(
        (response: any) => {
          this.successMessage = response.message;
          this.errorMessage = "";
        },
        (error: any) => {
          this.successMessage = "";
          this.errorMessage = error.error.message;
        }
      );
  }
}
