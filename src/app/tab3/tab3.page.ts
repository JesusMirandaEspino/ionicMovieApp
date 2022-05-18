import { Component, OnInit } from '@angular/core';
import {  Movie } from '../interfaces/interfaces';
import { DataLocalService } from '../services/data-local.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{

  public movies: Movie[] = [];

  constructor( public dataLocalService: DataLocalService){}


  async ngOnInit(){
      this.movies = await this.dataLocalService.cargarFavoritos();
      console.log(this.movies)
  }

}
