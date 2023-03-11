// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { UserRegister } from '../models/user.register';
import { UserLogin } from '../models/user.login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
    constructor(private http: HttpClient) { }

    _token = '';

    get token(): string {
      return this._token;
    }

    set token(value: string) {
      this._token = value;
      if (value) {      
        localStorage.setItem("authToken", value);
      }
      else {
        localStorage.removeItem("authToken");
      }
    }

    register(userRegister: UserRegister): Observable<any>{
      return this.http.put(`${environment.APIUrl}/Auth/register`, userRegister)
    }


    login(userLogin: UserLogin): Observable<any> {
      return this.http.post(`${environment.APIUrl}/Auth/login`, userLogin, {responseType: 'text'});
    }

    logout() {
      localStorage.setItem("authToken", "");
    }
  
  }