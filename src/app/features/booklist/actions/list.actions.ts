import { createAction } from '@ngrx/store';
import { ListEntity } from '../reducers/list.reducer';




let currentFakeId = 1;


export const bookAdded = createAction(
  '[booklist] list bookadded',
  ({ title }: { title: string }, { author }: { author: string }, { format }: { format: string }) => ({
    entity: {
      id: currentFakeId++ + 'T',
      title,
      author,
      format
    } as ListEntity
  })
);
