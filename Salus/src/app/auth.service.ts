// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://localhost:7138/api/Auth';
  
    constructor(private http: HttpClient) { }
  

    login(email: string, password: string) {
      return this.http.post(`${this.apiUrl}/login`, { email, password }).pipe(
        tap(response => {
          const token = response;
          const decodedToken: any = jwt_decode(JSON.stringify(token));
          localStorage.setItem('token', JSON.stringify(decodedToken.access_token));
        })
      );
    }
  
    logout() {
      localStorage.removeItem('token');
    }
  
    isLoggedIn() {
      const token = localStorage.getItem('token');
      return token !== null;
    }
  
    verifyAccount() {
      return this.http.get(`${this.apiUrl}/verify-account`);
    }
  }