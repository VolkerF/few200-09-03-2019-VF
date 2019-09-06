import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import * as appActions from '../../../actions/app.actions';
import * as listActions from '../actions/list.actions';
import { switchMap, tap, map } from 'rxjs/operators';
import { ListEntity } from '../reducers/list.reducer';


@Injectable()
export class ListEffects {

  readonly url = 'http://localhost:3000/shows';

  // when starting the app, get the shows from API
  loadShowsOnAppStart$ = createEffect(() =>
    this.actions$.pipe(ofType(appActions.applicationStarted),
      switchMap(() => this.client.get<ListEntity[]>(this.url)
        .pipe(map(items => listActions.showsLoaded({ shows: items }))
        )
      )
    ), { dispatch: true }
  );


  // when they add a show, post it to the API and return an action

  saveShowToServer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(listActions.showAdded),
      map(a => a.entity),
      switchMap(a => this.client.post<ListEntity>(this.url, { title: a.title })
        .pipe(
          map(result => listActions.showAddedSuccess({ oldid: a.id, newEntity: result }))
        )
      )

    ), { dispatch: false }
  );

  constructor(private actions$: Actions, private client: HttpClient) { }
}

interface ListPostRequest {
  title: string;
}
