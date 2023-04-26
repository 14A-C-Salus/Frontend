import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserProfile } from 'src/app/models/userprofile';
import { AuthService } from 'src/app/services/auth.service';
import jwt_decode from 'jwt-decode';
import { DecodedToken } from 'src/app/models/decoded.token';

@Component({
  selector: 'app-modify-profile',
  templateUrl: './modify-profile.component.html',
  styleUrls: ['./modify-profile.component.css'],
})
export class ModifyProfileComponent {
  modifiedProfile: UserProfile = {
    weight: 0,
    height: 0,
    birthDate: new Date(),
    gender: 0,
    goalWeight: 0,
  };
  authToken = localStorage.getItem('authToken');

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    const decodedToken = jwt_decode(this.authToken!) as DecodedToken;
    this.authService.getUserProfile(decodedToken.id).subscribe({
      next: (userProfile) => {
        this.modifiedProfile = userProfile;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  modifyProfile(): void {
    this.authService.modifyProfile(this.modifiedProfile).subscribe({
      next: (res) => {
        alert('Profile Modified');
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
