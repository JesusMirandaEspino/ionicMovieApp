import { Component } from '@angular/core';
import { OneMovie, ResultMovies } from '../interfaces/interfaces';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public textoBuscar: string = '';
  public ideas: string[] = [ 'spiderman', 'batman', 'superman' ];
  public movies: ResultMovies[] = [];


  constructor(  private moviesService: MoviesService  ) {
    // code
  }


  buscar(event: any){
    const valor = event.detail.value;
  }

  getIdea(idea: string){
    this.textoBuscar = idea;
    this.moviesService.getPelicula( idea ).subscribe(( movies: any) => {
      this.movies = movies.results;
      console.log(this.movies);
    });
  }

}
