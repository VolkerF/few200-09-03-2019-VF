import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { WatchlistState } from '../../reducers';
import { showAdded } from '../../actions/list.actions';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  constructor(private store: Store<WatchlistState>) { }

  ngOnInit() {
  }

  add(showEl: HTMLInputElement) {
    this.store.dispatch(showAdded({ title: showEl.value }));
    showEl.value = '';
    showEl.focus();
  }
}
