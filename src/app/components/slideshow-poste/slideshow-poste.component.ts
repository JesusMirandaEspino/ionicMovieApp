import { Component, Input, OnInit } from '@angular/core';
import { Movies } from '../../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DetallesComponent } from '../detalles/detalles.component';

@Component({
  selector: 'app-slideshow-poste',
  templateUrl: './slideshow-poste.component.html',
  styleUrls: ['./slideshow-poste.component.scss'],
})
export class SlideshowPosteComponent implements OnInit {

  @Input() listMovies: Movies[] = [];

  public slideOpts = {
    slidesPerView: 3.3,
    freeMode: true
    }

  constructor( private modalController: ModalController ) {
    // code
  }

  ngOnInit() {
    // code
  }


  async verDetalle( id: number ){
        const modal = await this.modalController.create(  {
      component: DetallesComponent,
      componentProps: {
        id
      }
    });

    modal.present();

  }


}
