import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'client';
  users:any;
  x=1;

  ShowUser(num:any)
  { 
    this.x = num;
    this.GetUsers();
  }
  
  constructor(private http : HttpClient) {}

  body:any={
    "username":"vijay",
    "password":"vj123"
  };
  body1:any={};
  ngOnInit(){
    //this.GetUsers();
  }

  GetUsers()
  {
    this.http.post('https://localhost:5001/account/register',this.body1).subscribe(response => {
      this.users = response;
      console.log("response is =>"+response);
    },error => {
      console.log(error);
    })
  }
  
  register()
  {
    this.http.post('https://localhost:5001/account/register',this.body1).subscribe(response => {
      console.log("response is =>"+response);
    },error => {
      console.log(error);
    })
  }
}
