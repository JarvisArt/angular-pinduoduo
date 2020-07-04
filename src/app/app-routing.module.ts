import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  HomeContainerComponent,
  HomeDetailComponent,
  HomeGrandComponent,
  HomeAuxComponent,
  ParentComponent,
} from './home';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeContainerComponent,
    children: [
      {
        path: '',
        redirectTo: 'hot',
        pathMatch: 'full'
      },
      {
        path: ':tabLink',
        component: HomeDetailComponent,
        children: [
          {
            path: 'aux',
            component: HomeAuxComponent,
            outlet: 'second'
          },
          {
            path: 'grand',
            component: HomeGrandComponent
          }
        ]
      }
    ]
  },
  {
    path: 'change-detection',
    pathMatch: 'full',
    component: ParentComponent
  }
  // { path: 'path', component: FeatureComponent },
  // { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
