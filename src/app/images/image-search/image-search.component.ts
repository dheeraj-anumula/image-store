import { Component, OnInit } from '@angular/core';
import { Image } from '../models/image-model';
import { Store } from '@ngrx/store';
import { ImagesState } from '../store/reducers';
import * as fromAction from '../store/actions'
import * as fromStore from '../store'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-image-search',
  templateUrl: './image-search.component.html',
  styleUrls: ['./image-search.component.css']
})
export class ImageSearchComponent implements OnInit {

  images: Observable<Image[]> = this.store.select(fromStore.getAllImages);
  loading: boolean;

  constructor(private store:Store<ImagesState>) { }
  ngOnInit() {
  }

  setAllImageState(query: string): void {
    this.store.dispatch(fromAction.LoadResults({query:query}))
  }
}
