import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import * as actions from '../actions/counter.actions';
import { tap, filter, map } from 'rxjs/operators';
import * as appActions from '../actions/app.actions';


@Injectable()
export class CounterEffects {

  readCountByForReset$ = createEffect(() => this.actions$.pipe(ofType(appActions.applicationStarted),
    // read from local storage
    map(() => localStorage.getItem('by')),
    // if null, stop here
    filter(val => val !== null),

    map(val => parseInt(val, 10)),

    map(by => actions.setCountBy({ by }))
  )
  );


  writeCountBy$ = createEffect(
    () => this.actions$.pipe(
      ofType(actions.setCountBy),
      tap(a => localStorage.setItem('by', a.by.toString()))
    ), { dispatch: false });


  constructor(private actions$: Actions) { }
}
