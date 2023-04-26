import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { UserProfile } from 'src/app/models/userprofile';

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css'],
})
export class CreateProfileComponent {
  createdProfile: UserProfile = {
    weight: 0,
    height: 0,
    birthDate: new Date(),
    gender: 0,
    goalWeight: 0,
  };

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  createProfile(): void {
    console.log(this.createdProfile);
    this.authService.createProfile(this.createdProfile).subscribe({
      next: (res) => {
        alert('Profile Created');
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
