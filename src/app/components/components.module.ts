import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SlideshowBackdropComponent } from './slideshow-backdrop/slideshow-backdrop.component';
import { PipesModule } from '../pipes/pipes.module';
import { SlideshowPosteComponent } from './slideshow-poste/slideshow-poste.component';
import { SlideShowParesComponent } from './slide-show-pares/slide-show-pares.component';
import { DetallesComponent } from './detalles/detalles.component';
import { IonicStorageModule } from '@ionic/storage-angular';



@NgModule({
  declarations: [  SlideshowPosteComponent, SlideShowParesComponent, DetallesComponent, SlideshowBackdropComponent],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule,
    IonicStorageModule

  ],
  exports: [
    SlideshowBackdropComponent,
    SlideshowPosteComponent,
    SlideShowParesComponent,
    DetallesComponent
  ]
})
export class ComponentsModule { }
