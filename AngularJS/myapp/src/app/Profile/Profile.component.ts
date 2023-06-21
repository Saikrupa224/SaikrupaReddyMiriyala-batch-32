import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Profile',
  templateUrl: './Profile.component.html',
  styleUrls: ['./Profile.component.css']
})
export class ProfileComponent {
  allusers:any=localStorage.getItem("user");
  users=JSON.parse(this.allusers)
  firstname: string=this.users.firstname;
  lastname: string=this.users.lastname;
  email: string=this.users.email;
  password: string=this.users.password;
  }



