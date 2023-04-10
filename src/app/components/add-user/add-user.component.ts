import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
email:any;
password:any;
Error:any;
regex:RegExp;
constructor(private auth:AuthenticationService){
  this.Error = '';
  this.email = '';
  this.password = '';
  this.regex = new RegExp("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$");
}
validate(){
  this.Error = "";
  if (!this.regex.test(this.email)){
    this.Error = "Invalid e-mail"
  }
  else if (this.password === ''){
    this.Error = "Enter a password"
  }
  else{
    this.auth.SignUp(this.email,this.password)
  }
}
}
