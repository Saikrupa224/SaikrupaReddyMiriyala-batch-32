import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css']
})
export class LoginComponent {
  res:any=localStorage.getItem("user")
email: string | undefined;
password: string | undefined;

  constructor(private router:Router) { }


  onLogin() {
    if(this.email==JSON.parse(this.res).email && this.password==JSON.parse(this.res).password){
    console.log("login successful");
    this.router.navigate(['profile'])}
    else{
      console.log("login unsuccessful");
    }
    
  }
}

