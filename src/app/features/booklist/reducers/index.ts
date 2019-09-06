export const featureName = 'booklistFeature';

import * as fromList from './list.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as models from '../models';

export interface BooklistState {
  list: fromList.ListState;
}


export const reducers = {
  list: fromList.reducer
};


// Selectors:

// 1. Feature selector
const selectFeature = createFeatureSelector<BooklistState>(featureName);

// 2.Selector per branch of the feature state
const selectListBranch = createSelector(selectFeature, f => f.list);

// 3. (optional) helpers
const { selectAll: selectAllListEntities } = fromList.adapter.getSelectors(selectListBranch);


// 4. what the components need
export const selectWhatListItems = createSelector(selectAllListEntities, e => e as models.BooklistListItem[]);
