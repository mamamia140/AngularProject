import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private router: Router, private Auth: AngularFireAuth,) { }

  SignUp(email: string, password: string) {
    return this.Auth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        /* Call the SendVerificaitonMail() function when new user sign 
        up and returns promise */
        window.alert("User has been added");
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }
}
