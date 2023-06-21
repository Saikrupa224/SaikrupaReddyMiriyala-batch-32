import { Component, OnInit } from '@angular/core';
interface Iprofile{
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  

}
@Component({
  selector: 'app-Signup',
  templateUrl: './Signup.component.html',
  styleUrls: ['./Signup.component.css']
})
export class SignupComponent implements OnInit {
  profile:Iprofile={
    firstname: '',
    lastname: '',
    email: '',
    password: '',
  }
  constructor() { }

  ngOnInit() {
  }
  signupForm() {
    if(this.profile.email && this.profile.password){
      localStorage.setItem("user",JSON.stringify(this.profile))
      console.log("signup successful");
    }
    else{console.log('please enter all fields');
  }
      
    }
    
    
  }

