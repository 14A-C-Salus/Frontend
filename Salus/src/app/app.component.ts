import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  isAuthenticated: boolean;

  constructor() { }

  ngOnInit() {
    const token = localStorage.getItem('token');
    this.isAuthenticated = token ? true : false;
  }

  logout() {
    localStorage.removeItem('token');
    this.isAuthenticated = false;
  }
}
