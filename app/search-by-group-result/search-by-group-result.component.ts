import { Component, OnInit } from '@angular/core';
import {RequestService} from '../shared/request.service';
import {ActivatedRoute,Router} from '@angular/router';
import { FilterPipe} from '../shared/filter.pipe';


import {Store} from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromUser from './../ngrx/reducers/getUserReducer';
import * as fromSchedule from './../ngrx/reducers/scheduleReducer';
import * as fromState from './../ngrx/index';
import * as statActions from '../ngrx/actions/statActions';


@Component({
  selector: 'app-search-by-group-result',
  templateUrl: './search-by-group-result.component.html',
  styleUrls: ['./search-by-group-result.component.css']
})
export class SearchByGroupResultComponent implements OnInit {
  searchList: Observable<any>;
  statistics: any;
  
    constructor(
      private http:RequestService,
      private router: Router,
      private store: Store<fromState.AppState>) {
      // this.http.searchList.subscribe(result => {
      //   this.searchList = result;
      // })
    }

  ngOnInit() {
    this.searchList = this.store.select(fromSchedule.selectAll);
  }

  getstatbygroup(data){
    this.store.dispatch(new statActions.getStatUser({id_schedule: data.id,id_group: data.id_group}));
    // this.http.getstatbygroup({id_schedule: data.id,
    // id_group: data.id_group}).subscribe(result =>{
    //   this.statistics = result;
    //   console.log(this.statistics);
    // })
  }
}
