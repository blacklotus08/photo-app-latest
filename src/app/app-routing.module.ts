import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PhotoComponent } from './photo/photo.component';
import { PhotoDetailComponent } from './photo-detail/photo-detail.component';


const routes: Routes =  [
  {path: '', redirectTo: '/photo', pathMatch: 'full' },
  { path: 'detail/:id', component: PhotoDetailComponent },
  { path: 'photo', component: PhotoComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }