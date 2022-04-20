import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RestMoviesDB } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private urlBase: string = 'https://api.themoviedb.org/3/';
  private ApiKey: string = '590eb4dce046e2f09c91e191b2811e87';
  private language:string = 'es';
  private imgLanguage: string = 'es';

  private iniDate:Date = new Date();
  private EndDate:Date = new Date();

  constructor( private http: HttpClient ) { }


  getFeatures(){

    return this.http.get<RestMoviesDB>( `${this.urlBase}discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&api_key=${this.ApiKey}&language=${this.language}&include_image_language=${this.imgLanguage}` );

  }


}
