import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DataLocalService } from '../../services/data-local.service';
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
  public startfavorite = 'start-outline';

  slideOptActor = {
    slidesPerView: 3.3,
    freeMode: true,
    spacebetween: -5
  }

  constructor(  private moviesService: MoviesService,
                public modalCtrl: ModalController,
                public dataLocalService: DataLocalService ) {
    // code
  }

    ngOnInit() {

    this.dataLocalService.existePelicula( this.id ).then( resp => {
        this.startfavorite = (resp) ? 'star' : 'star-outline';
    });



    this.moviesService.getPeliculaDetalle(this.id).subscribe( resp => {
      this.MovieDetalle = resp;
      //console.log(resp)
    });

    this.moviesService.getPeliculaCredits(this.id).subscribe( (resp: MovieCredits) => {
      this.actors = resp.cast;
    });
  }


  regresar(){
    this.modalCtrl.dismiss();
  }


  favoritos(){
    // code
    const exist = this.dataLocalService.saveMovie( this.MovieDetalle );
    this.startfavorite = (exist) ? 'star' : 'star-outline'

  }

}
