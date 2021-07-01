import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FillDetailsComponent } from './component/fill-details/fill-details.component';
import { ShowDetailsComponent } from '../app/component/show-details/show-details.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/fillDetails',
    pathMatch: 'full',
    
  },
  {
    path: 'fillDetails',
    component:FillDetailsComponent
    
  },
  {
    path: 'showDetails',
    component:ShowDetailsComponent
    
  },

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
