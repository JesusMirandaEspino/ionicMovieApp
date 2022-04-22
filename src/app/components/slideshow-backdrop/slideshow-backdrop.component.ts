import { Component, Input, OnInit } from '@angular/core';
import { Movies } from '../../interfaces/interfaces';

@Component({
  selector: 'app-slideshow-backdrop',
  templateUrl: './slideshow-backdrop.component.html',
  styleUrls: ['./slideshow-backdrop.component.scss'],
})
export class SlideshowBackdropComponent implements OnInit {

  @Input() listMovies: Movies[] = [];
    public slideOpts = {
    slidesPerView: 2.2,
    freeMode: true
    }

  constructor() {
    // code
  }

  ngOnInit() {
    // code
  }

}
