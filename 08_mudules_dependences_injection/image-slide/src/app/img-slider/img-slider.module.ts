import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImgSliderRoutingModule } from './img-slider-routing.module';
import { ImgSlideComponent } from './img-slide/img-slide.component';
import {ImgSliderComponent} from './img-slider.component';


@NgModule({
  declarations: [ImgSlideComponent, ImgSliderComponent],
  imports: [
    CommonModule,
    ImgSliderRoutingModule
  ]
})
export class ImgSliderModule { }
