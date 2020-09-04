import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ElementRef
} from '@angular/core';
import { fromEvent } from 'rxjs';
import { map, filter, debounceTime, tap } from 'rxjs/operators';

@Component({
  selector: 'app-search-box',
  template: `
    <input type="text" class="form-control" placeholder="Search" autofocus>
  `
})

export class SearchBoxComponent implements OnInit {
  @Output() loading: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() triggerSearch: EventEmitter<string> = new EventEmitter<string>();

  constructor(private el: ElementRef) { }

  ngOnInit(): void {

    const event = fromEvent(this.el.nativeElement, 'keyup').pipe(
      map((e: any) => e.target.value),
      filter((text: string) => text.length > 1),
      debounceTime(250),
      tap(() => this.loading.emit(true))
    )
    event.subscribe((query: string) => {
      this.loading.emit(false);
      this.triggerSearch.emit(query);
      },
      (err: any) => {
        console.log(err);
        this.loading.emit(false);
      },
      () => {
        this.loading.emit(false);
      })
  }
}
