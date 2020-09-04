import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { map, tap, publish, mapTo } from 'rxjs/operators';
import { environment } from "../../../environments/environment";
import { Image } from '../models/image-model';

export const UNSPLASH_API_URL = 'https://api.unsplash.com';

@Injectable({
  providedIn: 'root'
})
export class UnsplashService {

  constructor(
    private http: HttpClient,
    @Inject(UNSPLASH_API_URL) private apiUrl: string
  ) { }

  query(URL: string, params?: Array<string>): any {
    const apiKey = environment.unSplashApiKey;
    let queryURL = `${UNSPLASH_API_URL}${URL}?client_id=${apiKey}`;
    if (params) {
      queryURL = `${queryURL}&${params.join("&")}`;
    }

    return this.http.request<any>("GET", queryURL).pipe(
      map(result => result.results.map(item => new Image({
        id: item.id,
        author: { name: item.user.username, url: item.user.links.portfolio },
        url: item.urls.small,
        downloadUrl: item.links.download
      })))
    );
    
  }

  search(query: string): Observable<any> {
    return this.query(`/search/photos/`, [`query=${query}`]);
  }
}
