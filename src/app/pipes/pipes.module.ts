import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgRespPipe } from './img-resp.pipe';
import { ParesPipe } from './pares.pipe';



@NgModule({
  declarations: [
    ImgRespPipe,
    ParesPipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ImgRespPipe,
    ParesPipe
  ]
})
export class PipesModule { }
