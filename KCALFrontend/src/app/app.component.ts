import { Component } from '@angular/core';
import { User } from './models/user';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Salus-Healthy Lifestyle';
  user = new User();

  constructor(private authService: AuthService){}


  register(user: User){
    this.authService.register(user).subscribe();
  }
  login(user: User){
    this.authService.login(user).subscribe((token: string) => {localStorage.setItem('authToken', token)});
  }
  verify(){
    this.authService.verify().subscribe((name: string) => {console.log(name)});
  }
}
