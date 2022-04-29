import { Component, OnInit, Output } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { RestMoviesDB, Movies } from '../interfaces/interfaces';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {


  @Output() listMovies: Movies[] = [];
  public populares: Movies[] = [];

  constructor( private moviesService: MoviesService ) {

  }

  ngOnInit(){
    this.moviesService.getFeatures().subscribe( (movies: RestMoviesDB ) => {
        this.listMovies = movies.results;
        console.log(this.listMovies);
    });


    this.getPopulares();

  }


  cargarMas(){
      this.getPopulares();
  }

  getPopulares(){
      this.moviesService.getPopulares().subscribe( (movies:any) => {
      const arrayTemporal = [ ...this.populares, ...movies.results ]
      this.populares = arrayTemporal;
    });
  }

}
