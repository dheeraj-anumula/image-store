import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { Image } from '../models/image-model';
import { Store } from '@ngrx/store'
import * as fromActions from '../store/actions'
import { ImagesState } from '../store/reducers';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultComponent implements OnInit {

  @Input() image: Image;

  public value: string
  constructor( private store:Store<ImagesState>) { }

  ngOnInit() {
  }

  public saveImage(event) {
    this.store.dispatch(fromActions.AddImage({id:this.value, image:this.image}))
  }

}
