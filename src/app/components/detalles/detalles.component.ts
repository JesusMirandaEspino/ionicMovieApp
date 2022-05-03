import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../interfaces/interfaces';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.scss'],
})
export class DetallesComponent implements OnInit {

  @Input() id: string;
  public MovieDetalle: Movie = {};

  constructor( private moviesService: MoviesService ) {
    // code
  }

  ngOnInit() {

    this.moviesService.getPeliculaDetalle(this.id).subscribe( resp => {
      this.MovieDetalle = resp;
      console.log(resp)
    });

    this.moviesService.getPeliculaCredits(this.id).subscribe( resp => {
      console.log(resp)
    });


  }

}
