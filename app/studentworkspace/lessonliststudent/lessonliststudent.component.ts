import { Component, OnInit } from '@angular/core';
import {RequestService} from '../../shared/request.service';
import {ActivatedRoute,Router} from '@angular/router';
import {ShareObj,GlobalService } from './../../shared/global.service';
import { CommonService } from './../../shared/common.service';

import {Store} from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromSchedule from './../../ngrx/reducers/scheduleReducer';
import * as statActions from './../../ngrx/actions/statActions';
import * as fromState from './../../ngrx/index';

@Component({
  selector: 'app-lessonliststudent',
  templateUrl: './lessonliststudent.component.html',
  styleUrls: ['./lessonliststudent.component.css']
})
export class LessonliststudentComponent implements OnInit {
  lessonList: Observable<any>;
  
  loader: Observable<boolean> = this.store.select(fromSchedule.getPagePending);
  info = JSON.parse(localStorage.getItem('info'));
  
  constructor(private http:RequestService,
    private router: Router,
    private store: Store<fromState.AppState>) {}

  ngOnInit() {
    this.lessonList = this.store.select(fromSchedule.selectAll);
    // this.common.getEntityById<Student>(studentid);
    // this.http.scheduleStudent.subscribe(result => {
    //   this.lessonList = result;
      // console.log(this.lessonList);
    // })
  }

  getStat(data){
    this.store.dispatch(new statActions.getStatStudent({ id_student: this.info.data[0].id,
      id_schedule: data.id}));
    // this.share.shareObj = [{
    //   id_student: this.info.data[0].id,
    //   id_schedule:this.lessonList[i].id_schedule}];
      // console.log(this.share.shareObj);
    // this.http.getstatforstudent({
    //   id_student: this.info.data[0].id,
    //   id_schedule:this.lessonList[i].id_schedule}).subscribe();
  }
}
