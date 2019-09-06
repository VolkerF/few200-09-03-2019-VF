import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState, selectCurrentCount, selectDecrementDisabled, selectCountBy } from 'src/app/reducers';

@Component(
  {
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html'
  }
)
export class DashboardComponent implements OnInit {

  current$: Observable<number>;
  by$: Observable<number>;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.current$ = this.store.select(selectCurrentCount);
    this.by$ = this.store.select(selectCountBy);
  }
}
