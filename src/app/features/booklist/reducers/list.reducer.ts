import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, Action, on } from '@ngrx/store';
import * as actions from '../actions/list.actions';


export interface ListEntity {
  id: string;
  title: string;
  author: string;
  format: string;
}

export interface ListState extends EntityState<ListEntity> {

}

export const adapter = createEntityAdapter<ListEntity>();

// const initialState = adapter.getInitialState();

const initialState: ListState = {
  ids: ['1', '2'],
  entities: {
    1: {
      id: '1',
      title: 'The Good Book',
      author: 'Who Knows',
      format: 'hardcover'
    },
    2: {
      id: '2',
      title: 'The Bad Book',
      author: 'Myself',
      format: 'paperback'
    }
  }
};


const reducerFunction = createReducer(
  initialState,
  on(actions.bookAdded, (state, action) => adapter.addOne(action.entity, state))
);

export function reducer(state: ListState = initialState, action: Action) {
  return reducerFunction(state, action);
}





