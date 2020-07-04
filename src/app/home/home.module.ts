import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import {
  HomeContainerComponent,
  HomeDetailComponent,
  HomeGrandComponent,
  HomeAuxComponent,
  ParentComponent,
  ChildComponent
} from './components';
import { HomeService } from './services/home.service';

@NgModule({
  declarations: [
    HomeContainerComponent,
    HomeDetailComponent,
    HomeGrandComponent,
    HomeAuxComponent,
    ParentComponent,
    ChildComponent
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
