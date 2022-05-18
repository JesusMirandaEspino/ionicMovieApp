import { Component, OnInit } from '@angular/core';
import {  Genre, Movie, MovieGenre } from '../interfaces/interfaces';
import { DataLocalService } from '../services/data-local.service';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{

  public movies: Movie[] = [];
  public listGenres: MovieGenre;
  public genres: Genre[] = [];
  public favoritosGeneros: any[]  = [];

  constructor( public dataLocalService: DataLocalService, public moviesService: MoviesService){}


  async ngOnInit(){
      this.movies = await this.dataLocalService.cargarFavoritos();
      this.listGenres = await  this.moviesService.getGenres();
      this.genres = this.listGenres.genres

      this.pelisGenero( this.genres, this.movies )
  }

pelisGenero( generos: Genre[], peliculas: Movie[] ){

  this.favoritosGeneros = [];
  console.log(   this.favoritosGeneros);

  generos.forEach( genero => {
      this.favoritosGeneros.push( {
        genero: genero.name,
        pelis: peliculas.filter( pelicula => pelicula.genres.find( genre => genre.id == genero.id ) )
      });
  });


  console.log(  this.favoritosGeneros.length);



}



}
