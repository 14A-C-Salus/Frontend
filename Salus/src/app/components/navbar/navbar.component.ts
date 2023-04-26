import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import jwt_decode from 'jwt-decode';
import { DecodedToken } from 'src/app/models/decoded.token';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  userName: string;
  authToken = localStorage.getItem('authToken');
  
  constructor(private router: Router, private authService: AuthService) {}
  
  ngOnInit() {
    if (this.authToken) {
      const decodedToken = jwt_decode(this.authToken!) as DecodedToken;
      this.authService.getAuth(decodedToken.id).subscribe({
        next: (res: any) => {
          this.userName = res.username;
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }

  logout(): void {
    localStorage.removeItem('authToken');
    location.reload();
  }
  isAdmin() {
    this.authService.isAdmin();
  }
}
