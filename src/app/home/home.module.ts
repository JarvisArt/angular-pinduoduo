import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import {
  HomeContainerComponent,
  HomeDetailComponent,
} from './components';
import { HomeService } from './services/home.service';

@NgModule({
  declarations: [
    HomeContainerComponent,
    HomeDetailComponent,
  ],
  providers: [
    HomeService
  ],
  imports: [
    SharedModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
