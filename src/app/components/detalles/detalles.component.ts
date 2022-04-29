import { Component, Input, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.scss'],
})
export class DetallesComponent implements OnInit {

  @Input() id: string;

  constructor( private moviesService: MoviesService ) {
    // code
  }

  ngOnInit() {
    // code

    this.moviesService.getMovieById(this.id).subscribe( resp => {
      console.log(resp)
    });


  }

}
