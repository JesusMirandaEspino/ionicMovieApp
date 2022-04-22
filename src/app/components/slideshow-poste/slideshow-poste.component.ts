import { Component, Input, OnInit } from '@angular/core';
import { Movies } from '../../interfaces/interfaces';

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

  constructor() {
    // code
  }

  ngOnInit() {
    // code
  }

}
