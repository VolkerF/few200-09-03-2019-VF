import { Component, OnInit } from '@angular/core';
import { BooklistListItem } from './models';
import { Store } from '@ngrx/store';
import { BooklistState, selectWhatListItems } from './reducers';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {

  items$: Observable<BooklistListItem[]>;

  constructor(private store: Store<BooklistState>) { }

  ngOnInit() {
    this.items$ = this.store.select(selectWhatListItems);

  }

}
