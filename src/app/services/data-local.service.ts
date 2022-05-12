import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Movie } from '../interfaces/interfaces';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  constructor( public storage: Storage, public toastController: ToastController   ) {
    this.initDB();
    this.cargarFavoritos();
  }

  public _storage: Storage | null = null;
  movies: Movie[] = [];

  async initDB(){
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    const storage = await this.storage.create();
    this._storage = storage;
  }

  saveMovie(movie: Movie){
    let exist = false;
    let mensaje = '';

    for( let peli of this.movies ){
      if( peli.id == movie.id ){
        exist = true;
        break;
      }
    }

    if( exist ){
      this.movies = this.movies.filter( mov => mov.id !== movie.id );
      mensaje = 'Removido de favoritos';
    }else{
      this.movies.push(movie);
      mensaje = 'Agregada a favoritos';
    }

    this.presentToast(mensaje);
    this.storage.set('movies', this.movies);

    return !exist;


  }

  async presentToast(mensaje:string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000
    });
    toast.present();
  }


  async cargarFavoritos(){
    const favoritesMovies = await this.storage.get('movies');
    this.movies = favoritesMovies || [];
    return this.movies;

  }


  async existePelicula( id: string ){

    const getId = Number(id);
    await this.cargarFavoritos();
    const existe = this.movies.find( mov =>  mov.id === getId );

    return (existe) ? true : false;


  }

}
