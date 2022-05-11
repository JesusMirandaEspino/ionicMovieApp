import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public textoBuscar: string = '';
  public ideas: string[] = [ 'spiderman', 'batman', 'superman' ];


  constructor() {
    // code
  }


  buscar(event: any){
    const valor = event.detail.value;
    console.log(valor);
  }

  getIdea(idea: string){
    this.textoBuscar = idea;
  }

}
