import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooklistComponent } from './booklist.component';
import { ListComponent } from './components/list/list.component';
import { StoreModule } from '@ngrx/store';
import { featureName, reducers } from './reducers';
import { EntryComponent } from './components/entry/entry.component';


@NgModule({
  declarations: [BooklistComponent, ListComponent, EntryComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(featureName, reducers)
  ],
  exports: [BooklistComponent]
})
export class BooklistModule { }



// @NgModule({
//   declarations: [WatchlistComponent, ListComponent, EntryComponent],
//   imports: [
//     CommonModule,
//     StoreModule.forFeature(featureName, reducers),
//     EffectsModule.forFeature([ListEffects]),
//     HttpClientModule
//   ],
//   exports: [WatchlistComponent]
// })

// export class WatchlistModule { }
