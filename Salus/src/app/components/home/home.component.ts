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
    this.http.get('//localhost:7138/api/Auth', {withCredentials: true}).subscribe({
      next:res => {
        console.log(res);
      },
      error:err => {
        console.log(err);
      }
    })
  }




}


