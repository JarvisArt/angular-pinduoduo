import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ScrollabTabComponent,
  ImageSliderComponent,
  HorizontalGridComponent,
  CountDownComponent,
  FooterComponent,
  VerticalGridComponent,
  ProductCardComponent,
  ProductTileComponent,
  BackButtonComponent,
} from './components';
import {
  GridItemDirective,
  GridItemImageDirective,
  GridItemTitleDirective,
  TagDirective,
  AvatarDirective
} from './directives'
import { AgoPipe } from './pipes/ago.pipe';
import { DialogModule } from '../dialog';

@NgModule({
  declarations: [
    ScrollabTabComponent,
    ImageSliderComponent,
    HorizontalGridComponent,
    CountDownComponent,
    FooterComponent,
    VerticalGridComponent,
    ProductCardComponent,
    ProductTileComponent,
    BackButtonComponent,
    GridItemDirective,
    GridItemImageDirective,
    GridItemTitleDirective,
    TagDirective,
    AvatarDirective,
    AgoPipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    DialogModule,
    ScrollabTabComponent,
    ImageSliderComponent,
    HorizontalGridComponent,
    CountDownComponent,
    FooterComponent,
    VerticalGridComponent,
    ProductCardComponent,
    ProductTileComponent,
    BackButtonComponent,
    GridItemDirective,
    GridItemImageDirective,
    GridItemTitleDirective,
    TagDirective,
    AvatarDirective,
    AgoPipe
  ]
})
export class SharedModule {}
