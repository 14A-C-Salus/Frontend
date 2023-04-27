import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import jwt_decode from 'jwt-decode';
import { DecodedToken } from 'src/app/models/decoded.token';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  authToken = localStorage.getItem('authToken');

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    
    if (this.authToken) {
      const decodedToken = jwt_decode(this.authToken!) as DecodedToken;
      this.authService.getUserProfile(decodedToken.id).subscribe({
        next: (res) => {
          return;
        },
        error: (err) => {
          if (err.error.error === 'EUserProfileNotFound') {
            this.router.navigate(['/CreateProfile']);
          }
        },
      });
    }
  }
}
