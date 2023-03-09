// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import jwt_decode from 'jwt-decode';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://localhost:7138/api/Auth';
  
    constructor(private http: HttpClient) { }
  

    _token = '';

    get token(): string {
      return this._token;
    }

    set token(value: string) {
      this._token = value;
      if (value) {      
        localStorage.setItem("jwt", value);
      }
      else {
        localStorage.removeItem("jwt");
      }
    }


    login(email: string, password: string): Observable<{token: string}> {
      const data = { email, password };
      const headers = { 'Content-Type': 'application/json' };
    
      return this.http.post<{token: string}>(`${environment.APIUrl}/Auth/login`, data, { headers });
    }
  
    logout() {
      this.token = '';
    }
  }