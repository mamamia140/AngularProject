import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent {
  email:any;
  password:any;
  name:any;
  cover:any;
  rate:any;
  Error:any;
  regex:RegExp;
  selectedType = 'select';
  constructor(private auth:AuthenticationService, private db:FirebaseService){
    this.Error = '';
    this.email = '';
    this.password = '';
    this.name = '';
    this.cover = '';
    this.regex = new RegExp("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$");
  }

	onSelected(value:string): void {
		this.selectedType = value;
	}

  validate(){
    this.Error = "";
    if (!this.regex.test(this.email)){
      this.Error = "Invalid e-mail"
    }
    else if (this.password === ''){
      this.Error = "Enter a password"
    }
    else if (this.selectedType === 'select'){
      this.Error = "Select a movie type"
    }
    else if (this.name === ''){
      this.Error = "Enter a movie name"
    }
    else if (this.cover === ''){
      this.Error = "Enter a cover url"
    }
    else{
      var movie = {
        name:this.name,
        cover:this.cover,
        rating: 0,
        reviews: []
      }
      this.db.addMovie(this.selectedType,movie);
      alert("the movie has been added")
    }
  }
}
