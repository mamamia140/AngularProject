import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username="";
  password="";

  constructor(private authentication: AuthenticationService,private router: Router){}

  login(){
    if (this.username.length < 1) {
      alert("Please enter a username");
    } else if (this.password.length < 1) {
      alert("Please enter a password");
    } else {
      let res = this.authentication.login(this.username,this.password);
      if (res===200){
        this.router.navigate(['home'])
      }
    }
    }
} 
