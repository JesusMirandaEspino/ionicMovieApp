import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Movie, RestMoviesDB } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private urlBase: string = environment.urlBase;
  private ApiKey: string = environment.ApiKey;
  private language:string = environment.language;
  private imgLanguage: string = environment.imgLanguage;
  private popularesPages: number = 0;

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


    private getQuery2<T>( valueQuery: string ){
    let query = `${this.urlBase}`;
    query += valueQuery;

    return this.http.get(query);

  }


  getFeatures(){

    const hoy = new Date();
    const ultimoDia = new Date( hoy.getFullYear(), hoy.getMonth() + 1, 0 ).getDate();
    const mes = hoy.getMonth() + 1;
    let mesString;

    if( mes < 10 ){
      mesString = '0' + mes;
    }else{
      mesString = mes;
    }

    const inicio  = `${hoy.getFullYear()}-${mesString}-01`;
    const fin     = `${hoy.getFullYear()}-${mesString}-${ultimoDia}`;
    console.log( inicio );
    console.log( fin );

    return this.getQuery<RestMoviesDB>( `&${this.queries.prYDg}=${inicio}&${this.queries.pryDL}=${fin}` );

  }


  getPopulares(){

    this.popularesPages++;
    const queries = `&sort_by=sort_by&page=${this.popularesPages}`;
    return this.getQuery<RestMoviesDB>( queries );
  }


  getMovieById(id:string){
    const queries = `&id=${id}`;
    return this.getQuery<RestMoviesDB>( queries );
  }

  getPeliculaDetalle( id: string ){
    const queries = `/movie/${id}?api_key=${this.ApiKey}`;
    return this.getQuery2<Movie>( queries );

// https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US

  }


  getPeliculaCredits( id: string ){
    const queries = `/movie/${id}/credits?api_key=${this.ApiKey}`;
    return this.getQuery2<Movie>( queries );

// https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US

  }


}
