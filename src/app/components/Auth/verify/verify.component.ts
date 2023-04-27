import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent implements OnInit{

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService
  ) {}
  ngOnInit(): void {
    const token = this.route.snapshot.queryParamMap.get('token');
    this.authService.Verify(token).subscribe({
      next: res => {
        console.log(res);
        
      },
      error: err =>{
        console.log(err);
        
      }
    })
  }

}
