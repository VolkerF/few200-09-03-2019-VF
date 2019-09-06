import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { WatchlistState, selectWhatListItems } from './reducers';
import { WatchlistListItem } from './models';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent implements OnInit {

  items$: Observable<WatchlistListItem[]>;

  constructor(private store: Store<WatchlistState>) { }

  ngOnInit() {
    this.items$ = this.store.select(selectWhatListItems);
  }

}
