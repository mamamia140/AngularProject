import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRoute } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit{
type='';
id='';
movies: any;
movie: any;
email: any;
password:any;
name:any;
rate:any;
review:any;
Error:string;
regex=new RegExp("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$");
constructor(private route: ActivatedRoute, private http: HttpClient,private DB:FirebaseService, private Auth: AngularFireAuth){
  this.Error = '';
  this.email = '';
  this.password = '';
  this.review = '';
  this.name='';
  this.rate='';
}
ngOnInit():void{
this.type = this.route.snapshot.params['type'];
this.id = this.route.snapshot.params['id'];
this.getTheMovie();
}
async getTheMovie(){
  this.movies = await this.DB.getOneMovie(this.type,this.id);
  this.movie = this.movies[0]; 
}
SignIn(email: string, password: string) {
  return this.Auth
    .signInWithEmailAndPassword(email, password)
    .then((result) => {
      this.Auth.authState.subscribe((user) => {
        if (user) {
          this.DB.addReview(this.type,this.id,this.name,Number(this.rate),this.review);
          alert("Review has been added");
        }
      });
    })
    .catch((error) => {
      this.Error = "User with these credentials couldn't have been found"
    });
}
onRateChange(rate: number) {
  this.rate = rate;
}
validate(){
  this.Error = "";
  if (!this.regex.test(this.email)){
    this.Error = "Invalid e-mail"
  }
  else if (this.password === ''){
    this.Error = "Enter a password"
  }
  else if (this.name === ''){
    this.Error = "Enter a name"
  }
  else if (this.rate === 0){
    this.Error = "Enter a rate"
  }
  else if (this.review === ''){
    this.Error = "Enter a review"
  }
  else{
    this.SignIn(this.email,this.password)
  }
}
}
