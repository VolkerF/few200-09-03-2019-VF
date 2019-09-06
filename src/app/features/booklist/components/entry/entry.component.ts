import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BooklistState } from '../../reducers';
import { bookAdded } from '../../actions/list.actions';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  constructor(private store: Store<BooklistState>) { }

  ngOnInit() {
  }

  add(bookEl: HTMLInputElement, bookAuthor: HTMLInputElement, bookFormat: HTMLSelectElement) {
    this.store.dispatch(bookAdded({ title: bookEl.value },
      { author: bookAuthor.value },
      { format: bookFormat.value }));

    bookEl.value = '';
    bookEl.focus();
    bookAuthor.value = '';
  }

}
