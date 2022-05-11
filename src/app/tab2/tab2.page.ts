import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DetallesComponent } from '../components/detalles/detalles.component';
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
  public buscando: boolean = false;


  constructor(  private moviesService: MoviesService, private modalController: ModalController  ) {
    // code
  }


  buscar(event: any){
    const valor:string = event.detail.value;

    if( valor == '' || valor.length == 0 ){
      this.buscando = false;
      this.movies = [];
      return;
    }

    this.buscando = true;
    this.moviesService.getPelicula( valor ).subscribe(( movies: any) => {
      this.movies = movies.results;
      this.buscando = false;
    });


  }

  getIdea(idea: string){
    this.textoBuscar = idea;
  }


  async detalle(id:any){
        const modal = await this.modalController.create(  {
      component: DetallesComponent,
      componentProps: {
        id
      }
    });

    modal.present();
  }

}
