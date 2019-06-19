import { Component, OnInit } from '@angular/core';


import {Store} from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromStat from './../ngrx/reducers/statReducer'
import * as fromState from './../ngrx/index'


@Component({
  selector: 'app-statforgroup',
  templateUrl: './statforgroup.component.html',
  styleUrls: ['./statforgroup.component.css']
})
export class StatforgroupComponent implements OnInit {

  list: Observable<any>;
  loader: Observable<boolean> = this.store.select(fromStat.getPagePending);
  constructor(
    private store: Store<fromState.AppState>
  ) { }

  ngOnInit() {
    this.list = this.store.select(fromStat.selectAll);
  }

}
