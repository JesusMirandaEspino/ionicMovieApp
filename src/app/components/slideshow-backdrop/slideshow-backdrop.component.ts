import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DetallesComponent } from '../detalles/detalles.component';

@Component({
  selector: 'app-slideshow-backdrop',
  templateUrl: './slideshow-backdrop.component.html',
  styleUrls: ['./slideshow-backdrop.component.scss'],
})
export class SlideshowBackdropComponent implements OnInit {

  @Input() listMovies: Movie[] = [];
    public slideOpts = {
    slidesPerView: 2.2,
    freeMode: true
    }

  constructor( private modalController:ModalController  ) {
    // code
  }

  ngOnInit() {
    // code
  }


  async verDetalle(id: number){
    const modal = await this.modalController.create(  {
      component: DetallesComponent,
      componentProps: {
        id
      }
    });

    modal.present();


  }

}
