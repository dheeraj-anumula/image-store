import { Component, OnInit, Input } from '@angular/core';
import { Image } from '../models/image-model';

@Component({
  selector: 'app-category-images',
  templateUrl: './category-images.component.html',
  styleUrls: ['./category-images.component.css']
})
export class CategoryImagesComponent implements OnInit {
  @Input() images:Image[];
  constructor() { }

  ngOnInit(): void {
  }

}
