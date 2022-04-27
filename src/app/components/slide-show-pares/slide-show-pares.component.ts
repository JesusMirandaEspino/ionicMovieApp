import { Component, Input, OnInit } from '@angular/core';
import { Movies } from '../../interfaces/interfaces';

@Component({
  selector: 'app-slide-show-pares',
  templateUrl: './slide-show-pares.component.html',
  styleUrls: ['./slide-show-pares.component.scss'],
})
export class SlideShowParesComponent implements OnInit {

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
