import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { BooklistListItem } from '../../models';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { BooklistState as ListState, selectWhatListItems } from '../../reducers';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {

  @Input()
  items: BooklistListItem[];

  constructor(private store: Store<ListState>) { }


  ngOnInit() {

  }

}

