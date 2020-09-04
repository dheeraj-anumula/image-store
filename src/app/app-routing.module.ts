import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImagesModule } from './images/images.module';
import { ImageSearchComponent } from './images/image-search/image-search.component';
import { MyImagesComponent } from './images/my-images/my-images.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component:  ImageSearchComponent},
  { path: 'myImages', component: MyImagesComponent }
];

@NgModule({
  imports: [
    ImagesModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
