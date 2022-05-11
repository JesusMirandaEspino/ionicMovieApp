import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Movie } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  constructor( private storage: Storage   ) {
    this.initDB();
  }

  private _storage: Storage | null = null;
  movies: Movie[] = [];

  async initDB(){
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    const storage = await this.storage.create();
    this._storage = storage;
  }

  saveMovie(movie: Movie){
    this.movies.push(movie);
    this.storage.set('movies', this.movies);
  }


}
