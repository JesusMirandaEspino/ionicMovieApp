import { Component, Input, OnInit } from '@angular/core';
import { Cast, Movie, MovieCredits } from '../../interfaces/interfaces';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.scss'],
})
export class DetallesComponent implements OnInit {

  @Input() id: string;
  public MovieDetalle: Movie = {};
  public actors: Cast[] = []
  public ocultar: number = 150;

  constructor( private moviesService: MoviesService ) {
    // code
  }

  ngOnInit() {

    this.moviesService.getPeliculaDetalle(this.id).subscribe( resp => {
      this.MovieDetalle = resp;
      console.log(resp)
    });

    this.moviesService.getPeliculaCredits(this.id).subscribe( (resp: MovieCredits) => {
      this.actors = resp.cast;
    });


  }

}
