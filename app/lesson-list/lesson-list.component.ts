import { Component, OnInit } from '@angular/core';
import {RequestService} from '../shared/request.service';
import {ActivatedRoute,Router} from '@angular/router';
import { CommonService } from './../shared/common.service';
import { SortPipe } from './../shared/sort.pipe';

import {Store} from '@ngrx/store';
import * as userActions from '../ngrx/actions/userActions';
import * as fromState from './../ngrx/index';
import * as fromSchedule from './../ngrx/reducers/scheduleReducer';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-lesson-list',
  templateUrl: './lesson-list.component.html',
  styleUrls: ['./lesson-list.component.css']
})
export class LessonListComponent implements OnInit {

  lessonList: Observable<any>;
  loader: Observable<boolean> = this.store.select(fromSchedule.getPagePending);
  constructor(
    private http:RequestService,
    private router: Router,
    private http1:CommonService,
    private store: Store<fromState.AppState>) {
    }
  

  ngOnInit() {
    this.lessonList = this.store.select(fromSchedule.selectAll);
    // this.http.scheduleData.subscribe(result => {
    //   this.lessonList = result;
    // })
  
  }

  

  getLessonInfo(data){
    this.store.dispatch(new userActions.getUser({id_group: data.id_group, id_schedule: data.id}));
    // this.http.getLessonInfo({id_group: this.lessonList[i].id_group, id_schedule: this.lessonList[i].id}).subscribe();
  }
}
