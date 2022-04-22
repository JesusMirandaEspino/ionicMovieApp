import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SlideshowBackdropComponent } from './slideshow-backdrop/slideshow-backdrop.component';
import { PipesModule } from '../pipes/pipes.module';
import { SlideshowPosteComponent } from './slideshow-poste/slideshow-poste.component';



@NgModule({
  declarations: [ SlideshowBackdropComponent, SlideshowPosteComponent],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule

  ],
  exports: [
    SlideshowBackdropComponent,
    SlideshowPosteComponent
  ]
})
export class ComponentsModule { }
