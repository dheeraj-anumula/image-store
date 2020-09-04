import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchResultComponent } from './search-results/search-results.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { reducers, effects } from './store';
import { FormsModule } from '@angular/forms';
import { unsplashInjectables } from './services/unsplash.injectables';
import { SearchBoxComponent } from './search-box/search-box.component';
import { ImageSearchComponent } from './image-search/image-search.component';
import { MyImagesComponent } from './my-images/my-images.component';
import { CategoryImagesComponent } from './category-images/category-images.component';


@NgModule({
  declarations: [
    SearchResultComponent,
    SearchBoxComponent,
    ImageSearchComponent,
    MyImagesComponent,
    CategoryImagesComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    StoreModule.forFeature('result', reducers),
    EffectsModule.forFeature(effects)
  ],
  providers: [unsplashInjectables],

})
export class ImagesModule { }
