import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FirebaseService } from 'src/app/services/firebase.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {

  currentRate=5;
  trendingMovies: any;
  theatreMovies: any;
  popularMovies: any;
  temp: any;

  constructor(private http: HttpClient, private router: Router, private DB:FirebaseService) {}

  ngOnInit(): void {
    this.getTrendingMovies();
    this.getTheatreMovies();
    this.getPopularMovies();
  }
  async getTrendingMovies() {
      this.trendingMovies = await this.DB.getTrendingMovies();
  }
  async getTheatreMovies() {
    this.theatreMovies = await this.DB.getTheatreMovies();
  }
  async getPopularMovies() {
    this.popularMovies = await this.DB.getPopularMovies();
  }
  goToMovie(type:string, id:string){
    this.router.navigate(['movie',type,id])
  }

}


