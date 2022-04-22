import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { RestMoviesDB } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private urlBase: string = environment.urlBase;
  private ApiKey: string = environment.ApiKey;
  private language:string = environment.language;
  private imgLanguage: string = environment.imgLanguage;

  private queries = {
    prYDg: 'primary_release_date.gte',
    pryDL: 'primary_release_date.lte',
    lang: 'language',
    imgLang: 'include_image_language',
    key: 'api_key'
  }

  private iniDate:Date = new Date();
  private EndDate:Date = new Date();

  constructor( private http: HttpClient ) { }

  private getQuery<T>( valueQuery: string ){
    let query = `${this.urlBase}discover/movie?${this.queries.key}=${this.ApiKey}&${this.queries.lang}=${this.language}&${this.queries.imgLang}=${this.imgLanguage}`;
    query += valueQuery;

    return this.http.get(query);

  }


  getFeatures(){



    return this.getQuery<RestMoviesDB>( `&${this.queries.prYDg}=2014-09-15&${this.queries.pryDL}=2014-10-22` );

  }


}
