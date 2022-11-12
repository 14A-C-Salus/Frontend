import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
user: any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  public register(user: User): Observable<any>{
    return this.http.post<any>('https://localhost:7138/api/Auth/register', user)
  }

}

