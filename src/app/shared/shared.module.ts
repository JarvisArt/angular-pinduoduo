import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ScrollabTabComponent,
  ImageSliderComponent,
  HorizontalGridComponent,
} from './components';
import {
  GridItemDirective,
  GridItemImageDirective,
  GridItemTitleDirective
} from './directives'
import { AgoPipe } from './pipes/ago.pipe';

@NgModule({
  declarations: [
    ScrollabTabComponent,
    ImageSliderComponent,
    HorizontalGridComponent,
    GridItemDirective,
    GridItemImageDirective,
    GridItemTitleDirective,
    AgoPipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ScrollabTabComponent,
    ImageSliderComponent,
    HorizontalGridComponent,
    GridItemDirective,
    GridItemImageDirective,
    GridItemTitleDirective,
    AgoPipe
  ]
})
export class SharedModule { }
