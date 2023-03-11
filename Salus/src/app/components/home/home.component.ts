import { HttpClient, HttpInterceptor } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{



constructor(
  private http: HttpClient,
) {}


  ngOnInit(): void {
    
  }




}


