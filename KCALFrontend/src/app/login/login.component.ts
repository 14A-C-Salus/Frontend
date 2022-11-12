import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user: any;

  constructor(private http: HttpClient) {}
  public login(user: User): Observable<string>{
    return this.http.post('https://localhost:7138/api/Auth/login', user, {responseType: 'text'})
  }
  ngOnInit(): void {
  }


}
