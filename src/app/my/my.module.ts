import { NgModule } from '@angular/core';
import { MyRoutingModule } from './my-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MyComponentComponent } from './components';

@NgModule({
  declarations: [
    MyComponentComponent
  ],
  imports: [
    SharedModule,
    MyRoutingModule,

  ]
})
export class MyModule { }
