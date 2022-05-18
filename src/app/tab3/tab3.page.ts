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

  constructor( public dataLocalService: DataLocalService, public moviesService: MoviesService){}


  async ngOnInit(){
      this.movies = await this.dataLocalService.cargarFavoritos();
      console.log(this.movies)
      this.listGenres = await  this.moviesService.getGenres();
      this.genres = this.listGenres.genres

      console.log(this.genres);
  }

}
