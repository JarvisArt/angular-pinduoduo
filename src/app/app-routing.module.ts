import { NgModule, enableProdMode } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  HomeContainerComponent,
  HomeDetailComponent,
} from './home';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  // { path: 'path', component: FeatureComponent },
  // { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
