import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgRespPipe } from './img-resp.pipe';



@NgModule({
  declarations: [
    ImgRespPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ImgRespPipe
  ]
})
export class PipesModule { }
