import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import firebase from 'firebase/compat/app'

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  temp:any;
  tempRate:any;
  constructor(private db: AngularFirestore) { }

    getTrendingMovies(){
      return new Promise<any>((resolve)=> {
        this.db.collection('trending-movies').valueChanges({ idField: 'id' }).subscribe(films => resolve(films));
      })
    }
    getTheatreMovies(){
      return new Promise<any>((resolve)=> {
        this.db.collection('theatre-movies').valueChanges({ idField: 'id' }).subscribe(films => resolve(films));
      })
    }
    getPopularMovies(){
      return new Promise<any>((resolve)=> {
        this.db.collection('popular-movies').valueChanges({ idField: 'id' }).subscribe(films => resolve(films));
      })
    }
    getOneMovie(type:string,id:string){
      return new Promise<any>((resolve)=> {
        this.db.collection(type ,ref => ref.where(firebase.firestore.FieldPath.documentId(), '==', id)).valueChanges({ idField: 'id' }).subscribe(films => resolve(films));
      })
    }
    async addReview(type:string,id:string,name:string,rate:number,review:string){
      this.temp = await this.getOneMovie(type,id);
      this.tempRate = this.temp[0].rating;
      this.temp = this.temp[0].reviews;
      this.tempRate = Number(((this.tempRate * this.temp.length + rate)/(this.temp.length+1)).toFixed(2));
      this.temp.push({name: name, rating: rate, review: review})
      this.db.collection(type).doc(id).update({reviews: this.temp, rating: this.tempRate});
    }
    addMovie(type:string,data:object){
      this.db.collection(type).add(data)
    }
}

function resolve(films: firebase.firestore.DocumentSnapshot<unknown>): void {
  throw new Error('Function not implemented.');
}
