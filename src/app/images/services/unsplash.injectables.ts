import {
    UnsplashService,
    UNSPLASH_API_URL
  } from './unsplash.service';
  
  export const unsplashInjectables: Array<any> = [
    {provide: UnsplashService, useClass: UnsplashService},
    {provide: UNSPLASH_API_URL, useValue: UNSPLASH_API_URL}
  ];
  