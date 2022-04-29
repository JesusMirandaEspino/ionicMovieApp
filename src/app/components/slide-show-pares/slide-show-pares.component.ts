import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Movies } from '../../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DetallesComponent } from '../detalles/detalles.component';

@Component({
  selector: 'app-slide-show-pares',
  templateUrl: './slide-show-pares.component.html',
  styleUrls: ['./slide-show-pares.component.scss'],
})
export class SlideShowParesComponent implements OnInit {

  @Input() listMovies: Movies[] = [];
  @Output() cargarMas = new EventEmitter();

  public slideOpts = {
    slidesPerView: 2.2,
    freeMode: true
    }

  constructor( private modalController: ModalController) {
    // code
  }

  ngOnInit() {
    // code
  }


  onClick(){
    this.cargarMas.emit();
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
