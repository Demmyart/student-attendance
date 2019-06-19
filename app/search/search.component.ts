import { Component, OnInit } from '@angular/core';
import {RequestService} from '../shared/request.service';
import {ActivatedRoute,Router} from '@angular/router';

import {Store} from '@ngrx/store'
import * as scheduleActions from '../ngrx/actions/scheduleActions'
import * as fromState from './../ngrx/index'


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  name: string = '';
  searchresult: any;
  constructor(
    private http:RequestService,
    private router: Router,
    private store: Store<fromState.AppState>) { }

  options = {
    month: 'long',
    day: 'numeric',
    weekday: 'long',
    timezone: 'UTC'
  };

  todayDate = new Date().toLocaleDateString('ru-RU',this.options);
  ngOnInit() {
  }

  datas = JSON.parse(localStorage.getItem("info"));
  id_teacher = this.datas.data[0].id;

  searchByGroup(){
    this.store.dispatch(new scheduleActions.searchByGroup({id_group: this.name,id_teacher: this.id_teacher}));
    // this.http.searchByGroup({id_group: this.name,id_teacher: this.id_teacher}).subscribe();
  }

}
