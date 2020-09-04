import { Component, OnInit } from '@angular/core';
import * as fromStore from '../store'
import { ImagesState } from '../store/reducers';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Categories } from '../models/categories-model';

@Component({
  selector: 'app-my-images',
  templateUrl: './my-images.component.html',
  styleUrls: ['./my-images.component.css']
})
export class MyImagesComponent implements OnInit {
  myImages:  Observable<Categories[]> = this.store.select(fromStore.getMyImages)
  constructor(private store: Store<ImagesState>) { }

  ngOnInit(): void {
  
  }

}
